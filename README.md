# BandLinks

A modern, fast, and accessible "link in bio" aggregator built with **Svelte 5** and powered by **Directus CMS**. Perfect for bands, artists, content creators, and anyone who needs a beautiful landing page to showcase their links.

![Svelte 5](https://img.shields.io/badge/Svelte-5.39.3-FF3E00?style=flat&logo=svelte&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-2.42.2-FF3E00?style=flat&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- **🚀 Svelte 5 Powered** - Built with the latest Svelte 5 runes and modern patterns
- **📱 Responsive Design** - Mobile-first design that looks great on all devices
- **🎨 Dynamic Theming** - Theme colors automatically adapt from your content
- **♿ Accessibility First** - WCAG compliant with proper ARIA labels and semantic HTML
- **⚡ Performance Optimized** - Image preloading, optimized loading strategies
- **🔒 Type Safe** - Full TypeScript support with comprehensive type definitions
- **🎯 SEO Ready** - Meta tags, Open Graph, and proper structured data
- **📊 Analytics Ready** - Built-in Plausible Analytics integration
- **🐳 Docker Ready** - Containerized deployment with GitHub Actions CI/CD

## 🏗️ Tech Stack

- **Frontend**: [Svelte 5](https://svelte.dev/) + [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **CMS**: [Directus](https://directus.io/) (self-hosted)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: Docker + GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- A Directus instance with your content

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/bandlinks.git
   cd bandlinks
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file
   echo "BAND_ID=your-directus-item-id" > .env
   ```

4. **Start development server**
   ```bash
   pnpm run dev
   ```

Visit `http://localhost:5173` to see your application running.

## 📝 Available Scripts

```bash
# Development
pnpm run dev          # Start development server
pnpm run dev --open   # Start dev server and open browser

# Building
pnpm run build        # Create production build
pnpm run preview      # Preview production build

# Code Quality
pnpm run check        # Run TypeScript and Svelte checks
pnpm run check:watch  # Run checks in watch mode
pnpm run lint         # Check code formatting and linting
pnpm run format       # Format code with Prettier
```

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   │   ├── HeroSection.svelte
│   │   ├── LinkButton.svelte
│   │   └── PageFooter.svelte
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # Utility functions
├── routes/
│   ├── +layout.svelte      # App layout
│   ├── +layout.server.ts   # Layout data loading
│   ├── +page.svelte        # Main page
│   ├── +page.server.ts     # Page data loading
│   └── +error.svelte       # Error page
└── app.css                 # Global styles and Tailwind config
```

## ⚙️ Configuration

### Environment Variables

| Variable  | Description                                   | Required |
| --------- | --------------------------------------------- | -------- |
| `BAND_ID` | Your Directus item ID for the link aggregator | ✅ Yes   |

### Directus Setup

Your Directus instance should have a `link_aggregator` collection with the following structure:

```typescript
interface LinkAggregator {
	id: string;
	title: string;
	tagline: string;
	tag_line: string;
	theme_color: string;
	impress_url: string;
	favicon: string;
	background_image: DirectusFile;
	logo_image: DirectusFile;
	links: Link[];
}

interface Link {
	id: string;
	caption: string;
	url: string;
	font_awesome_font: string;
	font_awesome_icon_name: string;
	sort: number;
}
```

## 🐳 Deployment

### Docker

The project includes a complete Docker setup:

```bash
# Build Docker image
docker build -t bandlinks .

# Run container
docker run -p 3000:3000 -e BAND_ID=your-id bandlinks
```

### GitHub Actions

The project includes automated CI/CD with GitHub Actions:

- ✅ Builds Docker container on every commit to `main`
- ✅ Pushes to GitHub Container Registry
- ✅ Triggers deployment via webhook
- ✅ Uses SvelteKit's `@sveltejs/adapter-node` for SSR

## 🎨 Customization

### Theming

The application automatically adapts to your brand colors defined in Directus. The theme color is applied to:

- Primary buttons and interactive elements
- Hero section overlay gradients
- Browser theme color meta tag

### Styling

Built with Tailwind CSS v4 and DaisyUI for rapid customization:

```css
/* Custom theme variables are automatically injected */
:root {
	--theme-color: #your-brand-color;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Directus](https://directus.io/) for the headless CMS
- [DaisyUI](https://daisyui.com/) for the beautiful components

---

**Built with ❤️ and modern web technologies**
