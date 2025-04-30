# Portfolio Vite Tailwind Graymatter Frontmatter

This is a portfolio project built with Vite, React, Tailwind CSS, and MDX.

## Features

- **Vite**: Fast development server and build tool.
- **React**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework.
- **MDX**: Markdown with JSX support.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/randompatternsjk/portfolio-vite-tailwind-graymatter-frontmatter.git


# Where to Begin?
## src/App.jsx
The main entry point for your application. This app has a Navbar.

## GoodWork.JSX
A portfolio with a card grid and modal details. Projects are stored as MDX files within "/src/projects""  with frontmatter in each file for metadata. Frontmatter includes fields for: Project, Title, Tags, Cover Image, Logline. The index page (GoodWork.jsx) fetches all MDX files, extracts their frontmatter (title, skills, cover image, etc.), and renders them as cards in a masonry layout. Clicking a card opens a modal that dynamically renders the full MDX content (including styled Markdown/JSX).

✅ **Structured content** (MDX + frontmatter)

✅ **Efficient data loading** (Vite globbing)

✅ **Responsive UI** (masonry grid + modal)

✅ **Dynamic interactivity** (client-side MDX rendering)


