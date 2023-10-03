// Exercise #2: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

// Start coding here
for (let res in restaurants) {
    newRestaurants[res] = "Restaurant Name: " + restaurants[res]
}
console.log(newRestaurants);