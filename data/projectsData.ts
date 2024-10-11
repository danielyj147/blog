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
    title: 'AI-based SOC System for Post-COVID Era',
    description: `Contributed to a research project focused on developing an AI-based Security Operations Center (SOC) system to enhance 
    cybersecurity in the post-COVID era. The system integrates AI-driven methods for efficient security incident response.`,
    imgSrc: '/static/images/projects/post-covid-soc.png',
    href: 'https://www.ntis.go.kr/ThSearchProjectList.do?searchCategory=project&encodingSearchWord=%25EC%25BD%2594%25EB%2593%259C%25EC%259B%2590&oldSearchWord=코드원&encodingOldSearchWord=%25EC%25BD%2594%25EB%2593%259C%25EC%259B%2590&resultSearchValue=&fileSearchYn=&sort=SS01%2FDESC%2CRANK%2FDESC&ntisYn=&dbt=project&init=&cordisKakenYn=&is01=&originalSearchWord=코드원&originalSearchGubun=&technologyClassification=&directorySearchYear=&directorySearchOption1=&directorySearchOption2=&directorySearchOption3=&searchWord=%22포스트+코로나+시대의+보안환경개선을+위한+인공지능형+SOC+시스템+개발%22',
  },
  {
    title: 'CodeOne Real-Time Situational Awareness System',
    description: `Developed a real-time situational awareness system integrated with SIEM during my military service in the Republic of Korea Army. 
    The system significantly reduced incident response time and achieved 95% accuracy in detecting threats in over 1 million daily SIEM rule violations.`,
    imgSrc: '/static/images/projects/sentinelle.png',
    href: '#', // (hypothetical link for the military project)
  },
  {
    title: 'WION - Social Network for Religious Discussions',
    description: `Designed and launched WION, a social network enabling users to engage in religious discussions, 
    built with Next.js, MongoDB, and Tailwind CSS. Attracted over 250 active users within the first six months.`,
    imgSrc: '/static/images/wion.png',
    href: 'https://www.wion237.com',
  },
  {
    title: 'Deep Learning-based Automatic Patching System',
    description: `Developed a deep learning model and user-AI hybrid process for automated vulnerability detection and patch suggestion in source code,
    cutting manual patching time by 70%. `,
    imgSrc: '/static/images/projects/deeplearning.png',
    href: 'https://www.ntis.go.kr/ThSearchTotalList.do?searchCategory=total&encodingSearchWord=%25EC%25BD%2594%25EB%2593%259C%25EC%259B%2590&oldSearchWord=코드원&encodingOldSearchWord=%25EC%25BD%2594%25EB%2593%259C%25EC%259B%2590&resultSearchValue=&fileSearchYn=&sort=RANK%2FDESC&ntisYn=&dbt=&init=&cordisKakenYn=&is01=&originalSearchWord=코드원&originalSearchGubun=&technologyClassification=&directorySearchYear=&directorySearchOption1=&directorySearchOption2=&directorySearchOption3=&searchWord=%22Deep+Learning+기반+소스코드+취약점+자동+패치+기술%22',
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
