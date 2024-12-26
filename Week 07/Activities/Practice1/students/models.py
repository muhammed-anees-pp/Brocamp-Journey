from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=250)
    age = models.IntegerField()
    batch = models.CharField(max_length=10)
    week = models.IntegerField()
    join_date = models.DateField()

    def __str__(self):
        return f"{self.name}"
