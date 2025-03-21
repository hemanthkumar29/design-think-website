
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Team {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  progress: number;
  leader: TeamMember;
  members: TeamMember[];
  projectImages: string[];
}

// For now, we'll use placeholder data
export const teamsData: Team[] = [
  {
    id: 1,
    name: "Eco Power Solutions",
    description: "Sustainable energy management system for residential use",
    longDescription: "Eco Power Solutions is developing an innovative energy management system that optimizes household electricity usage by integrating with renewable energy sources. The system uses AI algorithms to predict energy consumption patterns and automatically adjusts power distribution to maximize efficiency and reduce carbon footprint. The project focuses on making sustainable energy solutions accessible to average households at an affordable price point.",
    progress: 85,
    leader: {
      id: 1,
      name: "Alex Johnson",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 2,
        name: "Sarah Williams",
        role: "Hardware Engineer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 3,
        name: "Michael Chen",
        role: "Software Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 4,
        name: "Emily Davis",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1548533701-a0afe9c598f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
    ]
  },
  {
    id: 2,
    name: "Smart Health Monitor",
    description: "Wearable device for continuous health tracking",
    longDescription: "The Smart Health Monitor is a revolutionary wearable device that provides continuous health tracking with medical-grade accuracy. Unlike conventional fitness trackers, our device monitors vital health parameters including heart rate variability, blood oxygen levels, and stress indicators to provide a comprehensive health assessment. The team is focused on developing algorithms that can detect early warning signs of potential health issues and provide actionable recommendations.",
    progress: 72,
    leader: {
      id: 5,
      name: "David Kim",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 6,
        name: "Jessica Patel",
        role: "Biomedical Engineer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
      },
      {
        id: 7,
        name: "Ryan Nguyen",
        role: "Electronics Specialist",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      "https://images.unsplash.com/photo-1559447618-6c254f27ed9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    ]
  },
  {
    id: 3,
    name: "AutoNav Robotics",
    description: "Autonomous navigation system for indoor robots",
    longDescription: "AutoNav Robotics is developing a groundbreaking autonomous navigation system for indoor robots that doesn't rely on GPS signals. Using a combination of computer vision, LiDAR, and proprietary SLAM (Simultaneous Localization and Mapping) algorithms, our robots can navigate complex indoor environments with centimeter-level precision. Applications include warehouse logistics, hospital supply delivery, and security surveillance in commercial buildings.",
    progress: 60,
    leader: {
      id: 8,
      name: "Olivia Martinez",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    members: [
      {
        id: 9,
        name: "James Wilson",
        role: "Robotics Engineer",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
      },
      {
        id: 10,
        name: "Sophia Lee",
        role: "Computer Vision Specialist",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1597662942557-4087855bfcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  // Teams 4-17 follow the same pattern, adding placeholder teams to reach 17 total
  {
    id: 4,
    name: "AudioSpace",
    description: "Next-generation spatial audio technology",
    longDescription: "AudioSpace is revolutionizing the way we experience sound through innovative spatial audio technology. Our system creates immersive 3D soundscapes that can be customized for various environments without requiring specialized headphones or equipment. The technology has applications in virtual reality, home entertainment systems, and public spaces where directional sound can enhance user experience while reducing overall noise pollution.",
    progress: 45,
    leader: {
      id: 11,
      name: "Daniel Brown",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
    },
    members: [
      {
        id: 12,
        name: "Natalie Garcia",
        role: "Audio Engineer",
        image: "https://images.unsplash.com/photo-1535468157133-d9e318bd1d2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
      },
      {
        id: 13,
        name: "Kevin Taylor",
        role: "DSP Programmer",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      "https://images.unsplash.com/photo-1601436575544-58d1011d0023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 5,
    name: "AgroSense",
    description: "Precision agriculture through IoT sensors",
    longDescription: "AgroSense is transforming traditional farming practices through an interconnected network of IoT sensors that provide real-time data about soil conditions, crop health, and environmental factors. Our system enables farmers to make data-driven decisions about irrigation, fertilization, and pest control, leading to increased yields while reducing water and chemical usage. The technology is designed to be affordable and accessible for farms of all sizes, with a particular focus on helping small-scale farmers in developing regions.",
    progress: 65,
    leader: {
      id: 14,
      name: "Emma Rodriguez",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 15,
        name: "Luis Hernandez",
        role: "IoT Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      },
      {
        id: 16,
        name: "Aisha Patel",
        role: "Agricultural Engineer",
        image: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  // Teams 6-17, continue with similar pattern but different focus areas
  {
    id: 6,
    name: "NeuroLearn",
    description: "AI-enhanced adaptive learning platform",
    longDescription: "NeuroLearn is pioneering an adaptive learning platform that uses AI to personalize educational content based on each student's learning style, pace, and preferences. Our system continuously analyzes student performance and engagement to dynamically adjust content difficulty and presentation methods. This project aims to make quality education more accessible and effective by addressing the individual needs of learners, particularly benefiting students with different learning styles or those who struggle in traditional classroom settings.",
    progress: 55,
    leader: {
      id: 17,
      name: "Thomas White",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
    },
    members: [
      {
        id: 18,
        name: "Grace Liu",
        role: "AI Researcher",
        image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
      },
      {
        id: 19,
        name: "Marcus Johnson",
        role: "Educational Technology Specialist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 7,
    name: "WasteZero",
    description: "Smart waste management solutions",
    longDescription: "WasteZero is developing an integrated waste management system that combines IoT-enabled smart bins with an efficient collection network and recycling analytics platform. Our smart bins use sensors to monitor fill levels and waste composition, optimizing collection routes and schedules. The analytics platform provides insights into waste patterns, helping communities and businesses implement effective recycling programs and reduce landfill waste. This holistic approach aims to transform waste management from a linear process to a circular economy model.",
    progress: 80,
    leader: {
      id: 20,
      name: "Sophia Clark",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    members: [
      {
        id: 21,
        name: "Noah Robinson",
        role: "Environmental Engineer",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 22,
        name: "Isabella Nguyen",
        role: "Data Scientist",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  // Add remaining teams with placeholder data
  {
    id: 8,
    name: "CyberShield",
    description: "Advanced cybersecurity for IoT networks",
    longDescription: "CyberShield is creating a comprehensive security solution for IoT networks that protects against emerging threats without compromising device performance. Our approach combines lightweight encryption algorithms, behavioral anomaly detection, and a distributed security architecture that can scale from small home networks to large industrial installations. As IoT devices become increasingly integrated into critical infrastructure, CyberShield aims to establish new standards for secure connectivity while maintaining the ease of use that consumers expect.",
    progress: 62,
    leader: {
      id: 23,
      name: "Ethan Morris",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 24,
        name: "Maya Patel",
        role: "Security Architect",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
      },
      {
        id: 25,
        name: "Jordan Lee",
        role: "Embedded Systems Developer",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 9,
    name: "MediSync",
    description: "Integrated healthcare monitoring platform",
    longDescription: "MediSync is building a comprehensive healthcare monitoring platform that connects patients, healthcare providers, and medical devices through a secure, unified interface. The system allows for remote monitoring of chronic conditions, automated medication management, and early detection of health deterioration through trend analysis. By centralizing patient data while maintaining strict privacy controls, MediSync improves care coordination and empowers patients to take a more active role in managing their health conditions.",
    progress: 48,
    leader: {
      id: 26,
      name: "Rebecca Singh",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    members: [
      {
        id: 27,
        name: "Caleb Williams",
        role: "Medical Informatics Specialist",
        image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
      },
      {
        id: 28,
        name: "Hannah Kim",
        role: "Healthcare UI/UX Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1581056771107-24247a734e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  // Continue with teams 10-17...
  {
    id: 10,
    name: "TrafficSense",
    description: "Smart traffic management system",
    longDescription: "TrafficSense is developing an intelligent traffic management system that reduces congestion and improves safety in urban environments. Using a network of sensors, cameras, and edge computing devices, our system can detect traffic patterns, predict congestion points, and dynamically adjust traffic signal timing to optimize flow. The project also incorporates pedestrian and cyclist detection for improved safety at intersections, and integrates with navigation apps to provide drivers with real-time routing recommendations.",
    progress: 70,
    leader: {
      id: 29,
      name: "Andrew Thomas",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 30,
        name: "Olivia Parker",
        role: "Urban Planning Specialist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
      },
      {
        id: 31,
        name: "Victor Mendez",
        role: "Computer Vision Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1573075175660-08fd45ac27a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  // Add more teams to reach 17 total with similar structure but different details
  {
    id: 11,
    name: "AquaPure",
    description: "Advanced water purification technology",
    longDescription: "AquaPure is creating a revolutionary water purification system that combines advanced filtration technology with real-time monitoring capabilities. Our solution addresses both industrial and household water treatment needs, with a special focus on removing emerging contaminants that conventional systems miss. The modular design allows for customization based on local water quality issues, while the integrated sensor network continuously monitors water quality parameters to ensure safety and optimize filter replacement scheduling.",
    progress: 35,
    leader: {
      id: 32,
      name: "Lily Zhang",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
    },
    members: [
      {
        id: 33,
        name: "Samuel Jackson",
        role: "Water Treatment Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      },
      {
        id: 34,
        name: "Zoe Wilson",
        role: "Chemical Engineer",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 12,
    name: "SolarFlex",
    description: "Flexible solar panels for diverse applications",
    longDescription: "SolarFlex is developing highly efficient, flexible solar panels that can be integrated into a wide range of surfaces and applications. Unlike conventional rigid panels, our technology can conform to curved surfaces, be incorporated into clothing, or applied to vehicle exteriors. The project focuses on improving the durability and efficiency of flexible photovoltaic materials while developing novel manufacturing techniques to reduce production costs. This versatile approach to solar energy aims to expand renewable energy adoption beyond traditional rooftop and ground-mounted installations.",
    progress: 55,
    leader: {
      id: 35,
      name: "Rohan Patel",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 36,
        name: "Madison Chen",
        role: "Material Scientist",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      },
      {
        id: 37,
        name: "Ethan Baker",
        role: "Renewable Energy Engineer",
        image: "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
    ]
  },
  {
    id: 13,
    name: "BioFabric",
    description: "Sustainable textiles with integrated tech",
    longDescription: "BioFabric is pioneering a new generation of sustainable textiles that combine biodegradable materials with integrated technology for enhanced functionality. Our fabrics are produced using environmentally friendly processes and incorporate features like moisture management, temperature regulation, and antimicrobial properties. We're also developing specialized variations with embedded sensors for healthcare monitoring applications, while maintaining comfort, durability, and end-of-life biodegradability. This project represents a significant step toward reducing the environmental impact of the textile industry.",
    progress: 40,
    leader: {
      id: 38,
      name: "Caroline Hughes",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    members: [
      {
        id: 39,
        name: "Jason Morris",
        role: "Textile Engineer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 40,
        name: "Priya Sharma",
        role: "Biochemist",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1551091016-1cdefa81989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
    ]
  },
  {
    id: 14,
    name: "UrbanFarm",
    description: "Vertical farming solutions for urban areas",
    longDescription: "UrbanFarm is developing compact, efficient vertical farming systems specifically designed for urban environments. Our modular hydroponic units can be installed in various spaces from residential buildings to unused urban lots, enabling local food production with minimal water and energy usage. The system incorporates automated climate control, nutrient delivery, and lighting to optimize plant growth while requiring minimal maintenance. This project addresses challenges in urban food security, reduces the carbon footprint of food transportation, and creates green spaces in densely populated areas.",
    progress: 75,
    leader: {
      id: 41,
      name: "Nathan Green",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 42,
        name: "Linda Torres",
        role: "Agricultural Technologist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
      },
      {
        id: 43,
        name: "Derek Zhang",
        role: "Automation Engineer",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1585833450545-04df2d2c6014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1571913196747-5023e8dbd01c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 15,
    name: "QuantumCompute",
    description: "Practical quantum computing algorithms",
    longDescription: "QuantumCompute is researching and developing practical quantum computing algorithms that can be implemented on existing quantum hardware platforms. Our team is creating software solutions that bridge the gap between theoretical quantum advantages and real-world applications in fields like materials science, pharmaceutical research, and financial modeling. We're particularly focused on error mitigation techniques that allow meaningful computation despite the limitations of current quantum processors, and on identifying specific computational problems where even imperfect quantum systems can outperform classical computers.",
    progress: 30,
    leader: {
      id: 44,
      name: "Alan Reeves",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    members: [
      {
        id: 45,
        name: "Sophia Williams",
        role: "Quantum Algorithm Developer",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      },
      {
        id: 46,
        name: "Robert Chen",
        role: "Theoretical Physicist",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
    ]
  },
  {
    id: 16,
    name: "NeuroProsthetics",
    description: "Advanced neural interface for prosthetics",
    longDescription: "NeuroProsthetics is developing a breakthrough neural interface system that creates more intuitive control of prosthetic limbs. Our technology combines non-invasive neural sensing with advanced signal processing algorithms to interpret intended movements with greater accuracy and lower latency than existing solutions. The system also provides sensory feedback to users, creating a two-way communication channel that significantly improves prosthetic functionality and user experience. This project aims to transform prosthetic technology from basic mobility aids to truly integrated body extensions.",
    progress: 42,
    leader: {
      id: 47,
      name: "Eliza Montgomery",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    members: [
      {
        id: 48,
        name: "Maxwell Powell",
        role: "Neural Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      },
      {
        id: 49,
        name: "Jasmine Washington",
        role: "Biomedical Engineer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
    ]
  },
  {
    id: 17,
    name: "CloudCast",
    description: "Hyperlocal weather prediction system",
    longDescription: "CloudCast is creating a hyperlocal weather prediction system that provides precise forecasts for small geographic areas. By combining data from distributed weather sensors, satellite imagery, and machine learning algorithms, our system can predict microclimate variations that traditional forecasting methods miss. The technology is particularly valuable for agriculture, outdoor event planning, and emergency management during severe weather events. We're also developing specialized applications for renewable energy production forecasting to help optimize solar and wind farm operations.",
    progress: 65,
    leader: {
      id: 50,
      name: "Marcus Rivera",
      role: "Team Leader",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    members: [
      {
        id: 51,
        name: "Leila Smith",
        role: "Meteorologist",
        image: "https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
      },
      {
        id: 52,
        name: "Tyler Mitchell",
        role: "Machine Learning Engineer",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  }
];

// Information about the department mentor
export const mentorData = {
  name: "Dr. Elena Rodriguez",
  title: "Department Head, Design Thinking & Innovation",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
  bio: "Dr. Elena Rodriguez is a pioneer in integrating design thinking methodologies into engineering education. With over 15 years of experience in both industry and academia, she leads the Design Thinking & Innovation department with a passion for nurturing creative problem-solving skills in the next generation of engineers. Dr. Rodriguez has published extensively on innovation pedagogy and holds several patents in sustainable technology solutions."
};
