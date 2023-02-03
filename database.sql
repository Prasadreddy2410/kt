use kt;
create table users(Username varchar(200),Password varchar(200),Email varchar(200),Confirmpassword varchar(200));
insert into users (Username,Password,Email,Confirmpassword)values('abhi','abhi','abhi@gmail.com','abhi');
create table theater(theaterid varchar(200),class_type varchar(200),no_of_seats varchar(200));
create table  movies(movieid varchar(200),moviename varchar(200),language varchar(200),start_time varchar(100),end_time varchar(100));