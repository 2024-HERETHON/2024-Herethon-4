# Generated by Django 4.2.13 on 2024-07-05 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articleapp', '0003_alter_article_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='keyword',
            field=models.TextField(max_length=20),
        ),
        migrations.AlterField(
            model_name='article',
            name='keyword2',
            field=models.TextField(max_length=20),
        ),
        migrations.AlterField(
            model_name='article',
            name='keyword3',
            field=models.TextField(max_length=20),
        ),
    ]
