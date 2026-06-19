import furnitureImage from '../assets/optimized/furniture.jpg'
import portfolioImage from '../assets/optimized/portfolio.jpg'
import resumeImage from '../assets/optimized/resume.jpg'
import shopProImage from '../assets/optimized/ShopPro.jpg'

export const projects = [
  {
    id: 'shoppro',
    title: 'ShopPro',
    category: 'E-commerce',
    description: 'An API-powered storefront with a fast, intuitive shopping experience.',
    problem: 'Online stores need product discovery and shopping flows that stay clear on every screen size.',
    value: 'Responsive product browsing, filtering, cart, and checkout interactions in one focused experience.',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
    image: shopProImage,
    liveUrl: 'https://shop-pro-gray.vercel.app/',
    codeUrl: null, // TODO: Add the ShopPro repository URL when it is public.
    featured: true,
  },
  {
    id: 'vitae',
    title: 'Vitae AI Resume Builder',
    category: 'Web Apps',
    description: 'An AI-assisted resume builder for creating polished, structured resumes.',
    problem: 'Writing and formatting a strong resume can be slow and difficult to structure consistently.',
    value: 'A guided drafting experience that helps users shape and export a professional resume.',
    stack: ['React', 'Tailwind CSS', 'AI integration'],
    image: resumeImage,
    liveUrl: 'https://automated-resume.vercel.app/',
    codeUrl: null, // TODO: Add the Vitae repository URL when it is public.
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    category: 'Portfolio',
    description: 'A responsive personal portfolio built to present work clearly across devices.',
    problem: 'A developer portfolio has to communicate capability quickly without overwhelming the visitor.',
    value: 'A focused project showcase with responsive layouts and purposeful motion.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioImage,
    liveUrl: 'https://portfolio-weld-mu-35.vercel.app/',
    featured: false,
  },
  {
    id: 'hudsons',
    title: "Hudson's Furniture",
    category: 'E-commerce',
    description: 'A responsive furniture storefront with product browsing and Firebase authentication.',
    problem: 'Furniture catalogues need a calm visual hierarchy while keeping products easy to browse.',
    value: 'Modern catalogue browsing and an authenticated shopping experience in a responsive storefront.',
    stack: ['React', 'Tailwind CSS', 'Firebase'],
    image: furnitureImage,
    liveUrl: 'https://hudson-furniture.vercel.app/',
    codeUrl: null, // TODO: Add the Hudson's Furniture repository URL when it is public.
    featured: true,
  },
]

export const services = [
  {
    title: 'Business websites',
    description: 'Professional, fast websites designed to build trust and turn visitors into enquiries.',
    icon: 'globe',
  },
  {
    title: 'Website redesigns',
    description: 'Clearer structure, stronger visuals, and a smoother experience for an existing website.',
    icon: 'refresh',
  },
  {
    title: 'E-commerce websites',
    description: 'Responsive storefronts that make products simple to discover, understand, and buy.',
    icon: 'cart',
  },
  {
    title: 'Landing pages',
    description: 'Focused campaign and product pages built around one clear conversion goal.',
    icon: 'target',
  },
  {
    title: 'Web apps',
    description: 'Interactive, maintainable applications with thoughtful workflows and polished UI.',
    icon: 'app',
  },
  {
    title: 'Full-stack development',
    description: 'End-to-end development across interface, API, data, testing, and deployment.',
    icon: 'code',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'API integration'],
  },
  {
    title: 'Database',
    skills: ['Firebase', 'MongoDB'],
  },
  {
    title: 'Tools & deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'Responsive QA'],
  },
]

export const processSteps = [
  { title: 'Discover', description: 'Understand your goals, audience, offer, and what success should look like.' },
  { title: 'Plan', description: 'Define the structure, key pages, content priorities, and technical approach.' },
  { title: 'Design', description: 'Shape a clean, intuitive interface that fits your brand and users.' },
  { title: 'Build & test', description: 'Develop, refine, and test the experience across devices and browsers.' },
  { title: 'Launch & improve', description: 'Ship confidently, then improve the product as your needs evolve.' },
]

export const expectations = [
  { title: 'Clean design', description: 'Modern interfaces with a clear hierarchy and no unnecessary clutter.', icon: 'pen' },
  { title: 'Responsive by default', description: 'A seamless experience across phones, tablets, and desktops.', icon: 'devices' },
  { title: 'Fast-loading builds', description: 'Performance-minded development that respects every visitor.', icon: 'bolt' },
  { title: 'Clear communication', description: 'Direct updates, practical decisions, and shared expectations.', icon: 'message' },
  { title: 'Business-first decisions', description: 'Design and engineering choices connected to a real goal.', icon: 'target' },
  { title: 'Modern UI/UX', description: 'Thoughtful details that make the product easy and satisfying to use.', icon: 'grid' },
]
