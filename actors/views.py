from django.http import HttpResponse
import pymysql
from django.shortcuts import render

con=pymysql.connect(host='localhost',user='root',password='12345',db='imdb',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)
mycursor=con.cursor()


def get_actors(request):
    mycursor.execute('select * from actors')
    return render(request, '../Template/actors.html', {"sample_actors": mycursor.fetchall()})