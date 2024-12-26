from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission

# 1. Custom User Model with AbstractUser
# class CustomUser(AbstractUser):
#     profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
class CustomUser(AbstractUser):
    # Other fields for your custom user model
    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Add a unique related_name
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_user_permissions",  # Add a unique related_name
        blank=True
    )



# 2. Custom Manager for Abstract Base User
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class AbstractBaseUserModel(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    class Meta:
        abstract = True

# 3. Example Model for Aggregates
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    published_date = models.DateField()
    copies_sold = models.PositiveIntegerField()

# 4. Bulk Create Example Model
class Publisher(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()

# 5. Date Filters (month, year, day, weekday)
class LibraryEvent(models.Model):
    name = models.CharField(max_length=100)
    event_date = models.DateField()

# 6. String Filters (contains, icontains)
class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')
    content = models.TextField()
    reviewer = models.CharField(max_length=100)

# 7. Exclude Example
class BorrowTransaction(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    borrower_name = models.CharField(max_length=100)
    borrow_date = models.DateField()
    return_date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=(
        ('Borrowed', 'Borrowed'),
        ('Returned', 'Returned'),
        ('Overdue', 'Overdue'),
    ))