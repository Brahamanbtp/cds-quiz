# CDS Quiz Application

A modern, responsive, and dynamic quiz application designed specifically to help aspirants prepare for the Combined Defence Services (CDS) Examination. Built with Next.js, React, and Tailwind CSS.

## Features

- **Subject-wise Categorization**: Comprehensive question banks for English, General Knowledge, and Elementary Mathematics.
- **Rich Question Formatting**: Support for advanced mathematical notation, HTML formatting, exponents, and geometry symbols natively in the browser.
- **Interactive Quiz Interface**: Clean, minimalist, and engaging UI to track progress and answer options effortlessly.
- **Data-Driven Architecture**: Question datasets are strictly typed and modularized in TypeScript for maintainability and quick additions.

## Tech Stack

- [Next.js](https://nextjs.org) (React framework)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [TypeScript](https://www.typescriptlang.org/) (Static Typing)
- [Lucide Icons](https://lucide.dev/) (SVG Icons)
- [Radix UI](https://www.radix-ui.com/) (Accessible components)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data Structure

The application's quiz data is stored locally in the `data/` directory:
- `data/english.ts` - English Grammar, Vocabulary, and Comprehension
- `data/gk.ts` - History, Geography, Polity, Science
- `data/maths.ts` - Geometry, Algebra, Trigonometry, Arithmetic

Each dataset maps a year (e.g., "2026") to an array of strictly typed `Question` objects. 

## Contribution & Expansion

To add new questions to the database:
1. Open the respective subject file in the `data/` directory.
2. Ensure you format all math or specific notations using proper HTML tags (e.g., `&theta;`, `<sup>`, `&radic;`).
3. Maintain the structured schema mapping (`question`, `options`, `answer`).

## License
Created by Pranay Sharma. All rights reserved.
