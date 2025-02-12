**YourKart - E-commerce Platform**

YourKart is a fully functional E-commerce website built using React (Frontend) and Spring Boot + MongoDB (Backend). It supports OAuth login (Google, Facebook, Instagram), shopping cart, checkout with multiple payment options, and an Admin Dashboard to manage products and orders.

🚀 Features

✅ User Authentication & Roles

Login via Google, Facebook, Instagram (OAuth2)

Role-based access: Users & Admins

Secure authentication using JWT tokens & HttpOnly cookies

🛍 Product Management & Display

"What's New" section for latest products

Categories: Men, Women, Kids, Electronics, Fashion, Travel, Groceries, Health & Beauty

Product Details Page with images, descriptions, pricing, and "Add to Cart"

🛒 Shopping Cart & Checkout

Add/Remove products from the cart

Checkout with Address & Payment options

Multiple Payment Options: COD, UPI, Card, EMI

Order Summary & Confirmation

📊 Admin Dashboard

Add/Edit/Delete Products

Manage Orders & Users

🏗 Tech Stack

Frontend:

✅ React + Redux + Tailwind CSS (for UI)
✅ React Router (for Navigation)
✅ Axios (for API Calls)
✅ OAuth (Google, Facebook, Instagram)

Backend:

✅ Spring Boot + Spring Security + OAuth2
✅ Spring Data JPA (MongoDB)
✅ JWT + HttpOnly Cookies (for Secure Sessions)
✅ REST APIs for products, orders, users

Database:

✅ MongoDB (NoSQL Database for Products & Users)

💻 Installation & Setup

Step 1: Clone the Repository

git clone https://github.com/EpitomeHub/yourkart.git
cd yourkart

Step 2: Run the Backend (Spring Boot)

cd backend
mvn spring-boot:run

Step 3: Run the Frontend (React)

cd frontend
npm install
npm start

🔑 Authentication Setup (Google, Facebook, Instagram)

Configure OAuth in backend/src/main/resources/application.properties:

spring.security.oauth2.client.registration.google.client-id=YOUR_GOOGLE_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_GOOGLE_CLIENT_SECRET

For Facebook/Instagram, replace with their respective credentials.

🎯 API Endpoints

User Authentication

POST /api/auth/login - OAuth login

POST /api/auth/logout - Logout & clear session

Products

GET /api/products - Get all products

GET /api/products/{id} - Get product by ID

POST /api/products - Add new product (Admin Only)

DELETE /api/products/{id} - Delete product (Admin Only)

Cart & Checkout

POST /api/cart/add - Add item to cart

GET /api/cart - View cart items

DELETE /api/cart/{id} - Remove item from cart

POST /api/checkout - Proceed to payment

Payments

POST /api/payment/cod - Cash on Delivery

POST /api/payment/card - Card Payment

POST /api/payment/upi - UPI Payment

POST /api/payment/emi - EMI Payment

📸 Screenshots

📌 Homepage with "What's New" section
📌 Product Categories: Electronics, Fashion, Groceries
📌 Product Details Page with "Add to Cart"
📌 Cart & Checkout Flow
📌 Admin Dashboard for Managing Products & Orders

(Screenshots coming soon!)

📜 License

This project is open-source and available under the MIT License.

📬 Need Help?

For issues, raise a ticket on GitHub Issues.

⭐ Contribute to YourKart

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit your changes (git commit -m "Added a new feature")

Push to the branch (git push origin feature-branch)

Open a Pull Request 🚀
