"use strict";
/* Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure. Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list. */
let people = { friends: [] };
let object1 = {
    firstName: 'usman',
    lastName: 'mahzar',
    id: 9048
};
let object2 = {
    firstName: 'Mansoor',
    lastName: 'Ahmed',
    id: 9049
};
let object3 = {
    firstName: 'Moshin',
    lastName: 'Ishaq',
    id: 9050
};
people.friends.unshift(object1, object2, object3);
for (let persons of people.friends) {
    console.log(persons);
}
;
