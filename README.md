# gitFit

> Find exercises, targert body parts, get fit

[Live Site](https://mygitfit.netlify.app/)

## About

gitFit is a quick and easy fitness partner. It's a fitness app built to help you find exercises and git in shape. It's currently just a front end project that allows the user to find exercises based on the body part that you want to work out. You can view exercises details and watch a GIF of how to perform the exercise. finally you can add the exercise to you workout. The next stage of this project will include the backend where you can save your workout stats.

## Uses

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Emotion CSS](https://emotion.sh/docs/@emotion/css)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Exercises API](https://rapidapi.com/ExoWatts/api/exercises2)

## Getting Started

- Clone the project
- npm install
- Subscribe and get a api key from [Exercises API](https://rapidapi.com/ExoWatts/api/exercises2)
- Create a .env file and add api key
- npm run dev

## Usage

1. Start by selecting a body part or choosing a default exercise. You can click the exercise box to view details or click the add to workout button to add the exercise to your workout

![Home Page](https://res.cloudinary.com/charley81/image/upload/v1667216739/gitFit/Home_xaukbf.png)

2. If you clicked the exercise box then you can view the exercise details. In the details page you find a GIF of how to perform the exercise, the body parts it focuses on and some similiar exercises

![Details Page](https://res.cloudinary.com/charley81/image/upload/v1667216737/gitFit/Details_zp8qrf.png)

3. By clicking the 'Add to Workout' button the exercise will be added to your workout page

![Workout Page](https://res.cloudinary.com/charley81/image/upload/v1667216737/gitFit/Workout_hkll8b.png)

4. Lastly once the backend is complete you'll be able to save, edit, and delete your workout stats using the provide form

![Workout Tracker](https://res.cloudinary.com/charley81/image/upload/v1667216826/gitFit/Tracker_uflk5e.png)

## Next Steps

1. Use useContext and useReducer to clean up code in App component as well remove prop drilling
2. Add search feature in navigation
3. Add pagination to exercise. The api allows to fetch a max of 100 exercises. I've got the app to currently display 10 exercises on initial load. I'd like to add pagination to give the user more options to choose from
4. Add modal to give user feedback
5. Add authentication
6. Finally add a database to track user workout stats and previous workouts

## What I learned

I gained a better understanding of React and how it works. Before the project I read through the entire Beta react documentation to understand it better. During the project I got familiar of working with 3rd party API's and how to fetch as well as manipulate data in React. I used one endpoint for the entire project and relied on higher order array methods and vanilla javascript to get the paticular data set that I needed. This made me a overall better javascript developer

## MIT License

Copyright © 2022 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
