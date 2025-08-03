# 🌈 Multi-Theme Switcher App – Jalal (Frontend Developer)

A dynamic React + TypeScript application that demonstrates theme-based UI architecture with real-time API data and persistent user preferences. Designed to showcase responsive layouts, clean structure, and multiple theme integration using modern development practices.

---

## 📦 Features

- 🎨 **Theme Switching**  
  Select from three distinct themes:
  - **Minimalist Light** – sans-serif, spacious layout
  - **Dark Sidebar** – bold serif font, sidebar navigation
  - **Playful Cards** – colorful grid with "Pacifico" font

- 🔄 **Persisted Preferences**  
  Themes are stored via `localStorage` to survive reloads

- ⚛️ **React Router**  
  Pages: Home / About / Contact – each styled based on theme

- 🧠 **State Management**  
  Themes handled via Context API for scalable architecture

- 🌐 **API Integration**  
  Data pulled from [FakeStoreAPI](https://fakestoreapi.com/products)

- 📱 **Responsive Design**  
  Supports mobile + desktop views via CSS Modules

- 💫 **Subtle Animations**  
  Transitions across themes enhance visual experience

- 🔐 **Secure & Scalable**  
  Code practices follow modern security conventions

---

## 🛠️ Tech Stack

| Technology           | Role                            |
|----------------------|----------------------------------|
| Vite                 | Build tool + fast dev server     |
| React + TypeScript   | Component-based architecture     |
| React Router         | Routing between pages            |
| Context API          | Global theme management          |
| localStorage         | Theme persistence                |
| CSS Modules / SCSS   | Styling and responsiveness       |
| FakeStoreAPI         | Sample product data              |

---

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/your-username/multi-theme-switcher-jalal-frontend-dev.git
cd multi-theme-switcher-jalal-frontend-dev

# Install dependencies
npm install

# Start development server
npm run dev
