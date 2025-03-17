# Technical Information or something

This project is very messy, but I will do my best to explain everything neccesary here. 


# Part 1 - Components

All of the code is located within the src folder of My-App. These are the used components: (ComponentName -> File)

## OptionButton -> optionButton.jsx
The OptionButton component is the component responsible for the two buttons that serve as answer alternatives. The value of the buttons is randomized depending on the question asked through main.jsx.

## PageTop -> pageTop.jsx
The very top of the page, only containing the title of the quiz. This component never changes. 

## QuestionField -> questionTop.jsx
The current question's text. Is updated through main.jsx alongside OptionButton.

## Yippie ->  img.jsx
This one is just the image of that one thumbs up emoji. That's it. I don't know why it's called Yippie.

# Part 2 - main.jsx 
All the questions are written in an Array containing different objects. Each question is 1 Object

Right after the questions is two functions. The functions selects a random question out of the list, and saves it, before updating the options on the buttons in a random order (So that the right answers are not in the same position every time) 

At the very bottom of the page is the main code that renders everything. Everything is added into one div which is rendered. Through here, the questions and the correct answers to all of them are passed into
the **OptionButton** component through props. These are important, and is how the code checks if the player chose the right option or not. 

**Prop explanations**

value - Sets the text of the button. This is the options for the question.

correct - The correct answer , which is always placed in the "answerRight" field of the object. This is the string that **OptionButton** compares against.

# Extras
Please be aware that if you are to add more questions to the quiz, make sure that the correct answer is in the answerRight field. **This is extremely important, or else the quiz will be incorrect!**
