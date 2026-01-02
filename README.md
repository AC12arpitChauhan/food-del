# 🍔 Food Delivery Application

A full-stack food delivery platform built with React and Node.js, featuring a customer-facing frontend, admin panel, and RESTful API backend. Users can browse food items, add them to cart, place orders with Stripe payment integration or Cash on Delivery (COD), and track their orders.

## ✨ Features

### Customer Features
- 🔐 **User Authentication** - Secure registration and login with JWT tokens
- 🍕 **Food Browsing** - Browse food items by category with search functionality
- 🛒 **Shopping Cart** - Add/remove items with persistent cart data
- 💳 **Payment Integration** - Stripe payment gateway for secure online payments
- 💵 **Cash on Delivery** - COD option for flexible payment
- 📦 **Order Management** - View order history and track order status
- 📱 **Responsive Design** - Mobile-friendly UI with modern design

### Admin Features
- ➕ **Food Management** - Add new food items with image uploads
- 📋 **Food Listing** - View and manage all food items
- 🗑️ **Remove Items** - Delete food items from the menu
- 📊 **Order Management** - View all orders and update order status
- 🔄 **Status Updates** - Update order status (Food Processing, Out for Delivery, Delivered, etc.)

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **Stripe.js** - Payment processing

### Admin Panel
- **React 18.2.0** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (Mongoose ODM)
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment gateway integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
food-del/
├── backend/                 # Backend API server
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/        # Route controllers
│   │   ├── cartController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js        # JWT authentication middleware
│   ├── models/            # MongoDB models
│   │   ├── foodModel.js
│   │   ├── orderModel.js
│   │   └── userModel.js
│   ├── routes/            # API routes
│   │   ├── cartRoute.js
│   │   ├── foodRoute.js
│   │   ├── orderRoute.js
│   │   └── userRoute.js
│   ├── uploads/           # Uploaded food images
│   ├── server.js          # Express server entry point
│   └── package.json
│
├── frontend/              # Customer-facing React app
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── AppDownload/
│   │   │   ├── ExploreMenu/
│   │   │   ├── FoodDisplay/
│   │   │   ├── FoodItem/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── LoginPopup/
│   │   │   └── Navbar/
│   │   ├── Context/
│   │   │   └── StoreContext.jsx  # Global state management
│   │   ├── pages/         # Page components
│   │   │   ├── Cart/
│   │   │   ├── Home/
│   │   │   ├── MyOrders/
│   │   │   ├── PlaceOrder/
│   │   │   └── Verify/
│   │   ├── assets/        # Static assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── admin/                 # Admin panel React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   └── Sidebar/
│   │   ├── pages/
│   │   │   ├── Add/       # Add food items
│   │   │   ├── List/      # List all food items
│   │   │   └── Orders/    # Manage orders
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (MongoDB Atlas account or local MongoDB instance)
- **Stripe Account** (for payment processing)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food-del
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install Admin Panel Dependencies**
   ```bash
   cd ../admin
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**Important Notes:**
- Replace `your_mongodb_connection_string` with your MongoDB connection string
- If using MongoDB Atlas, ensure your password doesn't contain the `@` symbol
- Get your Stripe secret key from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- Generate a secure random string for `JWT_SECRET`

### Database Configuration

Update the MongoDB connection string in `backend/config/db.js`:

```javascript
await mongoose.connect('your_mongodb_connection_string')
```

Or use environment variables for better security.

## 🏃 Running the Application

### Start the Backend Server

```bash
cd backend
npm run server
```

The backend server will run on `http://localhost:4000`

### Start the Frontend Application

Open a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

### Start the Admin Panel

Open another terminal:

```bash
cd admin
npm run dev
```

The admin panel will run on `http://localhost:5174` (or next available port)

## 📡 API Endpoints

### User Routes (`/api/user`)
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### Food Routes (`/api/food`)
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (requires image upload)
- `POST /api/food/remove` - Remove food item

### Cart Routes (`/api/cart`)
- `POST /api/cart/add` - Add item to cart (requires authentication)
- `POST /api/cart/remove` - Remove item from cart (requires authentication)
- `POST /api/cart/get` - Get user's cart data (requires authentication)

### Order Routes (`/api/order`)
- `POST /api/order/place` - Place order with Stripe payment (requires authentication)
- `POST /api/order/placecod` - Place order with Cash on Delivery (requires authentication)
- `POST /api/order/userorders` - Get user's orders (requires authentication)
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status (admin)
- `POST /api/order/verify` - Verify Stripe payment

### Static Files
- `GET /images/:filename` - Serve uploaded food images

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a token in the request headers:

```
headers: {
  token: "your_jwt_token"
}
```

## 💳 Payment Integration

The application supports two payment methods:

1. **Stripe Payment** - Secure online payment processing
   - Redirects to Stripe Checkout
   - Verifies payment on return
   - Updates order status automatically

2. **Cash on Delivery (COD)** - Payment on delivery
   - No payment processing required
   - Order is placed directly

## 📦 Order Status Flow

Orders progress through the following statuses:
- `Food Processing` - Initial status
- `Out for Delivery` - Order is being delivered
- `Delivered` - Order completed

Admins can update order status from the admin panel.

## 🎨 Features in Detail

### Customer Frontend
- **Home Page**: Browse food items by category
- **Cart**: Manage items before checkout
- **Place Order**: Enter delivery address and choose payment method
- **My Orders**: View order history and track status
- **Verify**: Payment verification page after Stripe checkout

### Admin Panel
- **Add Food**: Upload food images and add menu items
- **List Food**: View and manage all food items
- **Orders**: View all orders and update status

## 🔧 Development

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Admin Panel:**
```bash
cd admin
npm run build
```

### Code Structure

- **Backend**: RESTful API with MVC architecture
- **Frontend**: Component-based React architecture with Context API for state management
- **Admin**: Separate React application for administrative tasks

## 📝 Notes

- Food images are stored in `backend/uploads/` directory
- Cart data is persisted in the database for logged-in users
- The application uses React Context API for global state management
- All API calls are made using Axios
- Toast notifications are used for user feedback

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Arpit Chauhan

---

**Note**: Make sure to update the MongoDB connection string and add your Stripe keys before running the application in production.

