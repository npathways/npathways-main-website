# 🚀 NPathways | Comprehensive Career Exploration Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

**NPathways** is a premium, state-of-the-art career guidance and education management platform. It bridges the gap between students, parents, and schools by providing specialized bootcamps, assessments, and structured educational pathways through a minimalist, high-conversion user interface.

---

## 🏗️ Project Structure

The project follows a modular React architecture designed for scalability and maintainability.

```text
npathways-website/
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── assets/             # Global images, logos, and media
│   ├── components/         # Reusable UI components
│   │   ├── auth/           # Auth-related guards and forms
│   │   ├── bootcamp/       # Calendar, Map, and Card components
│   │   ├── common/         # Buttons, Inputs, Loading screens
│   │   ├── dashboard/      # Dashboard-specific UI
│   │   └── layout/         # Header, Footer, Page wrappers
│   ├── context/            # React Context (Auth)
│   ├── data/               # Service definitions, bootcamps, and helpers
│   ├── lib/                # Third-party library configurations
│   ├── pages/              # Page-level components
│   │   ├── auth/           # Login, Register
│   │   ├── dashboard/      # User Hub, My Files, Profile
│   │   ├── legal/          # Privacy, Terms, Refunds
│   │   └── public/         # Core Brand Pages
│   │       ├── about/      # Founder, How it Works
│   │       ├── services/   # Detail pages, Bootcamp Calendar
│   │       ├── Home.jsx    # Homepage
│   │       └── Contact.jsx # Lead Generation Form
│   ├── styles/             # Global CSS and Design Tokens
│   ├── App.jsx             # Root Component & Routing
│   └── main.jsx            # Entry point
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

---

## 🛠️ Setup & Installation

Follow these steps to get the development environment running locally.

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/npathways-website.git
   cd npathways-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 🚀 Deployment

The project is optimized for modern cloud hosting platforms like **Vercel**, **Netlify**, or **AWS Amplify**.

### Production Build
To create a production-ready bundle, run:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

---

## 🌟 Key Features

### 1. **Service-Oriented Architecture**
- **Lead Generation**: High-conversion landing pages for Global Education, Career Guidance, and Visa Assistance.
- **Inquiry Flow**: All premium service calls are funneled through a centralized contact and consultation system.

### 2. **Interactive Bootcamp Calendar**
- **Real-time Schedule**: Browse upcoming Online and Offline cohorts.
- **Filtering**: Seamlessly toggle between session types and availability.
- **Direct Inquiry**: "Enquire for Batch" functionality redirects users to dedicated advisors.

### 3. **Secure Student Dashboard**
- **Protected Routes**: Authenticated user area using React Context.
- **Resource Hub**: Access to my files and educational assets.
- **Profile Management**: Manage student details and records.

### 4. **Modern Design System**
- **Minimalist Aesthetic**: High-contrast B&W theme for focus and clarity.
- **Responsive**: Fully optimized for Desktop, Tablet, and Mobile.
- **Micro-animations**: Smooth transitions and loading states for a premium feel.

---

## 🧪 Tech Stack

- **Frontend**: React 19, Vite 7
- **Routing**: React Router 7
- **Styling**: Vanilla CSS (Focus on design tokens and performance)
- **Icons**: React Icons (Fi, Fa)
- **Utilities**: date-fns

---

## 📜 License

This project is proprietary. All rights reserved.

---

<p align="center">
  Built with ❤️ by the NPathways Team
</p>
