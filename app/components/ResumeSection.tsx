'use client';

import React from 'react';
import { 
  SiAmazon,
  SiPostgresql, 
  SiPython,
  SiTypescript,
  SiOpenjdk,
  SiSwift,
  SiRedis,
  SiCplusplus,
  SiDotnet,
  SiFsharp,
  SiReact,
  SiApachekafka,
  SiRubyonrails,
  SiGoogle
} from 'react-icons/si';

interface Tech {
  name: string;
  icon: React.ElementType;
}

interface Accomplishment {
  title: string;
  description: string;
  points: string[];
}

import { 
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineCloud,
  AiOutlineCode,
  AiOutlineSolution,
  AiOutlineExperiment,
  AiOutlineApi,
  AiOutlineBulb,
  AiOutlineCluster
} from 'react-icons/ai';

const accomplishments = {
  'Healthcare': [
    {
      title: 'Zocdoc - PhoneAI Platform',
      description: 'Collaborating with Chief AI Officer on revolutionary provider appointment management system',
      points: [
        'Implemented Gemini-based LLM agent with OpenAI fallback',
        'Built end-to-end booking flow with phonetic name recognition',
        'Designed video appointment feature reducing drop-offs',
        'Improved automation by 10% driving booking revenue growth'
      ]
    }
  ],
  'E-commerce & Retail': [
    {
      title: 'Walmart Labs - AI-Driven Customer Support Platform',
      description: 'Led pioneering OpenAI chatbot integration and unified platform development',
      points: [
        'Developed predictive wait-time system reducing response time from 20s to <1s',
        'Built queue and load-balancing service saving $500K/month',
        'Reduced fraud traffic by 80% through innovative prevention tools',
        'Improved chatbot latency by 50% enhancing customer satisfaction'
      ]
    }
  ],
  'AdTech': [
    {
      title: 'AppNexus (Microsoft) - RTB Platform',
      description: 'Led development of premium marketplace features and GDPR compliance',
      points: [
        'Delivered Curated Deals marketplace for premium video inventory',
        'Implemented GDPR compliance across advertising ecosystem',
        'Created real-time performance dashboard using Kafka',
        'Launched page-level ad roadblock functionality'
      ]
    }
  ],
  'Financial Services': [
    {
      title: 'Goldman Sachs - Structured CLO',
      description: 'Vice President developing critical trading and analytics tools',
      points: [
        'Built web-based pricing tools for $250M+ revenue portfolio',
        'Enhanced portfolio analytics and cash flow tracking',
        'Created high-speed analytics applications',
        'Integrated external CLO data providers improving turnaround'
      ]
    }
  ]
};

const skills = {
  languages: [
    { name: 'C++', icon: SiCplusplus },
    { name: 'C#', icon: SiDotnet },
    { name: 'Java', icon: SiOpenjdk },
    { name: 'Python', icon: SiPython },
    { name: 'F#', icon: SiFsharp },
    { name: 'Swift', icon: SiSwift },
    { name: 'TypeScript', icon: SiTypescript }
  ],
  databases: [
    { name: 'SQL', icon: SiPostgresql },
    { name: 'Redis', icon: SiRedis },
    { name: 'Cosmos DB', icon: AiOutlineCloud },
    { name: 'DynamoDB', icon: SiAmazon }
  ],
  cloudOps: [
    { name: 'AWS', icon: SiAmazon },
    { name: 'Google Cloud', icon: SiGoogle },
    { name: 'Azure', icon: AiOutlineCloud },
    { name: 'Kafka', icon: SiApachekafka },
    { name: 'Service Bus', icon: AiOutlineApi },
    { name: 'SQS', icon: SiAmazon }
  ],
  frameworks: [
    { name: 'React', icon: SiReact },
    { name: 'Ruby on Rails', icon: SiRubyonrails },
    { name: 'SwiftUI', icon: SiSwift }
  ],
  ai: [
    { name: 'Gemini', icon: AiOutlineExperiment },
    { name: 'OpenAI', icon: AiOutlineBulb },
    { name: 'Prompt Engineering', icon: AiOutlineSolution },
    { name: 'Langchain', icon: AiOutlineApi },
  { name: 'Langsmith', icon: AiOutlineCluster },
    { name: 'LLM Integration', icon: AiOutlineCloud },
    { name: 'RAG', icon: AiOutlineBulb }
  ]
};

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stony Brook University',
    year: '2005'
  }
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Tech Lead with over 20 years of experience building highly scalable, maintainable products across complex architectural landscapes. Specializing in AI-driven innovation and customer-centric solutions at industry-leading companies including Walmart, Zocdoc, Microsoft (AppNexus), and Goldman Sachs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Currently collaborating with Zocdoc's Chief AI Officer on PhoneAI, revolutionizing healthcare appointment management through advanced LLM implementations. Previously led Walmart's pioneering OpenAI chatbot integration, delivering transformative customer support solutions that significantly reduced costs while enhancing service quality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Proven track record of translating technical innovation into measurable business impact, from reducing fraud by 80% at Walmart to improving automation-driven booking revenue by 10% at Zocdoc. Beyond enterprise solutions, I'm passionate about creating educational iOS applications that make a difference in the community.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">99.99%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">&lt;10ms</div>
                <div className="text-gray-600">Latency</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">1M+</div>
                <div className="text-gray-600">TPS Handled</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/Sheetal_Shah_Resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Full Resume
            </a>
          </div>
        </div>

        {/* Accomplishments by Industry */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <AiOutlineCluster className="w-6 h-6 mr-2" />
            Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(accomplishments).map(([category, items]) => (
              <div key={category} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AiOutlineCloud className="w-5 h-5 mr-2" />
                  {category}
                </h4>
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-semibold text-lg text-gray-900">{item.title}</h5>
                      <p className="text-gray-600 mt-1 mb-2">{item.description}</p>
                      <ul className="list-disc list-inside space-y-1">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="text-gray-700">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <AiOutlineCode className="w-6 h-6 mr-2" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI & ML (moved first) */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AiOutlineBulb className="w-5 h-5 mr-2" />
                AI & ML
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.ai.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <skill.icon className="w-6 h-6 mr-2 text-gray-700" />
                    <span className="text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AiOutlineCode className="w-5 h-5 mr-2" />
                Languages
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.languages.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <skill.icon className="w-6 h-6 mr-2 text-gray-700" />
                    <span className="text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AiOutlineCloud className="w-5 h-5 mr-2" />
                Databases
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.databases.map((tech, index) => (
                  <div key={tech.name} className="flex items-center">
                    <tech.icon className="w-6 h-6 mr-2 text-gray-700" />
                    <span className="text-gray-600">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AiOutlineCloud className="w-5 h-5 mr-2" />
                Cloud & DevOps
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.cloudOps.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <skill.icon className="w-6 h-6 mr-2 text-gray-700" />
                    <span className="text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AiOutlineCode className="w-5 h-5 mr-2" />
                Frameworks
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <skill.icon className="w-6 h-6 mr-2 text-gray-700" />
                    <span className="text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
            </svg>
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div id="contact" className="mt-12 bg-gray-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Let's Connect</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:onlysheetal@gmail.com"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <AiOutlineMail className="w-6 h-6 mr-2" />
              <span>onlysheetal@gmail.com</span>
            </a>
            <a
              href="tel:201-885-9539"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <AiOutlinePhone className="w-6 h-6 mr-2" />
              <span>201-885-9539</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sheetal-shah-9436945/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <AiOutlineLinkedin className="w-6 h-6 mr-2" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}