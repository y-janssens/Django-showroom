from django.db import models
from users.models import Profile

class Message(models.Model):
    sender = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True, blank=True, related_name="sent")
    recipient = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True, blank=True, related_name="messages")
    subject = models.CharField(max_length=200, null=False, blank=False)
    body = models.TextField(null=False, blank=False)
    is_read = models.BooleanField(default=False, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.subject

    class Meta:
        ordering = ['is_read', '-created']