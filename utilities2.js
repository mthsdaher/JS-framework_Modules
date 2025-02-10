/* Date: 02/07/2025
Name: Matheus Veloso Daher, Vitor Latorraca, Thaian Curcio
Subject: Lab-Assignment#2 (Beta 2.0)–Node.JS & Modules
Course: COMP2068 JavaScript Frameworks
Professor: Prof. Anmar Jarjees
University: Georgian@ILAC
Description: This is the utilities2.js file that contains the functions that will be exported to the main2.js file. 
Using the Classical export method.
*/

exports.getAreaOfTriangle = function(base, height) {
    const area = 0.5 * base * height;
    return `The area of the triangle is: ${area}`;
};

exports.getAreaOfSquare = function(side) {
    return `The area of the square is: ${side * side}`;
};