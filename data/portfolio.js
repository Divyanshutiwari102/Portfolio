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
    "I’m a backend-focused full stack developer who builds systems designed to scale, perform, and hold up under real-world conditions. My work centers around production-grade APIs, distributed backend systems, and intelligent pipelines powered by modern AI.
     I’ve recently worked on adaptive RAG systems using pgvector and Resilience4j, deep packet inspection engines in Java, and computer vision–based optimization systems using YOLOv8. I prioritize reliability and correctness — implementing circuit breakers, enforcing ACID guarantees, and designing robust rate-limiting and fault-tolerant architectures.
     Beyond projects, I maintain strong problem-solving skills with 250+ LeetCode problems solved across data structures and algorithms. I’m currently exploring multi-agent systems, scalable backend design, and edge ML deployment."
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
    desc: 'Production-grade RAG pipeline (v4.0) with adaptive query routing across vector search, full-text search, and direct LLM inference. Includes MMR reranking, PostgreSQL Row-Level Security, cost tracking, and full observability.',
    highlights: [
      'MMR reranker (λ=0.7) over 2× candidate pool; pgvector HNSW (m=16, ef=64) for O(log n) ANN lookup + GIN index for FTS',
      'Resilience4j circuit breaker + exponential-backoff retry + Redis cache (1hr TTL); async ingestion via @Async returning HTTP 202',
      'PostgreSQL RLS RESTRICTIVE policies, SHA-256 cache key privacy, Bucket4j rate limiting, 256-bit JWT guard at startup'
    ],
    tech: ['Spring Boot 3.2', 'pgvector', 'Redis', 'OpenAI API', 'Resilience4j', 'Docker', 'Prometheus', 'Jaeger'],
    github: 'https://github.com/Divyanshutiwari102',
    live: null,
    tag: 'AI / Backend'
  },
  {
    name: 'NetWatch — Deep Packet Inspection',
    period: 'Jan 2026 – Feb 2026',
    desc: 'Real-time network traffic analysis engine capturing raw packets and decoding Ethernet → IP → TCP/UDP layers without decrypting any traffic. Live dashboard via WebSocket/STOMP.',
    highlights: [
      'Byte-level TLS ClientHello parser extracting SNI hostnames from raw extension bytes before encryption — enables domain blocking on port-443 traffic',
      'Producer-consumer pipeline with bounded LinkedBlockingQueue (cap 5,000) decoupling capture from N-worker pool; ConcurrentHashMap pre-caching eliminating per-packet parseInt() overhead',
      '5-tuple stateful flow tracker with wildcard domain blocking (*.tiktok.com); live packet events streamed to Next.js dashboard via WebSocket'
    ],
    tech: ['Java', 'Pcap4J', 'libpcap', 'WebSocket/STOMP', 'Next.js', 'ConcurrentHashMap'],
    github: 'https://github.com/Divyanshutiwari102/netwatch-dpi-system',
    live: null,
    tag: 'Systems / Java'
  },
  {
    name: 'AI Traffic Management System',
    period: '2025 – 2026',
    desc: 'Multi-class vehicle detection with YOLOv8 combined with a Webster-constrained Genetic Algorithm for adaptive signal control. Reduces average waiting time by 51% over fixed-time controllers.',
    highlights: [
      'YOLOv8n at 18ms/frame, 91.4% mAP@0.5; class-weighted density scoring using HCM equivalency (bus=2.0, truck=1.5) replaces raw vehicle count',
      'Webster GA (pop=50, gen=60, CR=0.8) converges 25% faster than baseline — plateau at gen ~30 vs ~40; 9.8s fitness gap',
      '51% AWT reduction, 55% shorter queues, Jain Fairness Index 0.91 (near-perfect lane equity) vs 0.64 for fixed-time'
    ],
    tech: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Genetic Algorithm', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Divyanshutiwari102/AI-Based-Traffic-Management',
    live: null,
    tag: 'AI / ML'
  },
  {
    name: 'Nexova — E-Commerce Cart',
    period: '2025',
    desc: 'Full-stack online shopping cart with product catalog, cart management, and order processing. React frontend backed by Spring Boot REST APIs with normalized schema.',
    highlights: [
      'Full product catalog, cart state management, and order workflow with user authentication',
      'RESTful Spring Boot backend with normalized JPA schema and DTO mapping layers',
      'Redux Toolkit for frontend cart state; responsive UI with Bootstrap'
    ],
    tech: ['Spring Boot', 'React.js', 'Redux Toolkit', 'MySQL', 'JPA', 'Bootstrap'],
    github: 'https://github.com/Divyanshutiwari102/Nexova',
    live: null,
    tag: 'Full Stack'
  },
  {
    name: 'Movie Ticket Booking Platform',
    period: 'Nov 2025 – Dec 2025',
    desc: 'Distributed ticket booking with race-condition prevention via Optimistic Locking and ACID transactions. Secures 12+ REST endpoints with Spring Security JWT-based RBAC.',
    highlights: [
      'Eliminated double-booking under concurrent load via Optimistic Locking + ACID-compliant transactions',
      'Secured 12+ endpoints with Spring Security filter chains + granular RBAC',
      'Normalized JPA schema with Lazy Loading eliminating N+1 query issues'
    ],
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'JPA', 'React.js', 'MySQL'],
    github: 'https://github.com/Divyanshutiwari102',
    live: 'https://movie-booking-system-ecl9.vercel.app/',
    tag: 'Full Stack'
  },
  {
    name: 'Coupon Management System',
    period: '2025',
    desc: 'RESTful API determining the best applicable coupon for any cart configuration, with FLAT and PERCENT discount type support. Containerized and deployed on Render.',
    highlights: [
      'In-memory coupon management with ConcurrentHashMap; complex FLAT and PERCENT eligibility rules',
      'Containerized with Docker; deployed on Render with automated build pipeline',
      'Clean Spring Boot 3 architecture with Maven; full Postman collection documented'
    ],
    tech: ['Java 17', 'Spring Boot 3', 'Maven', 'Docker', 'Render'],
    github: 'https://github.com/Divyanshutiwari102/coupon-system',
    live: 'https://coupon-system-divyanshu.onrender.com',
    tag: 'Backend'
  },
  {
    name: 'Connection Bano — Networking Platform',
    period: 'Aug 2025 – Oct 2025',
    desc: 'LinkedIn-like professional networking REST API handling 500+ requests/sec with JPA Specifications, bidirectional mapping, and 85% unit test coverage.',
    highlights: [
      '500+ API requests/sec via JPA Specifications; 30% latency reduction with pagination and DB indexing',
      '85% code coverage with JUnit; normalized bidirectional entity mapping',
      'Paginated feeds, connection request workflow, and profile management'
    ],
    tech: ['Spring Boot', 'JPA', 'JUnit', 'React.js', 'PostgreSQL'],
    github: 'https://github.com/Divyanshutiwari102',
    live: null,
    tag: 'Full Stack'
  }
]

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'IILM University, Greater Noida',
  period: 'Aug 2023 – Aug 2027',
  cgpa: '8.8 / 10.0'
}

export const awards = [
  {
    title: 'Winner — Best Scalable Website Design',
    event: 'Codebyte\'23 Hackathon',
    desc: '1st place among 105 teams for scalable, performant website architecture.'
  },
  {
    title: 'Finalist — Cook the Code',
    event: 'National Hackathon',
    desc: 'Top finalist in a competitive national-level coding hackathon.'
  },
  {
    title: '250+ LeetCode Problems',
    event: 'leetcode.com/u/divyanshutiwari337',
    desc: 'Arrays, trees, graphs, DP, binary search — consistent algorithmic practice alongside engineering work.',
    link: 'https://leetcode.com/u/divyanshutiwari337'
  }
]
