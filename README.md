# Online Store MongoDB Final Project

This repository contains the final project for the Advanced Databases (NoSQL) course.  
The project focuses on designing, implementing, and analyzing a MongoDB-based database for an Online Store system.

The project is completed individually and is an extension of the midterm project.

---

## Project Description

The goal of this project is to design a non-relational database using MongoDB and demonstrate practical usage of NoSQL concepts, including data modeling, aggregation, indexing, and data analysis.

The Online Store system supports core e-commerce functionality such as user management, product catalog, order processing, and product reviews.

---

## Technologies Used

- MongoDB
- MongoDB Compass
- JavaScript (MongoDB queries)
- GitHub

---

## Data Model Overview

The database consists of the following collections:

- users – stores user information
- products – stores product details
- orders – stores orders placed by users (with embedded order items)
- reviews – stores user reviews for products

The data model uses a combination of embedded documents and document references based on access patterns and MongoDB best practices.

---

## Implemented Functionality

### CRUD Operations
Basic Create, Read, Update, and Delete operations were performed on all main collections using MongoDB Compass.

### Aggregation Queries
Advanced MongoDB aggregation pipelines were implemented to analyze the data, including:
- Total number of orders per user
- Total amount spent per user
- Average product rating
- Data integration using $lookup

All aggregation queries are stored in the `queries/aggregation.js` file.

### Indexing
Indexes were created to improve query performance, including indexes on:
- orders.user_id
- reviews.product_id
- products.category

Index definitions are stored in the `queries/indexes.js` file.

---

## Repository Structure

online-store-mongodb-final/
│
├── report/
│   └── Final_Report.pdf
│
├── diagrams/
│   ├── ERD.png
│   ├── CRD.png
│
├── queries/
│   ├── aggregation.js
│   ├── indexes.js
│
├── data/
│   └── sample_documents.json
│
└── README.md

## How to Use

The MongoDB queries provided in this repository can be executed using MongoDB Compass or the MongoDB shell.  
The project is intended for academic and demonstration purposes.

## Author

Kadyrkhan Zhalgas  
SE-2435
