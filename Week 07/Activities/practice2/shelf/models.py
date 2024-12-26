from django.db import models

# Create your models here.
class Animal(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        abstract = True

class Dog(Animal):
    breed = models.TextField()

class Cat(Animal):
    color = models.TextField()


class Vehicle(models.Model):
    make = models.CharField(max_length=100)

    def __str__(self):
        return self.make

class Car(Vehicle):
    door = models.IntegerField()

    def __str__(self):
        return self.door

class Truck(Vehicle):
    load = models.IntegerField()

    def __str__(self):
        return self.load


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Blog(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)


class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ManyToManyField(Author)