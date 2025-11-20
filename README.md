# 📘 Random Facts Chrome Extension
- This repository contains my Chrome extension that shows random facts anytime you want. It uses the API Ninjas Facts API to fetch interesting, fun, and surprising facts inside a clean popup interface. The extension is lightweight, fast, and perfect for quick knowledge bites throughout the day.
---

## ⭐ Features

- Fetches a new random fact each time the popup opens  
- Clean, minimal UI  
- Uses API Ninjas (free tier supported)  
- Works offline after first load (basic fallback)  
- Simple, readable code structure  
---

## 📂 Project Structure
```
/Facts
│── manifest.json
│── popup.html
│── script.js
│── styles.css
└── logo.png
```
---

## 📥 How to Download / Clone to Your Local Machine

### **Option 1: Clone using Git (recommended)**

```sh
git clone https://github.com/Vasu10134/random-facts-extension.git
````

Then open the folder:

```sh
cd random-facts-extension
```
---

### **Option 2: Download ZIP**
- Open the GitHub repo
- Click **Code → Download ZIP**
- Extract the ZIP
- Open the extracted folder
---

## 🧩 How to Load the Extension into Chrome
Follow these steps:
### 1️⃣ Open Chrome

Go to:

```
chrome://extensions/
```

### 2️⃣ Enable **Developer Mode**
- Toggle it ON in the top-right corner.

### 3️⃣ Click **Load Unpacked**
- A file picker will open.

### 4️⃣ Select the project folder
- Choose the folder containing:

```
manifest.json
popup.html
script.js
styles.css
```

- Chrome will instantly load your extension.
---
### 5️⃣ Pin the extension (optional)
- Click the 🔗 extension icon and pin it for quick access.
---

## ▶️ How to Run the Extension
- Click the extension icon from your Chrome toolbar
- The popup opens immediately
- A random fact will load automatically
- Close & open again = new fact each time
---

## 🔧 API Setup
- This extension uses **API Ninjas Facts API**.

Get your key:
- Go to: [https://api-ninjas.com](https://api-ninjas.com)
- Log in / sign up
- Visit your profile page
- Copy your API key
- Paste it inside `script.js`:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```
---

## 🛠️ Future Improvements
- Add refresh button
- Add multiple category support
- Add dark mode
- Add offline fact caching

---
