from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=100)
    # image = models.ImageField(upload_to='images', blank=True, null=True)
    content = models.TextField(max_length=500)
    author = models.CharField(max_length=100)
    upload_date = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.author}:{self.title}"
