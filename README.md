# Passwrap (Full Stack Web App): <a target="_blank" href="https://passwrap-ui.netlify.app/">Visit Here</a>
<p align="center">
  • 
  <a href="#about">About</a> •
  <a href="#technology-stack">Technology Stack</a> •
  <a href="#optimizations">Optimizations</a> •
  <a href="#lesson-learned">Lesson Learned</a> •
  <a href="#setup">Setup</a> •
  <a href="#build-and-deploy">Build and Deploy</a> •
  <a href="#additional-notes">Additional Notes</a> •
</p>

## About
This is the frontend of the web app version of a previous project I did of [Passwrap](https://passwrap.netlify.app/). From a password generator to a password manager built with the MERN stack, it helps you to stay organized and securely store your passwords and notes.

The backend of this web app can be found in the repo, https://github.com/fn-r/mern-passwrap-api

<a target="_blank" href="https://passwrap-ui.netlify.app/">
    <img src="https://github.com/fn-r/portfolio/blob/main/images/projects/mern-passwrap.jpg" width="100%" alt="MERN Passwrap"/>
</a>

## Technology Stack
![REACT BADGE](https://custom-icon-badges.herokuapp.com/badge/-react-A5FFCE?style=for-the-badge&logo=react&logoColor=A5FFCE&labelColor=000000)
![TAILWIND BADGE](https://custom-icon-badges.herokuapp.com/badge/-tailwind-A5FFCE?style=for-the-badge&logo=tailwindcss&logoColor=A5FFCE&labelColor=000000)
![HTML5 BADGE](https://custom-icon-badges.herokuapp.com/badge/-html5-A5FFCE?style=for-the-badge&logo=html5&logoColor=A5FFCE&labelColor=000000)
![CSS3 BADGE](https://custom-icon-badges.herokuapp.com/badge/-css3-A5FFCE?style=for-the-badge&logo=css3&logoColor=A5FFCE&labelColor=000000) 

## Optimizations
I would further improve this project by implementing a skeleton design for handling loading of data.

## Lesson Learned
Cookies:
    The access token is stored in cookies so that only authorized user is allowed access to certain pages.

## Setup
1. Edit `REACT_APP_API` value
    ```
    REACT_APP_API="Your API"
    ```
1. Install dependencies (FRONTEND)
    ```bash
    npm install pkg.json --save
    ```
1. Run (FRONTEND)
    ```
    npm run start
    ```

## Build and Deploy
1. Run the following command to create a production build of the frontend
    ```
    npm run prod:build
    ```

## Additional Notes
It is a common practice to not push `.env` file to your repo. The data stored in this repo is not considered private and therefore, were made public.