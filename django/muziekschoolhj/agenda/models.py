from django.conf import settings
from django.db import models
from django.utils import timezone

class PostActivity(models.Model):   
    date = models.DateField(u'Datum van activiteit')
    event_start = models.TimeField(u'Begintijd')
    event_end = models.TimeField(u'Eindtijd')
    note = models.TextField(u'Omschrijving', max_length=200)
    costs = models.CharField(u'Kosten', max_length=200)

    def __str__(self):
       return self.note

    class Meta:
        verbose_name = u'Activiteit'
        verbose_name_plural = u'Activiteiten'