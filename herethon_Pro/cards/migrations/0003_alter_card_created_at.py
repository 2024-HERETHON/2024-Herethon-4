# Generated by Django 5.0.6 on 2024-07-02 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0002_card_user_alter_card_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]