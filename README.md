# Matic AI Loti

Matic AI Loti is a premium, state-of-the-art interactive landing page featuring smooth 3D animations, autoplay video elements, and optimized viewport fitting. It is built using **Next.js**, **React**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Key Features

- **Responsive Viewport Fitting (100vh)**: The entire landing page (Header, Hero, and Carousel) is dynamically sized to fit perfectly on a single screen fold, eliminating vertical scrolling on desktop viewports.
- **Interactive 3D Video Carousel**: Hovering over any carousel card triggers smooth transition cross-fades from a static poster image to an active looped video stream.
- **CardStack Component with Navigation**: A Tinder-like 3D card deck layout that supports mouse dragging, keyboard arrow navigation, and custom left/right glassmorphism arrow overlays.
- **Aesthetic Grid Canvas**: Features a clean and responsive radial-dot background canvas matrix across the entire layout.
- **Next-Gen Typography**: Built using Outfit and Google Fonts for maximum typographical excellence.

## 🛠️ Technology Stack

- **Core**: Next.js 16 (App Router with Turbopack), React 19, TypeScript
- **Styling**: Tailwind CSS, PostCSS, Vanilla CSS Modules
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 🚀 Getting Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js (v18+) and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajneeshverma1/Matic-ai-upgrade.git
   ```

2. Navigate into the project folder:
   ```bash
   cd natic-ai-loti
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Turbopack-powered development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Folder & Components Architecture

The project directory is structured as follows:

```text
natic-ai-loti/
├── app/                  # Next.js App Router folders
│   ├── layout.tsx        # Global page layout config
│   ├── page.tsx          # Main entry page rendering the restored Carousel
│   └── globals.css       # Global styles (Tailwind configurations & radial grids)
├── components/           # UI Components
│   ├── ui/               # Reusable primitives
│   │   └── card-stack.tsx# Highly custom 3D card deck layout
│   ├── Header.tsx        # Responsive navbar with customized logo size
│   ├── Header.module.css # Styling for header elements
│   ├── Hero.tsx          # Headline and subheadline introduction section
│   ├── Hero.module.css   # Styling for hero section elements
│   ├── Carousel.tsx      # Main 3D carousel element with hover video triggers
│   └── Carousel.module.css# Transition and layout styles for Carousel cards
```

### Component Details
- **Carousel component**: Coordinates active indices. Applies a fanned-out visual deck layout utilizing absolute CSS translations. Auto-plays video elements in real time when hovered using React `useRef` array bindings.
- **CardStack component**: Renders dragging cards mapped dynamically through Framer Motion animations. Uses mathematical scale-downs and offset vertical translations to overlay inactive cards behind the active card.

## 🧑‍💻 Author

Developed and maintained by **rajneeshverma1** ([curiousrajneesh2024@gmail.com](mailto:curiousrajneesh2024@gmail.com)).
