export const personal = {
  name: 'Divyanshu Tiwari',
  title: 'Full Stack Java Developer',
  location: 'Greater Noida, UP',
  email: 'divyanshutiwari337@gmail.com',
  phone: '+91-8103361906',
  github: 'https://github.com/Divyanshutiwari102',
  linkedin: 'https://www.linkedin.com/in/divyanshu-tiwari-42b156289/',
  leetcode: 'https://leetcode.com/u/divyanshutiwari337',
  about: [
    "I’m a backend-focused full stack developer who builds systems designed to scale, perform, and hold up under real-world conditions. My work centers around production-grade APIs, distributed backend systems, and intelligent pipelines powered by modern AI.",

    "I’ve recently worked on adaptive RAG systems using pgvector and Resilience4j, deep packet inspection engines in Java, and computer vision–based optimization systems using YOLOv8. I prioritize reliability and correctness — implementing circuit breakers, enforcing ACID guarantees, and designing robust rate-limiting and fault-tolerant architectures.",

    "Beyond projects, I maintain strong problem-solving skills with 250+ LeetCode problems solved across data structures and algorithms. I’m currently exploring multi-agent systems, scalable backend design, and edge ML deployment."
  ]
}

export const skills = [
  {
    category: 'Backend',
    items: ['Java 17', 'Spring Boot 3', 'Microservices', 'Spring Security', 'Hibernate/JPA', 'RESTful APIs', 'WebSocket', 'Multithreading']
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Axios', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Data & AI',
    items: ['PostgreSQL', 'pgvector', 'MySQL', 'Redis', 'RAG Pipelines', 'OpenAI API', 'YOLOv8', 'PyTorch']
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'AWS EC2/S3', 'Prometheus', 'Grafana', 'Jaeger', 'Git', 'Maven', 'Linux']
  }
]

export const experience = [
  {
    company: 'Bluestock Fintech',
    role: 'Software Developer Intern',
    period: 'May 2025 – Jul 2025',
    points: [
      'Built 10+ production-grade RESTful APIs in Spring Boot, cutting data processing latency for enterprise clients',
      'Reduced onboarding friction by 25% via JWT-based auth with Role-Based Access Control across all API surfaces',
      'Accelerated frontend velocity by 40% building a reusable library of 15+ React components',
      'Shipped 100% on-time across all Agile sprints coordinated through JIRA'
    ]
  },
  {
    company: 'CodeForSuccess',
    role: 'Software Engineer Intern',
    period: 'Feb 2025 – May 2025',
    points: [
      'Designed and deployed modular Java microservices on AWS EC2 with horizontal scalability under production traffic',
      'Improved system reliability by 30% via centralized global exception handling and input validation across all REST endpoints',
      'Optimized MySQL schemas with indexing strategies; automated Docker build pipelines to eliminate environment drift'
    ]
  }
]

export const projects = [
  {
    name: 'Adaptive RAG System',
    period: 'Mar 2026 – Apr 2026',
    desc: 'Production-grade RAG pipeline with adaptive query routing and full observability.',
    highlights: [
      'MMR reranking + pgvector ANN + full-text search',
      'Circuit breaker, retry logic, Redis caching',
      'PostgreSQL RLS, rate limiting, JWT security'
    ],
    tech: ['Spring Boot', 'pgvector', 'Redis', 'OpenAI API', 'Docker'],
    github: 'https://github.com/Divyanshutiwari102',
    live: null,
    tag: 'AI / Backend'
  },
  {
    name: 'NetWatch — Deep Packet Inspection',
    period: '2026',
    desc: 'Real-time packet inspection engine with live dashboard.',
    highlights: [
      'TLS SNI parsing without decryption',
      'Concurrent packet processing pipeline',
      'Live WebSocket dashboard'
    ],
    tech: ['Java', 'Pcap4J', 'Next.js'],
    github: 'https://github.com/Divyanshutiwari102/netwatch-dpi-system',
    live: null,
    tag: 'Systems'
  }
]

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'IILM University',
  period: '2023 – 2027',
  cgpa: '8.8'
}

export const awards = [
  {
    title: 'Hackathon Winner',
    event: 'Codebyte Hackathon',
    desc: '1st place for scalable system design'
  },
  {
    title: '250+ LeetCode Problems',
    event: 'DSA Practice',
    desc: 'Strong foundation in algorithms and problem solving',
    link: 'https://leetcode.com/u/divyanshutiwari337'
  }
]
