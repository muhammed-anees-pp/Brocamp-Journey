from django.db import models

# Create your models here.
class Projects(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='picture')
    dec = models.TextField()
    offer = models.BooleanField(default=False)
