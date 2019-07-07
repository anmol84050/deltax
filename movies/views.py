from django.http import HttpResponse
import pymysql
from django.shortcuts import render

con=pymysql.connect(host='localhost',user='root',password='12345',db='imdb',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)


def index(request):
    # con=pymysql.connect(host='localhost',user='root',password='12345',db='imdb',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)
    mycursor=con.cursor()
    mycursor.execute('select * from Movies;')
    # return render(request,'./Template/movies.html',{"sample":mycursor.fetchall()})
    return render(request, '../Template/index.html', {"sample":mycursor.fetchall()})


