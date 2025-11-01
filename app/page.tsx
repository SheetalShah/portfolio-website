'use client';

import PortfolioSection from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-indigo-50/50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Sheetal Shah
          </h1>
          <h2 className="text-2xl md:text-3xl text-indigo-700 mb-4 font-semibold">
            AI & Full Stack Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Pioneering the integration of cutting-edge AI technologies with scalable distributed systems. With extensive experience in LLM implementations and highly scalable architectures, I help companies transform through intelligent automation and robust engineering.
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From implementing AI systems to building highly available platforms serving millions of users, I bridge the gap between innovative AI solutions and production-ready highly available, fault tolerant distributed systems.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#portfolio"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <ResumeSection />
      <PortfolioSection />
    </main>
  );
}
