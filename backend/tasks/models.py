from django.db import models

class Week(models.Model):
    week_id = models.CharField(max_length=10, unique=True) # e.g. W1
    title = models.CharField(max_length=100) # e.g. Python
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.week_id} - {self.title}"

class Day(models.Model):
    week = models.ForeignKey(Week, related_name='days', on_delete=models.CASCADE)
    day_number = models.IntegerField() # e.g. 1
    topic = models.CharField(max_length=200) # e.g. Basics & Data Types
    category = models.CharField(max_length=100) # e.g. Python
    duration = models.CharField(max_length=50, default='8h')
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"Day {self.day_number}: {self.topic}"

class Session(models.Model):
    day = models.ForeignKey(Day, related_name='sessions', on_delete=models.CASCADE)
    time = models.CharField(max_length=20) # e.g. 9:00 AM
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.time} - {self.title}"

class Question(models.Model):
    day = models.ForeignKey(Day, related_name='questions', on_delete=models.CASCADE)
    text = models.TextField()
    options = models.JSONField(default=list)
    correct_option_index = models.IntegerField()

    def __str__(self):
        return self.text


class InterviewQuestion(models.Model):
    LEVEL_CHOICES = [
        ('Junior', 'Junior'),
        ('Mid', 'Mid'),
        ('Senior', 'Senior'),
    ]
    TYPE_CHOICES = [
        ('Conceptual', 'Conceptual'),
        ('Coding', 'Coding'),
        ('Scenario', 'Scenario'),
    ]

    day = models.ForeignKey(Day, related_name='interview_questions', on_delete=models.CASCADE)
    question = models.TextField()
    answer = models.TextField()
    level = models.CharField(max_length=10, choices=LEVEL_CHOICES, default='Junior')
    type = models.CharField(max_length=15, choices=TYPE_CHOICES, default='Conceptual')

    def __str__(self):
        return f"[{self.level}][{self.type}] {self.question[:60]}"
