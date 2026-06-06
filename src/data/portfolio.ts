export const NAV_LINKS = [
{ label: 'About', href: '#about' },
{ label: 'Education', href: '#education' },
{ label: 'Skills', href: '#skills' },
{ label: 'Projects', href: '#projects' },
{ label: 'Certifications', href: '#certifications' },
{ label: 'Contact', href: '#contact' }];


export const HERO_STATS = [
{ value: 3, suffix: '+', label: 'Years Study' },
{ value: 6, suffix: '+', label: 'Projects' },
{ value: 6, suffix: '+', label: 'Certifications' }];


export const FEATURE_CARDS = [
{
  title: 'Business Analysis',
  desc: 'Translating business needs into structured requirements and delivering solutions that create measurable value.',
  icon: 'Briefcase'
},
{
  title: 'Project Management',
  desc: 'Planning, executing, and delivering projects on time with agile and traditional methodologies.',
  icon: 'ClipboardList'
},
{
  title: 'Technology Solutions',
  desc: 'Building and architecting scalable software solutions that address real-world business challenges.',
  icon: 'Code2'
},
{
  title: 'Digital Transformation',
  desc: 'Driving innovation and digital change to improve organizational efficiency and competitiveness.',
  icon: 'TrendingUp'
}];


export const EDUCATION = [
{
  period: '2021 – Present',
  tag: 'Current Degree',
  title: 'BSc (Hons) in Information Technology',
  org: 'Rajarata University of Sri Lanka (RUSL)',
  desc: 'A comprehensive program covering software engineering, systems analysis, database management, IT project management, and business information systems. Developing core competencies across technical and managerial dimensions of Information Technology.',
  coursework: [
  'Systems Analysis & Design',
  'IT Project Management',
  'Business Information Systems',
  'Database Management',
  'Software Engineering',
  'Data Analytics',
  'Agile Methodologies',
  'Human-Computer Interaction']

},
{
  period: '2019 – 2021',
  tag: 'Advanced Level (A/L)',
  title: 'Sri Lanka G.C.E. Advanced Level',
  org: 'Technology Stream',
  desc: 'Completed Advanced Level examinations with a focus on the Technology stream, building the foundational knowledge for pursuing higher education in Information Technology.',
  coursework: []
},
{
  period: '2018 – 2019',
  tag: 'Ordinary Level (O/L)',
  title: 'Sri Lanka G.C.E. Ordinary Level',
  org: 'General Certificate of Education',
  desc: 'Successfully completed Ordinary Level examinations, demonstrating strong academic performance across core subjects.',
  coursework: []
}];


export const BUSINESS_SKILLS = [
{ label: 'Business Analysis', value: 88 },
{ label: 'Requirement Gathering', value: 85 },
{ label: 'Stakeholder Management', value: 80 },
{ label: 'Project Planning', value: 82 },
{ label: 'Agile Methodology', value: 78 },
{ label: 'Scrum', value: 75 }];


export const TECH_SKILLS = [
'HTML',
'CSS',
'JavaScript',
'React',
'Node.js',
'SQL',
'Python',
'Git & GitHub',
'UI/UX Design'];


export const SOFT_SKILLS = [
{ title: 'Communication', icon: 'MessageSquare' },
{ title: 'Leadership', icon: 'Award' },
{ title: 'Problem Solving', icon: 'Search' },
{ title: 'Teamwork', icon: 'Users' },
{ title: 'Critical Thinking', icon: 'Brain' },
{ title: 'Time Management', icon: 'Clock' }];


export const EXPERIENCE = [
{
  period: '2023 – Present',
  title: 'University Capstone Projects',
  org: 'Rajarata University of Sri Lanka',
  desc: 'Led and contributed to multiple IT capstone projects, applying business analysis frameworks, requirements engineering, and agile methodologies to real-world problem scenarios.'
},
{
  period: '2022 – 2023',
  title: 'Team Leadership Activities',
  org: 'University Groups',
  desc: 'Served as team coordinator for academic group projects, managing timelines, task distribution, and deliverable quality. Developed foundational project management and leadership competencies.'
},
{
  period: '2022',
  title: 'Academic Research',
  org: 'Department of IT, RUSL',
  desc: 'Conducted structured academic research on digital transformation and business process optimization, applying systematic analysis methodologies and presenting findings to faculty panels.'
},
{
  period: '2021 – Present',
  title: 'Volunteer Experience',
  org: 'Community Initiatives',
  desc: 'Participated in university and community volunteer programs, contributing to educational outreach activities and technology awareness campaigns within local communities.'
}];


