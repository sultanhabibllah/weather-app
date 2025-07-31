# **Weather Search App**

A simple, user-friendly web application that lets anyone check real-time weather for any city in the world. This project is for my summative for web infrastructure api
It was built with Node.js, Express, Docker, and deployed to Render.com.

---

## **🌍 Live Demo**

[You can try out the app live here!](https://weather-app-wg61.onrender.com/)

---

## **Features**

* Search any city for current weather conditions
* Clean, split-screen design (big image on left, interactive form on right)
* Fast, mobile-friendly, and easy to use
* Error handling for misspelled or non-existent cities

---

## **Screenshots**

![Home page](./screenshots/home.png)
![Successful weather search](./screenshots/success.png)
![Error case](./screenshots/error.png)

---

## **API Credits**

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) for all real-time weather data.

---

## **How to Run Locally**

1. **Clone this repo:**

   ```sh
   git clone https://github.com/sultanhabibllah/weather-app.git
   cd weather-app
   ```
2. **Install dependencies:**

   ```sh
   npm install
   ```
3. **Start the backend:**

   ```sh
   npm start
   ```
4. **Open [http://localhost:8080](http://localhost:8080) in your browser.**

---

## **Docker Instructions**

**Build the image:**

```sh
docker build -t habibllah/weather-app:v1 .
```

**Run locally:**

```sh
docker run -p 8080:8080 habibllah/weather-app:v1
```

Open [http://localhost:8080](http://localhost:8080).

---

## **Cloud Deployment (Render.com)**

1. Connect your GitHub repo to Render.com as a new Web Service.
2. Use Docker environment, port 8080.
3. Deploy and Render gives you a live public URL.

---

## **Challenges & Solutions**

* **API Activation Delay:** A lot of APIs on RapidAPI have a lot of bugs. Also, OpenWeatherMap API keys can take up to 2 hours to activate. If you get an “Invalid API key” error, just wait and try again. I battled with these errors for hours.
* **Deployment:** Used Docker for consistent local/cloud deployment and Render.com for easiest public hosting.
* **UI/UX:** Ensured a modern, responsive layout by strictly using split layout and clear error feedback.

---

## **Attribution & License**

App by [Habibllah Ayodele](https://github.com/sultanhabibllah)
Weather data from [OpenWeatherMap.org](https://openweathermap.org/)

---

## **Demo Video**

[Demo Video Link](#)
*(https://drive.google.com/file/d/11bQl08_aeXFfZxseR4bAowHb6gpTeg98/view?usp=sharing)*

---

**Good luck! If you have any questions, open an issue or contact me.**

---
