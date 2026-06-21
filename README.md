# Web Development Project 2 – Flashcard App

Submitted by: **Sudip Amgain**

This web app is a simple flashcard application that displays one question/answer card at a time. Users can click a card to flip between question and answer, and click a next button to load a new random card. The app is designed to support active recall learning.

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] The app displays the title of the card set, a short description, and the total number of cards  
  - [x] Title of card set is displayed  
  - [x] A short description of the card set is displayed  
  - [x] A list of card pairs is created  
  - [x] The total number of cards in the set is displayed  
  - [x] Card set is represented as an array of objects containing question/answer pairs  

- [x] A single card at a time is displayed  
  - [x] Only one side of the card is shown at a time  

- [x] Clicking on the card flips the card over, showing the corresponding answer/question  
  - [x] Clicking once flips to the answer  
  - [x] Clicking again flips back to the question  

- [x] Clicking the next button displays a random new card  

## Optional Features

- [x] Cards contain images in addition to or in place of text  
- [x] Cards have different visual styles based on category (difficulty/subject/etc.)

## Additional Features

- Random card selection logic avoids immediate repeats  
- Built using React functional components with hooks (`useState`)  
- Clean separation between card display and control logic  

## Video Walkthrough

<img src="https://github.com/AmgainSudip/flashcard/blob/main/src/walkthrough.gif" />

GIF created with ScreenToGif

## Notes

Main challenge was managing flip state cleanly while updating cards without resetting UI inconsistently. Also required structuring state so that card selection and flip behavior stayed independent.

## License

Copyright 2026 Sudip Amgain

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
