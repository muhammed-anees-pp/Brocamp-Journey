from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

# Model for Author
class Author(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()

    def __str__(self):
        return self.name

# Model for Book with ForeignKey to Author
class Book(models.Model):
    title = models.CharField(max_length=100)
    publication_date = models.DateField()
    author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

# Signal to execute after a new Book is saved
@receiver(post_save, sender=Book)
def book_saved(sender, instance, created, **kwargs):
    if created:
        print(f"New book '{instance.title}' by {instance.author.name} saved!")
