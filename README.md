<h1>IMDB</h1>
<p>This Project is done using Simple Bootstrap using Django Web Framework</p>
<p>The Database used in this project is Mysql</p>
<p><b>Softwares Required</b> - Python, pip, Django, Mysql, PyCharm </p>
<p><b>Languages used</b> - Bootstrap, Python, AJAX, JavaScript, HTML, CSS</p>
<h3>ScreenShots is added in the screenshots folder inside the root Directory</h3>

<h2>Relationships </h2>
<ul>
<li>Actor can act in multiple movies </li>
<li>Movie can have multiple actors</li>
</ul>

<h2>Application specifics</h2>
<ul>
1. Screen to list all movies with Name, Year of release and all Actors of that movie <br>
2. Screen to ‘add’ a new movie with the necessary fields with existing actors. If the user wants to add new ‘Actors’ while creating the movie which are not present in the database then he should be able to do so while being on the same screen. <br>
3. ‘Listing’ screen should allow user to click on ‘Edit’ and edit all the details of the movie. 
</ul><br>
 

<h2>Database Queries</h2>
<ul>
<li>create database IMDB;<br></li>

<li>create table Actors (Act_id integer, Actor_name varchar(20), Sex char(1), DOB date, Actor_bio varchar(200), primary key(Act_id));<br></li>

<li>create table Movies (Movie_id integer, Movie_name varchar(50), Year_of_release integer, Plot varchar(200), Image varchar(500), primary key(Movie_id));<br></li>

<li>create table ActsInMovies(Act_id int,Movie_id int,foreign key(Act_id) references Actors(Act_id), foreign key(Movie_id) references Movies(Movie_id));<br></li>


<li>INSERT INTO Actors values ('1', 'Salman Khan', 'M', '1965-12-27', 'born as Salman Salim Abdul Rashid Khan is an Indian film actor, producer, occasional singer and television personality');<br></li>
<li>insert into Actors values ('2', 'Sharukh Khan', 'M', '1965-11-02','Sharukh Khan, also known by the initialism SRK, is an Indian actor, film producer.');<br></li>

<li>insert into Movies values('1', 'BodyGuard', '2011', 'Bodyguard is a Hindi action film, starring Salman Khan and Kareena Kapoor Khan in lead roles', 'null');<br>
<li>insert into Movies values('2', 'Jab Tak hai Jaan', '2012', 'Samar is smitten by Meera in London. He returns to India after she leaves him and dedicates himself to the army. Akira falls in love with him but later decides to unite him with Meera.', 'Null');<br></li>

<li>insert into ActsInMovies values('1','1');<br></li>
<li>insert into ActsInMovies values('2','2');<br></li>

<li>select * from Movies;<br></li>
<li>select * from Actors;<br></li>
<li>select * from ActsInMovies;<br></li>
</ul>


