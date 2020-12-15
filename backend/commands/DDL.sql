create table admin(
	admin_id varchar(255),
	username varchar(255),
	email varchar(255) unique,
	password varchar(255),
	primary key(admin_id)
);

create table organisation(
	org_name varchar(255),
	admin_id varchar(255),
	location varchar(255),
	contact_number varchar(255),
	paid_leave_limit int,
	encashed_leave_limit int,
	primary key (org_name),
	foreign key (admin_id) references admin
		on delete set null
);

create table department(
	dept_id varchar(255) ,
	dept_name varchar(255),
	org_name varchar(255),
	primary key (dept_id),
	foreign key (org_name) references organisation
		on delete set null
);

create table gradepay(
	grade_id varchar(255),
	grade_name varchar(255),
	basic_pay int,
	grade_pf varchar(255),
	grade_bonus int,
	grade_ta varchar(255),
	grade_da varchar(255),
	primary key (grade_id)
);


create table employee(
	paid_leave_taken int,
	encashed_leave_this_month int,
	encashed_leave_till_date int,
	e_id varchar(255),
	doj varchar(255),
	name varchar(255),
	dob varchar(255),
	address varchar(255),
	city varchar(255),
	state varchar(255),
	pincode numeric(6,0),
	email varchar(255) unique,
	password varchar(255),
	org_name varchar(255),
	dept_id varchar(255),
	grade_id varchar(255),
	primary key(e_id),
	foreign key (org_name) references organisation
		on delete set null,
	foreign key (dept_id) references department
		on delete set null,
	foreign key (grade_id) references gradepay
		on delete set null
);

create table extras(
	ex_type varchar(255),
	amount int,
	e_id varchar(255),
	primary key (ex_type),
	foreign key (e_id) references employee
		on delete set null
);

create table payroll(
	transaction_id varchar(255),
	month varchar(255),
	year  varchar(255),
	gross_pay varchar(255),
	income_tax varchar(255),
	e_id varchar(255),
	admin_id varchar(255),
	primary key (transaction_id),
	foreign key (e_id) references employee
		on delete set null,
	foreign key (admin_id) references admin
		on delete set null
);
