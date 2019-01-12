DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

 USE bamazonDB;


CREATE TABLE products (
item_id INT PRIMARY KEY NOT NULL,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "laptop", "electronics", 500, 700);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "iphone", "electronics", 800, 900);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "headphones", "electronics", 20, 400);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "shirt", "apparel", 80, 1000);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "shorts", "apparel", 20, 200);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (15, "milk", "produce", 4, 400);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (18, "vitamin", "health", 15, 90);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (22, "baseball glove", "sports", 50, 30);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (25, "baseball", "sports", 10, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (27, "hammer", "home improvement", 25, 150);

SELECT * FROM  products;
SELECT * FROM bamazonDB;



