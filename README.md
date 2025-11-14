
 # 🎥 Movie Trailer Popup Effect

A stylish and interactive **movie trailer popup effect** built using **HTML**, **CSS**, and **JavaScript**.  
When you click the play button on the background image, a trailer video smoothly appears in a centered overlay with controls.  
You can close it anytime using the “X” icon — the video automatically pauses and resets.

---

## 🌐 Live Demo

👉 [View the Project on GitHub Pages]( https://maheshkakarla2003.github.io/JavaScript-Video-Trailer-Popup/)

*(Click the link above to watch the trailer popup effect live.)*

---

## 🧱 Technologies Used

- **HTML5** – for the page structure and video embedding  
- **CSS3** – for styling, layout, and transitions  
- **JavaScript (ES6)** – for interactivity and controlling the popup behavior

---

## 💡 What This Project Demonstrates

- Creating an **interactive popup modal** for video display  
- Using **background images** and **positioning** for visual design  
- Controlling **video playback** dynamically via JavaScript  
- Implementing **smooth fade-in / fade-out transitions**  
- Managing **overlay visibility** using class toggling

---

## ⚙️ How It Works

1. A **background image** (`thumb-1920-597965.jpg`) displays with a **play button** (`play.png`).  
2. When the play button is clicked, JavaScript removes the `.active` class — revealing the video container.  
3. The trailer (`trailer.mp4`) plays with standard controls.  
4. Clicking the **“X” close icon** re-adds the `.active` class, hides the container, pauses the video, and resets it to the start.

---

## 🧩 Key JavaScript Code Logic

```javascript
playBtn.addEventListener("click", () => {
  videoContainer.classList.remove("active");
});

closBtn.addEventListener("click", () => {
  videoContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
