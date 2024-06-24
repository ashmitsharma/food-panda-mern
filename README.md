# Food Panda MERN Stack Project

## Overview
Food Panda is a food delivery web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes a Home page, Login page, Signup page, Cart page, and My Orders page. The Cart and My Orders pages are accessible only when the user is logged in. Passwords are encrypted using bcrypt, and JWT is used for authentication.

[https://github.com/ashmitsharma/food-panda-mern/assets/55889884/5ff9bff2-b882-432c-9a61-95213e5b4c5d](https://github.com/ashmitsharma/food-panda-mern/assets/55889884/3e9bcb0c-917b-4179-a95f-e7b20090911f
)

## Features
- Home Page: Displays the available food items.
- Login Page: Allows users to log in to their accounts.
- Signup Page: Allows new users to register.
- Cart Page: Shows items added to the cart by the user (visible only when logged in).
- My Orders Page: Displays the user's past orders (visible only when logged in).
- Authentication: Utilizes JWT for secure authentication and bcrypt for password encryption.

## Technology Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Password Encryption: bcrypt

## Installation and Setup
1. Clone the repository:
   ```git clone https://github.com/yourusername/food-panda-mern.git
      cd food-panda-mern
    ```

2. Install dependencies for both frontend and backend:
    ```
      cd frontend
      npm install
      cd ../backend
      npm install
    ```

3. Set up environment variables:
    - Navigate to the backend folder.
    - Create a .env file.
    - Add the following variable:
      ```
      SECRET=your_jwt_secret_key
      ```
4. Run the application:
    - In one terminal, start the backend server:
        ```cd backend
        nodemon index.js
        ```
    - In another terminal, start the frontend server:
        ```cd frontend
        npm start
        ```
5. Access the application:
    - Open your browser and navigate to http://localhost:3000.
