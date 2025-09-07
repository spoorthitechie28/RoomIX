# RoomIX - Full Stack Video Conferencing Web Application

RoomIX is a modern, real-time video conferencing web application designed to facilitate seamless online meetings and collaborations. It enables users to create or join rooms, share video and audio, and communicate effortlessly with multiple participants.

---

## 🚀 Features

* Real-time video and audio conferencing
* Multiple participants in a single room
* Room creation and joining via unique links
* Chat functionality (optional, if implemented)
* Responsive UI for desktop and mobile
* Clean and intuitive user interface

---

## 🛠 Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB / Firebase / any (depending on implementation)
* **Real-time Communication:** WebRTC, Socket.io
* **Deployment:** Render / Vercel / Heroku (depending on deployment)

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/spoorthitechie28/RoomIX.git
   cd RoomIX
   ```

2. **Install dependencies for backend**

   ```bash
   cd server
   npm install
   ```

3. **Install dependencies for frontend**

   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `server` folder:

   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_if_auth>
   FRONTEND_URL=http://localhost:3000
   ```

   *(Add any other variables required by your project, like API keys for WebRTC/STUN/TURN servers.)*

5. **Run the application locally**

   * Backend:

     ```bash
     cd server
     npm start
     ```

   * Frontend:

     ```bash
     cd client
     npm start
     ```

   Visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
RoomIX/
│
├─ client/             # Frontend React application
│   ├─ src/
│   └─ package.json
│
├─ server/             # Backend Express server
│   ├─ models/         # Database models
│   ├─ routes/         # API routes
│   ├─ controllers/    # Controllers (optional)
│   ├─ index.js        # Entry point
│   └─ package.json
│
├─ .env                # Environment variables
└─ README.md           # Project documentation
```

---

## ⚡ Usage

1. Open the homepage.
2. Create a new room or enter an existing room link.
3. Allow camera and microphone access.
4. Start your video call with participants.
5. Use chat or other collaboration features as implemented.

---

## 💡 Notes

* Ensure your browser supports **WebRTC** (Chrome, Firefox, Edge recommended).
* For production deployment, configure **TURN/STUN servers** for reliable connectivity behind NAT/firewalls.
* Enable HTTPS for security and better WebRTC performance.

---

## 📝 License

This project is licensed under the MIT License.

---