export interface Project {
  title: string;
  icon: string;
  desc: string;
  impacts: string[];
  tech: string[];
  featured?: boolean;
  image?: string;
}

export const PROJECTS: Project[] = [
{
  title: 'Project Management Dashboard',
  icon: 'LayoutDashboard',
  desc: 'A comprehensive dashboard for tracking project milestones, resource allocation, and team performance metrics. Features real-time progress visualization and automated reporting.',
  impacts: [
  'Reduced reporting time by 40%',
  'Supports agile sprint tracking',
  'Multi-team collaboration'],

  tech: ['React', 'Node.js', 'SQL'],
  featured: true,
  image: '/project-dashboard.png'
},
{
  title: 'Business Analytics Dashboard',
  icon: 'BarChart3',
  desc: 'An interactive analytics platform providing business intelligence through data visualization, KPI tracking, and trend analysis. Enables data-driven decision making for stakeholders.',
  impacts: [
  'Interactive KPI visualizations',
  'Automated data pipeline',
  'Executive reporting module'],

  tech: ['Python', 'Data Analytics', 'SQL'],
  image: '/business-analytics.png'
},
{
  title: 'Task Management System',
  icon: 'CheckSquare',
  desc: 'A full-featured task management application with drag-and-drop kanban boards, priority queuing, deadline management, and collaborative team features.',
  impacts: [
  'Kanban board interface',
  'Real-time collaboration',
  'Deadline notifications'],

  tech: ['JavaScript', 'React', 'CSS'],
  image: '/task-management.png'
},
{
  title: 'Portfolio Website',
  icon: 'Globe',
  desc: 'A professional single-page portfolio showcasing skills, projects, and accomplishments. Designed with editorial aesthetics, smooth animations, and full responsiveness across all devices.',
  impacts: [
  'Fully responsive design',
  'Animated interactions',
  'Accessible & SEO-friendly'],

  tech: ['HTML', 'CSS', 'JavaScript'],
  image: '/portfolio-preview.png'
},
{
  title: 'Data Analysis Project',
  icon: 'Microscope',
  desc: 'Comprehensive data analysis pipeline for business datasets, including data cleaning, exploratory analysis, statistical modeling, and automated insight generation for business reporting.',
  impacts: [
  'Automated data cleaning',
  'Statistical insights engine',
  'Visual reporting output'],

  tech: ['Python', 'Pandas', 'Matplotlib'],
  image: '/data-analysis.png'
},
{
  title: 'AI-Powered Business Assistant',
  icon: 'Bot',
  desc: 'An intelligent business assistant leveraging NLP to automate routine business analysis tasks, generate structured reports from unstructured data, and provide strategic recommendations.',
  impacts: [
  'NLP-driven report generation',
  'Automated SWOT analysis',
  'Strategic insight engine'],

  tech: ['AI/ML', 'Python', 'NLP'],
  image: '/ai-assistant.png'
}];


export const CERTIFICATIONS = [
{
  title: 'Business Analysis Fundamentals',
  desc: 'Core methodologies in requirements gathering, process modeling, and stakeholder analysis.',
  tag: 'Business Analysis',
  icon: 'ClipboardCheck'
},
{
  title: 'Agile Project Management',
  desc: 'Agile principles, sprint planning, retrospectives, and iterative delivery frameworks.',
  tag: 'Agile',
  icon: 'Zap'
},
{
  title: 'Scrum Fundamentals',
  desc: 'Scrum ceremonies, roles, artifacts, and practical application in software development teams.',
  tag: 'Scrum',
  icon: 'RefreshCw'
},
{
  title: 'Data Analytics',
  desc: 'Data collection, analysis, visualization, and reporting for business intelligence insights.',
  tag: 'Analytics',
  icon: 'BarChart3'
},
{
  title: 'Project Management Essentials',
  desc: 'Comprehensive coverage of project lifecycle, planning tools, risk management, and stakeholder communication.',
  tag: 'PM',
  icon: 'FolderKanban'
},
{
  title: 'AI & Digital Transformation',
  desc: 'Strategies for integrating AI technologies and driving organizational digital transformation initiatives.',
  tag: 'AI/Digital',
  icon: 'Cpu'
}];


