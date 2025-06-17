import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import shopProImg from '../assets/ShopPro.png';
import VitaeImg from "../assets/resume.png"
import PortfolioImg from "../assets/portfolio.png"
import FurnitureImg from "../assets/furniture.png"
import BreadwaveImg from "../assets/breadwave.png"
import BlogrImg from "../assets/blogr.png"

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'An API based shopping site built using React, TailwindCss and JavaScript',
    link: 'https://shop-pro-gray.vercel.app/',
    image: shopProImg,
    tags: ['React & TailwindCss'],
  },
  {
    title: 'Resume Builder',
    description: 'An AI-powered resume builder built with React and Tailwind.',
    link: 'https://automated-resume.vercel.app/',
    image: VitaeImg,
    tags: ['React & TailwindCss'],
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive and animated portfolio built with modern web tech.',
    link: 'https://portfolio-weld-mu-35.vercel.app/',
    image: PortfolioImg,
    tags: ['React & TailwindCss'],
  },
   {
    title: "Hudson's Furniture",
    description: 'Responsive furniture-based e-commerce site built with modern web tech and firebase authentication integration',
    link: 'https://hudson-furniture.vercel.app/',
    image: FurnitureImg,
    tags: ['React & TailwindCss'],
  },
  {
    title: "Breadwave clone",
    description: 'A detailed clone of the official breadwave site',
    link: 'https://breadwave-clone-iota.vercel.app/',
    image: BreadwaveImg,
    tags: ['Html & Css'],
  },
   {
    title: "Blogr landing page clone",
    description: 'A detailed landing page clone',
    link: '#',
    image: BlogrImg,
     tags: ['Html & Css'],
  },
];

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const filtered = selectedTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-10 bg-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
                selectedTag === tag
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'border-slate-600 text-slate-300 hover:border-indigo-500 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Carousel Scroll on Mobile */}
        <div className="grid sm:grid-cols-2 text-slate-100 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible sm:grid">
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[85%] sm:min-w-0 sm:w-auto bg-slate-900 p-4 rounded-xl shadow-md hover:shadow-xl transition hover:scale-[1.02] flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold mb-1 text-indigo-400">{project.title}</h3>
              <p className="text-slate-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 bg-slate-700 rounded-full text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-indigo-300 hover:text-indigo-400 transition text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
