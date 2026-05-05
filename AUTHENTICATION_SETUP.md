# AeroTech Authentication Setup Guide

## ✅ What's Been Updated

### 1. **Backend Updates** (`Backend/app.js` & `Backend/src/routes/auth.router.js`)
   - ✅ Added CORS middleware for frontend at `http://localhost:5173`
   - ✅ Fixed `/signup` endpoint to return JSON responses
   - ✅ Fixed `/login` endpoint to return JWT token + user data in JSON
   - ✅ Fixed `/logout` endpoint to return JSON responses
   - ✅ Better error handling with proper HTTP status codes

### 2. **Frontend Auth.jsx** (`Frontend/src/pages/Auth.jsx`)
   - Complete login/signup interface
   - Login form: Email + Password
   - Signup form: First Name, Last Name, Email, Password, Confirm Password
   - Form validation and error handling
   - Logout functionality
   - Token storage in localStorage
   - Google login button (ready for OAuth implementation)

### 3. **Updated Routes** (`Frontend/src/App.jsx`)
   - Added route: `/auth` → Auth page

### 4. **Updated Navbar** (`Frontend/src/components/Navbar.jsx`)
   - Login/Signup button navigates to `/auth`
   - Ready for user profile display after login

### 5. **Installed Dependencies**
   - ✅ axios (for API calls)

---

## 🚀 How to Run

### 1. **Start Your Backend** (Make sure Node.js is running)

```bash
cd Backend
npm run dev
```

You should see:
```
MongoDB database connected successfully
Server is running on http://localhost:5000
```

### 2. **Start Your Frontend** (Open a new terminal)

```bash
cd Frontend
npm run dev
```

You should see:
```
  ➜  Local:   http://localhost:5173/
```

### 3. **Test Authentication**

- Go to `http://localhost:5173/`
- Click **"Login/Signup"** button in navbar
- You'll see the authentication page with tabs to switch between Login and Signup

---

## 📡 Backend Endpoints

### **POST /signup**
```javascript
Request:
{
  "firstName": "John",
  "lastName": "Doe",
  "emailId": "john@example.com",
  "password": "password123"
}

Response (Success - 201):
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "emailId": "john@example.com"
  }
}

Response (Error - 400):
{
  "success": false,
  "message": "Error message here"
}
```

### **POST /login**
```javascript
Request:
{
  "emailId": "john@example.com",
  "password": "password123"
}

Response (Success - 200):
{
  "success": true,
  "message": "Login successful",
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "emailId": "john@example.com"
  }
}

Note: Token also stored in HTTP-only cookie named "token"

Response (Error - 401):
{
  "success": false,
  "message": "User not found. Please sign up first"
}
```

### **POST /logout**
```javascript
Request:
{}

Response (Success - 200):
{
  "success": true,
  "message": "Logout successful"
}
```

---

## 🔧 Important Configuration

### Environment Variables
Your backend .env file already has:
```
PORT=5000
DB_CONNECT_SECRET=mongodb+srv://... (Your MongoDB URI)
JWT_SECRET=kartikmlproject
```

### CORS Configuration
✅ Already added to backend:
- Allows requests from `http://localhost:5173` (Frontend)
- Credentials enabled for cookies

### Token Storage
- **JWT token** stored in `localStorage` as `token`
- Also stored in **HTTP-only cookie** for secure requests
- User data stored in `localStorage` as `user` (JSON string)

### How to Access Token in Other Components
```javascript
// Get token
const token = localStorage.getItem('token')

// Get user
const user = JSON.parse(localStorage.getItem('user'))

// Use in API calls
headers: {
  'Authorization': `Bearer ${token}`
}
```

---

## ✅ Testing the Authentication

### Test Signup Flow
1. Go to `http://localhost:5173/auth`
2. Click **Sign Up** tab
3. Fill in:
   - First Name: John
   - Last Name: Doe
   - Email: john@example.com
   - Password: password123
   - Confirm Password: password123
4. Click **Sign Up** button
5. You should see: "User registered successfully"

### Test Login Flow
1. Click **Login** tab
2. Fill in:
   - Email: john@example.com
   - Password: password123
3. Click **Login** button
4. You should see: "Login successful! Redirecting..."
5. Will redirect to home page

### Verify Token Storage
Open browser DevTools (F12):
- Go to **Application** → **Local Storage** → `http://localhost:5173`
- You should see `token` and `user` keys stored

---

## 🎯 Frontend Features

✅ **Login Page:**
- Email validation
- Password field (masked)
- Error messages
- Loading state during submission
- Toggle to Signup form

✅ **Signup Page:**
- First name & Last name fields
- Email validation
- Password strength (minimum 6 characters)
- Password confirmation matching
- Error messages
- Loading state during submission
- Toggle to Login form

✅ **Error Handling:**
- Network errors
- Invalid credentials
- User not found
- Email already registered (backend validation)
- Password mismatch

✅ **UI/UX:**
- Dark theme with green accent
- Responsive design
- Smooth transitions
- Clear feedback messages
- Easy form switching

---

## 🚨 Troubleshooting

### Backend doesn't start
```
Error: Module not found
```
**Solution:** Install dependencies in Backend folder
```bash
cd Backend
npm install
```

### "Cannot GET /signup" or "Cannot POST /signup"
**Solution:** Make sure backend is running on port 5000
```bash
cd Backend
npm run dev
```

### CORS Error: "Access to XMLHttpRequest blocked"
**Solution:** Backend already has CORS configured. Check:
- Backend is running
- Frontend is at `http://localhost:5173`
- Check browser console for exact error

### Login/Signup button doesn't navigate
**Solution:** Make sure you installed react-router-dom
```bash
cd Frontend
npm install react-router-dom
```

### "User not found. Please sign up first"
**Solution:** This error means:
- Email doesn't exist in database
- Try signing up first with that email

### Token not in localStorage
**Solution:** Check if login was successful:
- Open DevTools (F12) → Console
- Look for error messages
- Check Network tab to see API response

### "Password is incorrect"
**Solution:** Check:
- Email is correct
- Password matches exactly (case-sensitive)
- Confirm you signed up with that email

---

## 📝 Summary

Your **complete authentication system** is ready:
- ✅ Signup with email/password
- ✅ Login with credentials
- ✅ JWT tokens with HTTP-only cookies
- ✅ Form validation
- ✅ Error handling
- ✅ Token storage in localStorage
- ✅ Logout functionality
- ✅ CORS configured
- 🔄 Google OAuth (ready to implement)

**Start building:** Click **Login/Signup** in navbar to test!
