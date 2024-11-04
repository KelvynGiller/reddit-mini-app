# Reddit App

This project is a subreddit browsing application that allows users to explore popular posts and access specific subreddits, built with **React**, **Redux**. It uses Reddit’s public API to fetch real-time data.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Make sure you have **Node.js** and **npm** installed on your system.

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: npm is typically installed with Node.js.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/kelvyn-giller/reddit-app.git

2. Navigate to the project directory:
    ```bash
    cd reddit-app

3. Install the dependencies:
    ```bash
    npm install

## Usage

To start the development server, run:
    ```bash
    npm start
This will run the app in development mode at http://localhost:3000.

## Folder Structure
Here’s an overview of the folder structure:

- src/
- _tests_/ - Contains the test files for each component.
- components/ - Holds React components such as SubredditList and Post.
- slices/ - Includes Redux slices, like postsSlice.js for state management.
- App.js - Main application component.
- index.js - Entry point for the app.

## Technologies Used
- React - JavaScript library for building user interfaces.
- Redux - State management library.
- CSS Modules - Scoped and modular CSS.