export const SWOT = {
  strengths: [
  'Strong analytical thinking',
  'Fast and eager learner',
  'Excellent team collaboration',
  'Solid technical foundation',
  'Detail-oriented approach',
  'Adaptability and resilience'],

  weaknesses: [
  'Limited industry experience',
  'Public speaking — actively improving',
  'Building professional network',
  'Real-world project exposure'],

  opportunities: [
  'Rapidly growing IT industry',
  'Digital business transformation',
  'AI & automation adoption',
  'Remote work possibilities',
  'Agile adoption in enterprises'],

  threats: [
  'Competitive graduate job market',
  'Rapid technology evolution',
  'Global economic uncertainty',
  'Skill obsolescence risk']

};

export const ACHIEVEMENTS = [
{
  num: '01',
  title: 'Academic Excellence',
  desc: 'Consistently strong academic performance throughout the BSc IT program with commendation in core modules.',
  icon: 'GraduationCap',
  span: 'lg'
},
{
  num: '02',
  title: 'Leadership Role',
  desc: 'Served in a team leadership capacity for university project groups, coordinating deliverables and managing team dynamics.',
  icon: 'Crown',
  span: 'sm'
},
{
  num: '03',
  title: 'Competition Participation',
  desc: 'Participated in university-level technology competitions, applying analytical and problem-solving skills under pressure.',
  icon: 'Trophy',
  span: 'sm'
},
{
  num: '04',
  title: 'Community Volunteering',
  desc: 'Engaged in community service and university volunteer activities, demonstrating social responsibility and leadership.',
  icon: 'HeartHandshake',
  span: 'sm'
},
{
  num: '05',
  title: 'Innovative Projects',
  desc: 'Designed and delivered impactful university capstone projects recognized for technical quality and business relevance.',
  icon: 'Lightbulb',
  span: 'sm'
},
{
  num: '06',
  title: 'Continuous Learning',
  desc: 'Proactively pursued 6+ professional certifications alongside degree studies, reflecting commitment to growth.',
  icon: 'BookOpen',
  span: 'lg'
}];


export const INTERESTS = [
{ title: 'Technology Research', icon: 'Microscope' },
{ title: 'Project Planning', icon: 'ClipboardList' },
{ title: 'Reading', icon: 'BookOpen' },
{ title: 'Innovation', icon: 'Lightbulb' },
{ title: 'Problem Solving', icon: 'Puzzle' },
{ title: 'New Technologies', icon: 'Radio' },
{ title: 'Data Analysis', icon: 'BarChart3' },
{ title: 'Community Engagement', icon: 'Sprout' }];


export const CONTACTS = [
{
  label: 'Email',
  value: 'your.email@example.com',
  icon: 'Mail',
  href: 'mailto:your.email@example.com'
},
{
  label: 'Phone',
  value: '+94 XX XXX XXXX',
  icon: 'Phone',
  href: 'tel:+94000000000'
},
{ label: 'Location', value: 'Sri Lanka', icon: 'MapPin', href: '#' },
{
  label: 'LinkedIn',
  value: 'linkedin.com/in/ilmaniyas',
  icon: 'Linkedin',
  href: 'https://linkedin.com/in/ilmaniyas'
},
{
  label: 'GitHub',
  value: 'github.com/ilmaniyas',
  icon: 'Github',
  href: 'https://github.com/ilmaniyas'
},
{
  label: 'Portfolio',
  value: 'portfolio.ilmaniyas.com',
  icon: 'Globe',
  href: '#'
}];