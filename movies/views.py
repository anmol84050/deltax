from django.http import HttpResponse
import pymysql
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
con=pymysql.connect(host='localhost',user='root',password='12345',db='imdb',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)

def index(request):
    context={"allmovies": get_movies(request).data['allmovies'], "allactors":get_actors(request).data['allactors'], "actsin":get_actoractsin(request).data['actsin']}
    return render(request,'movies/index.html',context)

@api_view(('GET',))
def get_movies(request):
    cursor1=con.cursor()
    cursor1.execute('select * from Movies;')
    allmovies=cursor1.fetchall()
    return Response(status=200, data={"allmovies" : allmovies})

@api_view(('GET',))
def get_actors(request):
    cursor2=con.cursor()
    cursor2.execute('select * from Actors;')
    allactors=cursor2.fetchall()
    return Response(status=200,data={"allactors":allactors})

@api_view(('GET',))
def get_actoractsin(request):
    cursor3=con.cursor()
    cursor3.execute('select * from actsinmovie;')
    actsin=cursor3.fetchall()
    return Response(status=200,data={"actsin":actsin})


@api_view(('POST',))
def edit_movies(request):
    print("REQUEST:", request)
    return Response(status=200)


