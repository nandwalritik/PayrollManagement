# Gr07_PayrollManagementSystem

- Trello Link For User Stories
- https://trello.com/b/jhUf9Eb9/payroll-management-systemgr07

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Requirements

- Any operating system (i.e. Linux, Windows, MacOS X)
- A little knowledge of React and Node.js . Don't worry if you are new to it, you just need knack to learn.

## Agile Documentation

- Move to PayrollManagement/AgileDocumentation to look at:-
- **UI Prototyping**
- **Architecture Qualities**
- **Estimation**
- **High Level Domain Architecture**
- **Software Requirement Analysis**
- **Sprint Backlog**
- **Use Case Diagram**
- **User Stories**
- **Website Workflow**

## Development Setup

- Install node, npm.

## To start FrontEnd React Server

- move to PayrollManagement/payroll-frontend folder
- npm i
- npm start

## To start Backend Server

- move to PayrollManagement/backend folder
- npm i
- nodemon index.js

## To Create User in Postgresql

- create a role called **me** and give it a password of **password**. A role can function as a user or a group , so in this case, we’ll be using it as a user.
- We want **me** to be able to create a database.So run the following :-
  **ALTER ROLE me CREATEDB;**
- For connecting postgres with **me**.Run:-
  **psql -d postgres -h localhost -U me**

## To Create Tables

- Run the sql commands mentioned in PayrollManagement/commands/DDL.sql file.

## Authors

- **Ritik Nandwal**
- **Dhanshree Kulkarni**
- **Nehal Jain**
- **Mumal Kumari Rathore**

## License

This project is licensed under the SGSITS.

[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)]
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)]
