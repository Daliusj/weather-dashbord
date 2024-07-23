This project is a comprehensive weather dashboard application built with React, created during the early stages of my web development learning journey.
It provides users with current weather conditions, long-term and hourly forecasts, and other weather-related data. The key components and functionalities include:

HourlyForecast: Displays weather information for specific hours, including temperature, wind speed, and direction. It also determines day/night time to display appropriate weather icons.

LongtermForecast: Shows a 5-day weather forecast with icons, temperature, and dates.

SearchField: Allows users to search for and select a preferred city from a dropdown menu. It integrates with the react-select library for better user experience.

Sun: Displays sunrise and sunset times with relevant icons.

WeatherParameter: Displays various weather parameters such as humidity, pressure, wind speed, and UV index.

Clock: A live clock that updates every second to show the current time.

Dashboard: The main component that integrates all other components to display a comprehensive weather overview, including current temperature, feels-like temperature, and weather conditions.

Navbar: Includes the search field and a settings icon to toggle settings.

Settings: Placeholder for future settings functionalities.

App: The root component that fetches weather data from an API and manages the state for the entire application.

The application fetches location data and weather forecasts from an API, processes this data, and updates the UI accordingly. It uses conditional rendering and state management to ensure the weather data is up-to-date and accurately reflects the current conditions. The CSS files ensure a responsive and visually appealing design.

This project marks a significant milestone in my journey to mastering web development, showcasing my ability to build functional and interactive web applications.
