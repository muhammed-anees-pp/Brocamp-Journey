from django.db import models
# from django.utils.text import slugify

# Create your models here.
class Member(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.IntegerField(null=True) #Added later
    join_date = models.DateField(null=True) #Added later
    slug = models.SlugField(default="", null=False) #Slug field added
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"