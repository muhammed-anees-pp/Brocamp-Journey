from django.db import models

# Create your models here.
class Details(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    birth_date = models.DateField(blank=False)
    job = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    