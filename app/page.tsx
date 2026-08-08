"use client";

// Import necessary components and icons
import { BookOpen, Globe, Calculator, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const quizCategories = [
    {
      id: "english",
      title: "English",
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      description: "Grammar, vocabulary, and reading comprehension.",
    },
    {
      id: "gk",
      title: "General Knowledge",
      icon: <Globe className="h-8 w-8 text-emerald-400" />,
      description: "History, Geography, Polity, and Current Affairs.",
    },
    {
      id: "maths",
      title: "Elementary Mathematics",
      icon: <Calculator className="h-8 w-8 text-amber-400" />,
      description: "Arithmetic, Algebra, Geometry, and Trigonometry.",
    },
  ];



  return (
    // Root container: AMOLED black, min height, relative positioning for footer, monospace font
    <div className="relative min-h-screen bg-black text-gray-300 font-mono">
      {/* Header: Minimal, border bottom, contains category icons and GitHub link */}
      <header className="border-b border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        {/* Increased border darkness slightly */}
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Left side: Placeholder or leave empty if no logo */}
          <div className="w-8"></div> {/* Acts as spacer */}
          {/* Middle: Category Icons (optional, uncomment if desired) */}
          {/* <div className="hidden md:flex space-x-4">
            {quizCategories.map((category) => (
              <div key={`${category.id}-header-icon`} className="text-gray-600 hover:text-gray-400 transition-colors">
                 {category.icon} // You might need to adjust icon size/color here
              </div>
            ))}
           </div> */}
          {/* Right side: GitHub Link */}
          <Link
            href="https://github.com/Brahamanbtp/cds-quiz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        {" "}
        {/* Increased vertical padding */}
        {/* Hero Section */}
        <section className="mb-16 md:mb-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            {" "}
            {/* Adjusted heading tag, tracking */}
            CDS Quiz Zone
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Sharpen your knowledge for CDS exams. Select a category below to
            begin.
          </p>
        </section>
        {/* Category Selection Section */}
        <section>
          {/* Removed explicit "Select a Category" heading for minimalism */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {" "}
            {/* Adjusted grid cols and gap */}
            {quizCategories.map((category) => (
              // Use Link component for navigation
              <Link
                key={category.id}
                href={`/quiz/${category.id}`}
                className="block bg-gray-800 border border-gray-600 p-6 text-left group hover:border-blue-400 hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:-translate-y-1"
              >
                <div className="mb-4">{category.icon}</div>
                <h2 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200">
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {" "}
                  {/* Adjusted text color/leading */}
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer: Positioned absolutely at the bottom */}
      <footer className="absolute bottom-0 left-0 w-full py-4 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-xs">
          Made by{" "}
          <a
            href="https://github.com/Brahamanbtp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-200 underline underline-offset-2"
          >
            Pranay Sharma
          </a>
        </div>
      </footer>
    </div>
  );
}
