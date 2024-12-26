from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=250)
    batch = models.TextField()
    week = models.IntegerField(null=True)
    grade = models.CharField(max_length=2)

    def __str__(self):
        return f"{self.name}"


