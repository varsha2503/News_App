# News Website

This project is a news website that fetches and displays real-time news headlines from the News API. It provides a modern and user-friendly interface for users to stay updated with the latest news across various categories.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The objective of this project is to integrate an external API (News API) to fetch and display real-time news headlines on a news website. The project demonstrates the integration of a frontend application (built with React) with an external API, error handling, and data display in a visually appealing format.

## Features

- Displays latest news headlines on the homepage
- Supports multiple categories for news (general, business, entertainment, health, sports, technology)
- Error handling for cases where the API request fails
- Modern and visually appealing user interface

## Technologies Used

- React
- Axios (for making HTTP requests)
- News API
- CSS (for styling)

## Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/news-website.git`
2. Navigate to the project directory: `cd news-website`
3. Install dependencies: `npm install`
4. Obtain an API key from [News API](https://newsapi.org/) and replace `YOUR_API_KEY` in `FetchData.js` with your actual API key.
5. Start the development server: `npm start`
6. Open your web browser and visit `http://localhost:3000` to view the app.

## Usage

- On the homepage, you will see the latest news headlines displayed in cards.
- Click on a headline to read the full article.
- Navigate to different categories using the navigation bar to view news specific to each category.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
