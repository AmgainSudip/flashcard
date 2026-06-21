# Web Development Project 3 - Computer Science Flashcards

Submitted by: **Sudip Amgain**

This web app: **A computer science flashcard application that helps users practice CS concepts by answering questions, submitting guesses, and tracking their progress.**

Time spent: **2 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess.
  - Clicking the submit button with an **incorrect** answer shows visual feedback that the answer is wrong.
  - Clicking the submit button with a **correct** answer shows visual feedback that the answer is correct.

- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked.
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked.
  - Next and back buttons provide visual feedback by becoming disabled when the user reaches the beginning or end of the card list, preventing wrap-around navigation.

The following **optional** features are implemented:

- [ ] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in the original sequence unless the shuffle button is clicked.
  - Cards change to a random sequence after clicking shuffle.

- [x] **A user’s answer may be counted as correct even when it is slightly different from the target answer**
  - Answers ignore uppercase/lowercase differences.

- [x] **A counter displays the user’s current and longest streak of correct responses**
  - The current streak counter increases when a user guesses an answer correctly.
  - The current streak counter resets to 0 when a user guesses incorrectly.
  - The longest streak counter updates when the current streak exceeds the previous longest streak.

- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - Users can mark cards as mastered.
  - Mastered cards are removed from the displayed cards and added to a mastered cards list.


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="https://github.com/AmgainSudip/flashcard/blob/main/src/walkthrough.gif" />


GIF created with LiceCap.

## License

Copyright 2026 Sudip Amgain

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.