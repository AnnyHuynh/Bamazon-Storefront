var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId)
    displayItems();
    buyItem();
});

function displayItems() {

    connection.query("SELECT * FROM bamazonDB.products", function (err, response) {
        if (err) throw err;

        var table = new Table ({
            head: ["item_id", "product_name", "stock_quantity", "price"]
        });

        console.log("Here are the available items:")
        console.log("=============================");

        for (var i = 0; i < response.length; i++) {
            table.push([response[i].item_id, response[i].product_name, response[i].stock_quantity, response[i].price]);
            
        }
        console.log(table.toString());    
    });
}

function buyItem() {
    connection.query("SELECT * FROM bamazonDB.products", function (err, response) {
        if (err) throw err;
        // User prompt:
        // 1.  ID of the product to buy
        // 2.  Units they want to buy
        inquirer.prompt([
            {
                name: "itemId",
                type: "input",
                message: "What is the ID of item you would like to buy?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
            .then(function (answer) {
                var chosenItem;
                console.log(answer.itemId);
                //console.log(response);
                for (var i = 0; i < response.length; i++) {
                    if (response[i].item_id == answer.itemId) {
                        chosenItem = response[i];
                    }
                  }
                  console.log(chosenItem);
                if(chosenItem.stock_quantity >= answer.quantity){
                    var totalPrice = answer.quantity*chosenItem.price;
                    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
                    [answer.quantity, chosenItem.item_id],
                    function (err, response){
                        if(err){
                            throw err;
                        };
                        console.log("Your total will be $" +  totalPrice);
                        //console.log(response);

                        connection.end();
                    }
                    
                    );

                }else if (chosenItem.stock_quantity < answer.quantity){
                    console.log("Stock Insufficient! Please order less!")
                }
                });
              }
    )};
          
              

            

