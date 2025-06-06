const projectsContent = {
  title: "My Projects",
  subtitle: "Epic adventures in code!",
  projects: [
    {
      title: "Chattermon",
      subtitle: "Pokémon Battle Simulator with Chat",
      description: "A real-time multiplayer Pokémon battle simulator with integrated chat functionality. Players can battle friends while chatting throughout the experience.",
      challenge: "Creating seamless real-time multiplayer gaming with instant chat synchronization",
      solution: "Implemented WebSocket architecture using Socket.io for real-time communication and PostgreSQL for battle state management",
      outcomes: [
        "500+ active users",
        "99.9% uptime achieved", 
        "Sub-100ms message latency",
        "15+ concurrent battles supported"
      ],
      role: "Full-Stack Developer",
      teamSize: "4 developers",
      timeline: "2 weeks",
      featured: true,
      liveUrl: "https://chattermon-demo.netlify.app",
      githubUrl: "https://github.com/thomasparker/chattermon",
      video: "/assets/chattermon_demo.mp4",
      technologies: [
        { icon: "https://img.shields.io/badge/-61DAFB?style=plastic&logo=react&logoColor=black", label: "React", color: "#61DAFB" },
        { icon: "https://img.shields.io/badge/-339933?style=plastic&logo=nodedotjs&logoColor=white", label: "Node.js", color: "#339933" },
        { icon: "https://img.shields.io/badge/-000000?style=plastic&logo=express&logoColor=white", label: "Express", color: "#000000" },
        { icon: "https://img.shields.io/badge/-010101?style=plastic&logo=socketdotio&logoColor=white", label: "Socket.io", color: "#010101" },
        { icon: "https://img.shields.io/badge/-34E27A?style=plastic&logo=passport&logoColor=black", label: "PassportJS", color: "#34E27A" },
        { icon: "https://img.shields.io/badge/-4169E1?style=plastic&logo=postgresql&logoColor=white", label: "PostgreSQL", color: "#4169E1" },
        { icon: "https://img.shields.io/badge/-52B0E7?style=plastic&logo=sequelize&logoColor=white", label: "Sequelize", color: "#52B0E7" }
      ]
    },
    {
      title: "Marsklif",
      subtitle: "Movie Analysis & Box Office Data",
      description: "Comprehensive movie analysis platform providing box office data, summaries, and social media sentiment for over 18,000 films.",
      challenge: "Processing and presenting massive datasets in an intuitive, fast-loading interface",
      solution: "Built scalable data pipeline with MongoDB aggregation and implemented Redux for efficient state management",
      outcomes: [
        "18,000+ movies indexed",
        "2.5s average load time",
        "Twitter sentiment analysis",
        "Cross-platform aggregation"
      ],
      role: "Lead Frontend Developer",
      teamSize: "4 developers",
      timeline: "2 weeks",
      featured: false,
      liveUrl: "https://marsklif-demo.netlify.app",
      githubUrl: "https://github.com/thomasparker/marsklif",
      video: "/assets/marsklif_demo.mp4",
      technologies: [
        { icon: "https://img.shields.io/badge/-61DAFB?style=plastic&logo=react&logoColor=black", label: "React", color: "#61DAFB" },
        { icon: "https://img.shields.io/badge/-764ABC?style=plastic&logo=redux&logoColor=white", label: "Redux", color: "#764ABC" },
        { icon: "https://img.shields.io/badge/-CA4245?style=plastic&logo=reactrouter&logoColor=white", label: "React Router", color: "#CA4245" },
        { icon: "https://img.shields.io/badge/-339933?style=plastic&logo=nodedotjs&logoColor=white", label: "Node.js", color: "#339933" },
        { icon: "https://img.shields.io/badge/-000000?style=plastic&logo=express&logoColor=white", label: "Express", color: "#000000" },
        { icon: "https://img.shields.io/badge/-47A248?style=plastic&logo=mongodb&logoColor=white", label: "MongoDB", color: "#47A248" }
      ]
    },
    {
      title: "NameIn",
      subtitle: "Name Origin Analyzer",
      description: "Name analysis tool that determines ethnic origins with geographical insights and cultural context via integrated mapping using Census Bureau data.",
      challenge: "Accurately analyzing name origins while providing meaningful cultural context and fast results",
      solution: "Integrated Census Bureau API with Google Maps API and implemented intelligent caching system",
      outcomes: [
        "95% accuracy rate",
        "200ms average response",
        "Cultural insights included",
        "Global mapping integration"
      ],
      role: "Full-Stack Developer",
      teamSize: "Solo Project", 
      timeline: "1 week",
      featured: false,
      liveUrl: "https://namein-demo.netlify.app",
      githubUrl: "https://github.com/thomasparker/namein",
      video: "/assets/namein_demo.mp4",
      technologies: [
        { icon: "https://img.shields.io/badge/-61DAFB?style=plastic&logo=react&logoColor=black", label: "React", color: "#61DAFB" },
        { icon: "https://img.shields.io/badge/-7952B3?style=plastic&logo=bootstrap&logoColor=white", label: "Bootstrap", color: "#7952B3" },
        { icon: "https://img.shields.io/badge/-339933?style=plastic&logo=nodedotjs&logoColor=white", label: "Node.js", color: "#339933" },
        { icon: "https://img.shields.io/badge/-4479A1?style=plastic&logo=mysql&logoColor=white", label: "MySQL", color: "#4479A1" },
        { icon: "https://img.shields.io/badge/-4285F4?style=plastic&logo=googlemaps&logoColor=white", label: "Google Maps", color: "#4285F4" }
      ]
    }
  ]
};

export default projectsContent; 