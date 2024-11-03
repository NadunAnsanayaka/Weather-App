
# Weather App

![weatherapp](https://github.com/user-attachments/assets/5d6df7be-1227-4ad2-9990-7ee847552349)

## Overview

The Weather App is a simple and interactive application built with React that allows users to search for current weather conditions in various locations. It retrieves weather data from the OpenWeatherMap API and displays relevant information such as temperature, humidity, wind speed, and weather conditions.

## Features

- **Search Functionality**: Users can search for any city to get its current weather.
- **Dynamic Weather Icons**: Displays different icons based on the current weather conditions.
- **Responsive Design**: The app is designed to be user-friendly and visually appealing on different devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **OpenWeatherMap API**: A weather data API used to fetch real-time weather information.
- **CSS**: Stylesheets for the layout and design of the application.

## Getting Started

### Prerequisites

To run this application, you need to have:

- Node.js installed on your machine.
- A code editor (like Visual Studio Code).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add Your API Key**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your API key.
   - Replace the placeholder API key in `WeatherApp.js` with your own:
   ```javascript
   let api_key = "YOUR_API_KEY_HERE";
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Open in Browser**:
   - Navigate to `http://localhost:3000` in your web browser.

## Usage

- Enter the name of the city you want to check the weather for in the search bar and click the search icon.
- The app will display the current weather, including temperature, humidity, wind speed, and a corresponding weather icon.

## Screenshots

![Screenshot of the Weather App](link-to-your-screenshot.png)

## Contribution

Feel free to fork the repository and make pull requests if you'd like to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [React](https://reactjs.org/) for the framework that powers this application.
