create table admin(
	admin_id varchar(255),
	username varchar(255),
	email varchar(255),
	password varchar(255),
	primary key(email)
);
create table organisation(
	org_name varchar(255),
	email varchar(255),
	location varchar(255),
	contact_number varchar(255),
	paid_leave_limit int,
	encashed_leave_limit int,
	primary key (org_name),
	foreign key (email) references admin on delete
	set null
);
create table department(
	dept_id varchar(255),
	dept_name varchar(255),
	org_name varchar(255),
	primary key (dept_id),
	foreign key (org_name) references organisation on delete
	set null
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
	present int,
	paid_leave_taken int,
	encashed_leave_this_month int,
	encashed_leave_till_date int,
	e_id varchar(255),
	doj date,
	name varchar(255),
	dob date,
	address varchar(255),
	city varchar(255),
	state varchar(255),
	pincode numeric(6, 0),
	email varchar(255) unique,
	password varchar(255),
	org_name varchar(255),
	dept_id varchar(255),
	grade_id varchar(255),
	primary key(email),
	foreign key (org_name) references organisation on delete
	set null,
		foreign key (dept_id) references department on delete
	set null,
		foreign key (grade_id) references gradepay on delete
	set null
);
create table is_given(
	ex_type varchar(255),
	amount int,
	email varchar(255),
	primary key (ex_type, email),
	foreign key (email) references employee on delete
	set null,
		foreign key (ex_type) references extras on delete
	set null
);
create table extras(
	ex_type varchar(255),
	ex_id varchar(255),
	primary key (ex_type)
);
create table payroll(
	transaction_id varchar(255),
	month varchar(255),
	year varchar(255),
	gross_pay varchar(255),
	income_tax varchar(255),
	emp_mail varchar(255),
	admin_mail varchar(255),
	primary key (transaction_id),
	foreign key (emp_mail) references employee on delete
	set null,
		foreign key (admin_mail) references admin on delete
	set null
);
create function record_attendance() returns trigger as $record_attendance$ BEGIN if date_part('day', current_date) = 1 then new.encashed_leave_till_date := old.enchashed_leave_till_date + old.encashed_leave_this_month;
with result as (
	select case
			when sum(amount) is null then gross
			else gross + sum(amount)
		end as gross_pay,
		income_tax,
		emp_mail,
		admin_mail
	from (
			select basic_pay + grade_ta + grade_da + grade_bonus -(
					(paid_leave_taken - organisation.paid_leave_limit) * 10
				) as gross,
				0.12 * basic_pay as income_tax,
				emp_mail,
				admin_mail
			from (
					(
						select emp_mail,
							admin_mail,
							grade_id,
							paid_leave_taken
						from employee
							natural join organisation
						where emp_mail = 'abc@gmail.com'
					) as result_1
					natural join gradepay
				) as result_2
				left outer join is_given on result_2.emp_mail = is_given.emp_mail
		)
)
insert into payroll
values (
		uuid.v4(),
		date_part('month', current_date),
		date_part('year', current_date),
		result.gross_pay,
		result.income_tax,
		result.emp_mail,
		result.admin_mail
	);
else if new.present = 1 then new.present := old.present + 1;
end if;
if new.encashed_leave_this_month = 1 then new.encashed_leave_this_month := old.encashed_leave_this_month + 1;
end if;
if new.paid_leave_taken = 1 then new.paid_leave_taken := old.paid_leave_taken + 1;
end if;
end if;
return new;
end;
$record_attendance$ language plpgsql;
create trigger record_attendance before
update on employee for each row execute procedure record_attendance();