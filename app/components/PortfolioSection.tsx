'use client';

const apps = [
  {
    title: 'Math Mindset',
    description: 'Educational app to enable children to calculate mentally and engage in fun  mental math exercises.',
    appStoreUrl: 'https://apps.apple.com/us/app/math-mindset-fast-mental-math/id1671226684',
    tags: ['Education', 'Mathematics', 'Free Learning']
  },
  {
    title: 'Astronaut in Space',
    description: 'Educational word game promoting literacy and space exploration knowledge. Created to inspire young minds to explore both language and science in an engaging way.',
    appStoreUrl: 'https://apps.apple.com/eg/app/astronaut-in-space-word-game/id6465081563',
    tags: ['Education', 'Literacy', 'Space']
  },
  {
    title: 'Number Puzzle',
    description: 'Free puzzle game developing critical thinking and problem-solving abilities in children. Designed to strengthen cognitive skills through entertaining challenges.',
    appStoreUrl: 'https://apps.apple.com/eg/app/number-puzzle-sort-numbers/id1554367356',
    tags: ['Education', 'Problem Solving', 'Cognitive Development']
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Social / Community Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Personal initiative to give back to the community through educational technology
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Developed a suite of iOS applications focused on enhancing learning and cognitive development in young minds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on App Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}