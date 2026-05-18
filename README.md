# 🚗 Car Listing Subscription & Device Management App

A React-based UI application for managing **subscription plans**, **add-ons**, **payment card details**, and **device information**, with full **localStorage persistence**.

---

## 📌 Features

### 🔹 Subscription System
- Select subscription plans (Basic / Pro / Premium)
- Choose add-ons (GPS, Insurance)
- Enter card details (Card Number, Expiry, CVC)
- Data persists in browser (localStorage)

### 🔹 Device Management
- Add multiple GPS devices (4 devices supported)
- Store serial numbers
- Toggle "own device" option
- Upload device images (stored as Base64 for persistence)
- Data persists across page reloads

### 🔹 Navigation
- Multi-step sidebar navigation
- Mobile-friendly dropdown menu
- React Router navigation between pages

---

## 🧠 Tech Stack

- React (Functional Components)
- React Router DOM
- Tailwind CSS
- Lucide React Icons
- Browser LocalStorage (no backend)

---

## 💾 Data Persistence

All data is stored in browser localStorage.

### 🔹 Subscription Storage Key