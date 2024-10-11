interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI-driven Security Vulnerability Detection',
    description: `Developed and patented an AI-based method, apparatus, and program for detecting security vulnerabilities in source code. 
    This project significantly reduces manual patching time, improving both response speed and system reliability.  
    `,
    imgSrc: '/static/images/projects/ai-patent-1.png',
    href: 'https://patents.google.com/patent/KR102563812B1/en?oq=KR102563812B1',
  },
  {
    title: 'CodeOne Real-Time Situational Awareness System',
    description: `Developed a real-time situational awareness system integrated with SIEM during my military service in the Republic of Korea Army. 
    The system significantly reduced incident response time and achieved 95% accuracy in detecting threats in over 1 million daily SIEM rule violations.`,
    imgSrc: '/static/images/realtime-system.jpg',
    href: 'https://www.codeone.mil.kr', // (hypothetical link for the military project)
  },
  {
    title: 'WION - Social Network for Religious Discussions',
    description: `Designed and launched WION, a social network enabling users to engage in religious discussions, 
    built with Next.js, MongoDB, and Tailwind CSS. Attracted over 250 active users within the first six months.`,
    imgSrc: '/static/images/wion.png',
    href: 'https://www.wion237.com',
  },
  {
    title: 'AI-based SOC System for Post-COVID Era',
    description: `Contributed to a research project focused on developing an AI-based Security Operations Center (SOC) system to enhance 
    cybersecurity in the post-COVID era. The system integrates AI-driven methods for efficient security incident response.`,
    imgSrc: '/static/images/soc-system.jpg',
    href: '/blog/ai-soc-system', // (hypothetical link to a blog article on the project)
  },
  {
    title: 'Deep Learning-based Automatic Patching System',
    description: `Led the development and deployment of a deep learning model that automatically patches source code vulnerabilities, 
    cutting manual patching time by 70%.`,
    imgSrc: '/static/images/auto-patching.jpg',
    href: '/blog/automatic-patching', // (hypothetical link to a blog article on the project)
  },
  {
    title: 'Function and Parameter Renaming Automation',
    description: `Secured a patent for automating the renaming of functions and parameters in source code. This method provides an efficient tool 
    for maintaining large-scale codebases and improving code clarity and maintainability.  
    `,
    imgSrc: '/static/images/projects/method-patent.png',
    href: 'https://patents.google.com/patent/KR102613915B1/en?oq=KR102613915B1',
  },
]

export default projectsData
