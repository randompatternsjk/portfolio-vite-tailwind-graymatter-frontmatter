// src/App.jsx
import React from 'react'
import TestMDX from './test.mdx' // Example MDX import

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Welcome to Your Portfolio
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This starter includes Tailwind CSS + Vite + MDX support
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tailwind Styled Section
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              This card uses Tailwind's utility classes for:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Padding</li>
              <li>Shadows</li>
              <li>Colors</li>
              <li>Typography</li>
            </ul>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Example Button
            </button>
          </div>
        </section>

        {/* MDX Content */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <TestMDX />
        </section>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Your Portfolio</p>
      </footer>
    </div>
  )
}