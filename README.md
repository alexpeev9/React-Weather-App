# 9-Clouds | Weather Forecast Application

This project is a weather forecast application built using React.js. It displays the weather forecast for the upcoming 4 days based on the user's location.

### 🚨 Check out the live version on [nine-clouds.vercel.app](https://nine-clouds.vercel.app) 🚨

## ☁︎ Features

- Displays weather forecast for the next 4 days.
- Allows users to change the metric system of the weather.
- Saves user preferences.
- Mobile-friendly design.

## ☁︎ How to Run the Project and the E2E Tests

To run the project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/alexpeev9/React-Weather-App.git
```

2. Navigate to the project directory:

```
cd React-Weather-App
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file in the root folder and write a `VITE_API_KEY`, as shown in the example file `.env.example`. This API key is required to fetch weather data. You can get a free API key from [OpenWeatherMap API](https://openweathermap.org/forecast5).

5. Start the development server:

```
npm run dev
```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the application.

7. Open another terminal and run cypress

```
npm run cypress
```

8. Select `E2E Testing`, and a browser to test it.
9. Select one from the two specs for home and details page.
10. Click on either of them

![Cypress Tests Image](https://i.imgur.com/5h4eJ9U.png)

## ☁︎ Technologies Used

- React.js
- TypeScript
- Styled-Components
- Cypress

## ☁︎ Contributors

- [Aleksandar Peev](https://github.com/alexpeev9)

## ☁︎ License

This project is licensed under the [MIT License](LICENSE).
