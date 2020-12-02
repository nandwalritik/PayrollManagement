create table admin(
	admin_id varchar(255),
	username varchar(255),
	email varchar(255) NOT NULL primary key,
	password varchar(255)
);


create table Employee(
	paid_leave_taken int,
	encashed_leave_this_month int,
	encashed_leave_till_date int,
	e_id varchar(255) not null primary key,
	doj varchar(255),
	name varchar(255),
	dob varchar(255),
	age varchar(255),
	years_of_service int,
	address varchar(255),
	city varchar(255),
	state varchar(255),
	pincode varchar(255)
);
