// create an object name Customer and add key pair values
const customer = 
    {firstName: 'jake',
     lastName: 'smith',
     email: 'jaekSmih!aol.com',
     phone: 'undefined',
     zipCode: '631',
     favoriteFlavors: '32',
     cupSize: 'medium',
     favoriteStore: 'Target',
     firstVisit: 'false'
    };
    console.table(customer);

// use bracket notation to modify properities in the object
customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = '3195551234';
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = 'coffee', 'strawberry', 'matcha';
console.table(customer);

// delete certain properties using the delete keyword values
delete customer['zipCode'];
delete customer['favoriteStore'];
console.table(customer);

//add keys values using dot notation
customer.toppings = 'cholcolate sprinkles', 'wafer straw', 'gummy bears';
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = 5.32;
console.table(customer);

//print the keys to an array
console.log(Object.keys(customer));