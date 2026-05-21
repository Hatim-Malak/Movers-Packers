# Nitin Packers & Movers Landing Page

A fully responsive, modern, and interactive landing page built for a Packers & Movers business. Designed to convert visitors with clear calls to action, an engaging UI, and a built-in quote request form.

## 🚀 Live Demo
*https://movers-packers-nine.vercel.app*

---

## Features
- **Modern UI/UX:** Clean design based on a high-contrast dark blue (`#002046`) and vibrant orange (`#FF6B35`) color palette.
- **Custom Animations:** Hand-crafted CSS keyframe animations for the service cards (floating boxes, driving trucks, orbiting planes).
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.
- **Interactive Google Maps:** Integrated working iframe centered on the business location (Indore).
- **Quote Generation Form:** A clean, easy-to-use form for potential customers to request pricing.
- **Optimized Icons:** Uses lightweight SVG icons via `lucide-react`.

---

## Tech Stack
- **Framework:** [React.js](https://reactjs.org/) (Functional Components & Hooks)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVGs
- **Typography:** Inter (Google Fonts)

---

## Installation & Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/nitin-packers-movers.git
cd nitin-packers-movers
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`
*Note: Ensure `lucide-react` and `tailwindcss` are properly installed in your `package.json`.*

### 3. Add Local Assets
For the hero and testimonial sections to render properly, ensure you have the following images in your `public` folder (or update the `src` paths in the code):
- `./packers-and-movers-1440-x-646-px.png` (Hero Background)
- `./packers-and-movers-4.png` (About & Testimonial Section)
- `./happy.png` (Contact Form Section)

### 4. Run the development server
\`\`\`bash
npm run dev
# or
npm start
\`\`\`
The application will open in your browser, typically at `http://localhost:3000` or `http://localhost:5173` (if using Vite).

---

## Project Structure highlights
- **`App.js` / `App.jsx`**: The main container file holding the layout, navbar, hero, and footer sections.
- **Custom CSS Inject**: Keyframe animations are injected directly via a `<style>` block in the React component to avoid requiring manual edits to `tailwind.config.js`.
- **`ServiceCard` Component**: A reusable, animated card component utilized in the "Our Services" grid.

---

## Design Notes
- **Overflow Fix:** The `w-full overflow-x-hidden` class is used on the main wrapper to prevent horizontal scrollbars on Windows/Linux browsers.
- **Map Integration:** The footer contains an `iframe` intended for Google Maps. To display the exact pin for "Nitin Packers and Movers", replace the `src` URL in the iframe with the "Embed a map" link from Google Maps.

---

## Contributing
Contributions, issues, and feature requests are welcome! 
Feel free to check [issues page](https://github.com/your-username/nitin-packers-movers/issues).

