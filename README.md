# Marvel Comics Challenge

## Summary
Front-end Web Application built in TypeScript, React, pure CSS, and lots of love. 
This exercise expects to give an answer to the following requirements:

- React web app
- TS over JS
- Clean and scalable code
- RESTful API management
- Auth&Auth mechanism
- Display all Marvel Comics Characters
- Show details on-character-click
- Pagination

## Digging deeper

I love working on pleasing and visually appealing GUIs, so rather than just being compliant with the given requirements, I've also tried to offer an interesting approach basing the design of the app on what people —like me—, who are Marvel fans, would like: the idea was to follow some styling that would try to teleport the user to that feeling that emerges as soon as we sit on a theatre to watch the newest Marvel film.

Apart from that, and since ~80% of world internet traffic happens on mobile devices, I've also tried to offer responsive design, both for tablet and mobile. This is a big WIP, but the first stone has been set, so that'd definitely be on my top priorities on my backlog. 



## Technologies Used

- <img height="25" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /> HTML
- <img height="25" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /> CSS
- <img height="25" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" /> TypeScript
- <img height="25" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /> React

## Prerequisites
- Node
- npm
- Local ports:
    - 3000

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the repository clone by using the following command.
```
$ cd Marvel\ Comics\ Challenge
```
4. Use the `.env.sample` file to create your own `.env` file to connect to Marvel's API. (If you would rather skip this step, you can contact me directly for my credentials 😉)
5. Run the following command to install all the necessary dependencies for the project.
```
$ npm install
```
4. Run the following command to start the project in dev mode:
```
$ npm run start
```
4. Go to your favorite browser and navigate to [http://localhost:3000](http://localhost:3000)
5. Enjoy! Feedback will be greatly appreciated. :) 

## Usage

The application allows users to navigate the Marvel Characters API. On each view, they are shown 12 entries, and they can check new entries by just navigating to different pages with the previous and next page buttons.

On-card-click, a view with details of the chosen character appears. You can then read about their short description, and check the first three comics that they appear on in the API. 

In case there is no image of the character, no description, or no comics, a message stating so is shown. 

Lastly, to go back to the main view, the user can click on the header of the web application.
