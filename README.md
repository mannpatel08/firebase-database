# 📦 Inventory Tracking System (React + Redux + Firebase)

## 📌 Project Overview

The **Inventory Tracking System** is a web-based application developed using **React.js**, **Redux Toolkit**, and **Firebase Realtime Database**.
It allows businesses or stores to manage their product inventory efficiently with real-time data synchronization.

Users can **add, view, and delete products**, while the application ensures that the database stays updated instantly across all clients.

---

## 🚀 Features

* ➕ **Add Product** – Add new products with name, price, and stock quantity.
* 📋 **View Products** – Display all inventory items in a table.
* ❌ **Delete Product** – Remove products from the inventory.
* 🔄 **Realtime Database Sync** – Updates instantly using Firebase.
* 🧠 **Redux State Management** – Efficient state handling with Redux Toolkit.
* 🎨 **Responsive UI** – Styled with Tailwind CSS.

---

## 🛠 Tech Stack

| Technology                     | Description                      |
| ------------------------------ | -------------------------------- |
| **React.js**                   | Frontend library for building UI |
| **Redux Toolkit**              | State management                 |
| **Firebase Realtime Database** | Backend database                 |
| **Tailwind CSS**               | Styling and responsive UI        |
| **Vite**                       | Fast development build tool      |

---

## 📂 Project Structure

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── ProductForm.jsx
│   ├── ProductItem.jsx
│   └── ProductList.jsx
│
├── features
│   └── products
│       └── productSlice.jsx
│
├── firebase
│   └── firebase.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/451c6d34-751d-438a-91b4-089cde84de0d" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9eff006f-135b-414e-a494-e8ad6d8c85f2" />


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/inventory-tracking-system.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd inventory-tracking-system
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Project

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## 🔥 Firebase Setup

1. Go to **Firebase Console**
2. Click **Create Project**
3. Enable **Realtime Database**
4. Set database rules to:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

5. Copy your Firebase configuration and paste it in:

```
src/firebase/firebase.jsx
```

Example configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

## 📊 Example Database Structure

```
products
   -Nabc123
      name: Laptop
      price: 50000
      stock: 10
```

---

## 🎯 Use Case

This system can be used by:

* Retail stores
* Warehouses
* Small businesses
* Inventory managers

to maintain and monitor stock in real time.

---

## 🔮 Future Improvements

* ✏️ Edit product functionality
* 🔍 Product search
* 📉 Low stock alerts
* 📊 Inventory dashboard
* 🔐 Firebase authentication
* 📦 Category-based inventory management

---

## 👨‍💻 Author

**Mann**

---

## 📄 License

This project is open-source and available under the **MIT License**.
