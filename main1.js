/* Date: 02/07/2025
Name: Matheus Veloso Daher, Vitor Latorraca, Thaian Curcio
Subject: Lab-Assignment#2 (Beta 2.0)–Node.JS & Modules
Course: COMP2068 JavaScript Frameworks
Professor: Prof. Anmar Jarjees
University: Georgian@ILAC
Description: This is the utilities1.js file that contains the functions that will be exported to the main1.js file.
The main file for my the ES modules syntax for importing and exporting modules content (package.json type: "module")
*/

//List of functions:

import { concatenatingLabels, convertingMeasurements, getAreaOfCircle, getPokerHand } from './utilities1.js';

console.log(concatenatingLabels("first", "function"));
console.log(convertingMeasurements(2, "cm"));
console.log(convertingMeasurements(2, "inches"));
console.log(getAreaOfCircle(3));
console.log(getPokerHand());