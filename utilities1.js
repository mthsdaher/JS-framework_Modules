/* Date: 02/07/2025
Name: Matheus Veloso Daher, Vitor Latorraca, Thaian Curcio
Subject: Lab-Assignment#2 (Beta 2.0)–Node.JS & Modules
Course: COMP2068 JavaScript Frameworks
Professor: Prof. Anmar Jarjees
University: Georgian@ILAC
Description: This is the utilities1.js file that contains the functions that will be exported to the main1.js file.
*/

//Important note: If I use export default I can only export ONE function per file.
//If I want to export multiple functions I have to use ONLY the export keyword before each function.

// First Function
export const concatenatingLabels = (label1, label2) => {
  return `This is the ${label1} ${label2}. `;
};

// Second function
export const convertingMeasurements = (measurement, unit) => {
  if (unit == "cm") {
    return `Second Function: Your measurement is ${measurement} cm, which is ${
      measurement * 0.393701
    } inches. `;
  } else if (unit == "inches") {
    return `Second Function: Your measurement is ${measurement} inches, which is ${
      measurement * 2.54
    } cm. `;
  } else {
    return `Second Function: Invalid unit provided. `;
  }
};

// Third Function
export const getAreaOfCircle = (radius) => {
  const area = Math.PI * radius * radius;
  return `Third Function: The area of a circle with a radius of ${radius} is ${area}. `;
};

// Fourth Function
export const getPokerHand = () => {
  let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  let randomSuit1 = Math.floor(Math.random() * suits.length);
  let randomValue1 = Math.floor(Math.random() * values.length);

  let randomSuit2 = Math.floor(Math.random() * suits.length);
  let randomValue2 = Math.floor(Math.random() * values.length);

  return `Fourth Function: You have the ${values[randomValue1]} of ${suits[randomSuit1]} and the ${values[randomValue2]} of ${suits[randomSuit2]}.`;
};