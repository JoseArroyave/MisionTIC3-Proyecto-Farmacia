# Generated by Django 3.2.8 on 2021-10-12 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InvApp', '0003_farmacia'),
    ]

    operations = [
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id_empleado', models.AutoField(primary_key=True, serialize=False)),
                ('doc_empleado', models.IntegerField()),
                ('id_farmacia', models.IntegerField()),
                ('nombre', models.CharField(max_length=60)),
                ('apellido', models.CharField(max_length=60)),
            ],
        ),
    ]