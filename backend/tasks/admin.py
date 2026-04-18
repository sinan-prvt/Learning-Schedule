from django.contrib import admin
from .models import Week, Day, Session, Question

admin.site.register(Week)
admin.site.register(Day)
admin.site.register(Session)
admin.site.register(Question)
