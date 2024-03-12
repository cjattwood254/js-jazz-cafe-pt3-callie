// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
   sales = [
    { coffee: "black", amount: 3 },
    { item: "latte", amount: 6 },
    { item: "iced", amount: 4 }
   ];

    function calculateCoffeeSold (sales){
        let total = 0
        for(const sales of sales){
            total += sales
        }
        return total;
    }


// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
function filterDecaf(coffees){
    let decafCoffee = [];
    for (const coffee of coffees){
        if(coffee.decaf === true){
            decafCoffee.push(coffees);
        }
    }
    return decafCoffee;
}

let coffees = [
    {name:"black", decaf: false}
    {name:"latte", decaf: true}
    {name:"iced", decaf: false}
];

// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class Specialty extends JazzCoffeeRoasters{
    constructor(name, price, type){
        super(name, price);
        this.style = style;
    }
}

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function JazzCoffeeBlends(name, price){
    let blends = {};
    this.name = name;
    this.price = price;
}

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups{
    constructor(size = "small", oz = 8){
        this.size = size;
        this.oz = oz;
    }
}

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    
    `Join us at our ${name} on ${date} at ${venue}`
    
    // Task 9: Use spread operators on an array
    function showCoffeeTypes(type1, type2, type3){

    }

    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    // Add a new coffee type using spread operator and create an updated coffee type array
    showCoffeeTypes(... coffeeTypes);
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    