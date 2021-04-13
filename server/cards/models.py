from django.db import models

# # Create your models here.

#this set up is ideal for one user.
class Card(models.Model):
    name = models.CharField(max_length=10)
    suit = models.CharField(max_length=10)
    color = models.CharField(max_length=10)
    used = models.BooleanField(default=False)