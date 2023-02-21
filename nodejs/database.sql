create table users(Username varchar(200),Password varchar(200),Email varchar(200),Confirmpassword varchar(200));
create table theater(theaterid varchar(200),class_type varchar(200),no_of_seats varchar(200));
create table  movies(movieid varchar(200),moviename varchar(200),language varchar(200),start_time varchar(100),end_time varchar(100));
create table manager(movieid varchar(200),moviename varchar(200),price varchar(200),start_time varchar(200),end_time varchar(200),theaterid varchar(200),ticketno varchar(200));
create table tickets(ticketnumber varchar(200),movieid varchar(200),seatno varchar(200));
create table hall_seats (upperclass varchar(255), lowerclass varchar(255));
CREATE TABLE costmerup (theaterid VARCHAR(255), movieid VARCHAR(255), moviename VARCHAR(255), language VARCHAR(255),upperclass VARCHAR(20));
CREATE TABLE costmerlow (theaterid VARCHAR(255), movieid VARCHAR(255), moviename VARCHAR(255), language VARCHAR(255), lowerclass VARCHAR(20));
