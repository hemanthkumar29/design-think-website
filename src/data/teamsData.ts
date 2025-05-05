export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  rating?: number;
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

// Team data updated with classmate names and roll numbers
export const teamsData: Team[] = [
  {
    id: 1,
    name: "Team 01",
    description: "Solar Power Bank",
    longDescription: "Eco Power Solutions is developing an innovative energy management system that optimizes household electricity usage by integrating with renewable energy sources. The system uses AI algorithms to predict energy consumption patterns and automatically adjusts power distribution to maximize efficiency and reduce carbon footprint. The project focuses on making sustainable energy solutions accessible to average households at an affordable price point.",
    progress: 85,
    leader: {
      id: 1,
      name: "A Divya Sri",
      role: "23KD1A0201",
      image: "/team_images/23KD1A0201.jpg"
    },
    members: [
      {
        id: 2,
        name: "A Rahul",
        role: "23KD1A0204",
        image: "/team_images/23KD1A0204.jpg"
      },
      {
        id: 3,
        name: "A Harshini",
        role: "23KD1A0202",
        image: "/team_images/23KD1A0202.jpg"
      },
      {
        id: 4,
        name: "Ch Sidhu",
        role: "23KD1A0223",
        image: "/team_images/23KD1A0223.jpg"
      },
      {
        id: 53,
        name: "B Veerendra Hanshith",
        role: "24KD5A0203",
        image: "/team_images/24KD5A0203.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1548533701-a0afe9c598f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
    ]
  },
  {
    id: 2,
    name: "Team 02",
    description: "Smart Doorbell",
    longDescription: "Smart Doorbell with Visitor Notifications is an innovative IoT-based security solution that enhances home safety and convenience. It features a smart doorbell equipped with a camera,and real-time notification capabilities. When a visitor arrives, the system captures their presence and instantly sends alerts to the homeowner’s smartphone. It also integrates AI for facial recognition and cloud storage for visitor logs. With remote access and smart integration, this solution ensures better security and seamless communication. Designed for modern homes, it offers a smarter way to monitor and manage visitors efficiently.",
    progress: 72,
    leader: {
      id: 5,
      name: "B Sai Samanvitha",
      role: "23KD1A0214",
      image: "/team_images/23KD1A0214.jpg"
    },
    members: [
      {
        id: 6,
        name: "B Likitha",
        role: "23KD1A0206",
        image: "/team_images/23KD1A0206.jpg"
      },
      {
        id: 7,
        name: "G Sai",
        role: "23KD1A0243",
        image: "/team_images/23KD1A0243.jpg"
      },
      {
        id: 54,
        name: "Ch Mohan Sampath",
        role: "23KD1A0226",
        image: "/team_images/23KD1A0226.jpg"
      },
      {
        id: 55,
        name: "Ch Chaitanya",
        role: "23KD1A0228",
        image: "/team_images/23KD1A0228.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      "https://images.unsplash.com/photo-1559447618-6c254f27ed9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    ]
  },
  {
    id: 3,
    name: "Team 03",
    description: "Smart Water Leakage Detector Using IOT",
    longDescription: "AutoNav Robotics is developing a groundbreaking autonomous navigation system for indoor robots that doesn't rely on GPS signals. Using a combination of computer vision, LiDAR, and proprietary SLAM (Simultaneous Localization and Mapping) algorithms, our robots can navigate complex indoor environments with centimeter-level precision. Applications include warehouse logistics, hospital supply delivery, and security surveillance in commercial buildings.",
    progress: 60,
    leader: {
      id: 8,
      name: "G Hyma",
      role: "23KD1A0234",
      image: "/team_images/23KD1A0234.jpg"
    },
    members: [
      {
        id: 9,
        name: "M Kavya Sri",
        role: "23KD1A0261",
        image: "/team_images/23KD1A0261.jpg"
      },
      {
        id: 10,
        name: "Ch Praveen Kumar",
        role: "23KD1A0227",
        image: "/team_images/23KD1A0227.jpg"
      },
      {
        id: 56,
        name: "K Rohith",
        role: "24KD5A0208",
        image: "/team_images/24KD5A0208.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1485827404606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1597662942557-4087855bfcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 4,
    name: "Team 04",
    description: "Train Accident Prevention",
    longDescription: "AudioSpace is revolutionizing the way we experience sound through innovative spatial audio technology. Our system creates immersive 3D soundscapes that can be customized for various environments without requiring specialized headphones or equipment. The technology has applications in virtual reality, home entertainment systems, and public spaces where directional sound can enhance user experience while reducing overall noise pollution.",
    progress: 45,
    leader: {
      id: 11,
      name: "K Ramya",
      role: "23KD1A0253",
      image: "/team_images/23KD1A0253.jpg"
    },
    members: [
      {
        id: 12,
        name: "D Koti",
        role: "23KD1A0255",
        image: "/team_images/23KD1A0255.jpg"
      },
      {
        id: 13,
        name: "B Chaitanya",
        role: "23KD1A0213",
        image: "/team_images/23KD1A0213.jpg"
      },
      {
        id: 57,
        name: "A Vaikunta Rao",
        role: "24KD5A0201",
        image: "/team_images/24KD5A0201.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      "https://images.unsplash.com/photo-1601436575544-58d1011d0023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 5,
    name: "Team 05",
    description: "Smart Dustbin Using Bluetooth Module",
    longDescription: "AgroSense is transforming traditional farming practices through an interconnected network of IoT sensors that provide real-time data about soil conditions, crop health, and environmental factors. Our system enables farmers to make data-driven decisions about irrigation, fertilization, and pest control, leading to increased yields while reducing water and chemical usage. The technology is designed to be affordable and accessible for farms of all sizes, with a particular focus on helping small-scale farmers in developing regions.",
    progress: 65,
    leader: {
      id: 14,
      name: "G Pavani",
      role: "23KD1A0238",
      image: "/team_images/23KD1A0238.jpg"
    },
    members: [
      {
        id: 15,
        name: "K Sandhya Devi",
        role: "23KD1A0250",
        image: "/team_images/23KD1A0250.jpg"
      },
      {
        id: 16,
        name: "B Vyshnavi",
        role: "23KD1A0216",
        image: "/team_images/23KD1A0216.jpg"
      },
      {
        id: 58,
        name: "B Rajesh",
        role: "23KD1A0217",
        image: "/team_images/23KD1A0217.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 6,
    name: "Team 06",
    description: "Transmission Line Fault Detection",
    longDescription: "NeuroLearn is pioneering an adaptive learning platform that uses AI to personalize educational content based on each student's learning style, pace, and preferences. Our system continuously analyzes student performance and engagement to dynamically adjust content difficulty and presentation methods. This project aims to make quality education more accessible and effective by addressing the individual needs of learners, particularly benefiting students with different learning styles or those who struggle in traditional classroom settings.",
    progress: 55,
    leader: {
      id: 17,
      name: "J Gayatri",
      role: "23KD1A0246",
      image: "/team_images/23KD1A0246.jpg"
    },
    members: [
      {
        id: 18,
        name: "Ch Prasanna",
        role: "23KD1A0218",
        image: "/team_images/23KD1A0218.jpg"
      },
      {
        id: 19,
        name: "B Ramu",
        role: "23KD1A0215",
        image: "/team_images/23KD1A0215.jpg"
      },
      {
        id: 59,
        name: "G Hareesh",
        role: "24KD5A0207",
        image: "/team_images/24KD5A0207.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 7,
    name: "Team 07",
    description: "Automatic Plant Watering System Using Solar Panel",
    longDescription: "WasteZero is developing an integrated waste management system that combines IoT-enabled smart bins with an efficient collection network and recycling analytics platform. Our smart bins use sensors to monitor fill levels and waste composition, optimizing collection routes and schedules. The analytics platform provides insights into waste patterns, helping communities and businesses implement effective recycling programs and reduce landfill waste. This holistic approach aims to transform waste management from a linear process to a circular economy model.",
    progress: 80,
    leader: {
      id: 20,
      name: "G Anjali",
      role: "23KD1A0233",
      image: "/team_images/23KD1A0233.jpg"
    },
    members: [
      {
        id: 21,
        name: "K Lathika",
        role: "23KD1A0249",
        image: "/team_images/23KD1A0249.jpg"
      },
      {
        id: 22,
        name: "B Ganesh",
        role: "23KD1A0210",
        image: "/team_images/23KD1A0210.jpg"
      },
      {
        id: 60,
        name: "L Tripathi Naidu",
        role: "23KD1A0258",
        image: "/team_images/23KD1A0258.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 8,
    name: "Team 08",
    description: "Road Accident Prevention in Hilly Areas",
    longDescription: "CyberShield is creating a comprehensive security solution for IoT networks that protects against emerging threats without compromising device performance. Our approach combines lightweight encryption algorithms, behavioral anomaly detection, and a distributed security architecture that can scale from small home networks to large industrial installations. As IoT devices become increasingly integrated into critical infrastructure, CyberShield aims to establish new standards for secure connectivity while maintaining the ease of use that consumers expect.",
    progress: 30,
    leader: {
      id: 23,
      name: "Ch Hemalatha",
      role: "23KD1A0224",
      image: "/team_images/23KD1A0224.jpg"
    },
    members: [
      {
        id: 24,
        name: "Ch Poornima",
        role: "23KD1A0235",
        image: "/team_images/23KD1A0235.jpg"
      },
      {
        id: 25,
        name: "B Venu",
        role: "23KD1A0209",
        image: "/team_images/23KD1A0209.jpg"
      },
      {
        id: 61,
        name: "Ch Prasad",
        role: "23KD1A0221",
        image: "/team_images/23KD1A0221.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 9,
    name: "Team 09",
    description: "Home Automation",
    longDescription: "MediSync is building a comprehensive healthcare monitoring platform that connects patients, healthcare providers, and medical devices through a secure, unified interface. The system allows for remote monitoring of chronic conditions, automated medication management, and early detection of health deterioration through trend analysis. By centralizing patient data while maintaining strict privacy controls, MediSync improves care coordination and empowers patients to take a more active role in managing their health conditions.",
    progress: 48,
    leader: {
      id: 26,
      name: "K Vasavi",
      role: "23KD1A0251",
      image: "/team_images/23KD1A0251.jpg"
    },
    members: [
      {
        id: 27,
        name: "G Bhanu Prasad",
        role: "23KD1A0241",
        image: "/team_images/23KD1A0241.jpg"
      },
      {
        id: 28,
        name: "B Sivamani",
        role: "24KD5A0205",
        image: "/team_images/24KD5A0205.jpg"
      },
      {
        id: 62,
        name: "K Harsha Vardhini",
        role: "23KD1A0252",
        image: "/team_images/23KD1A0252.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1581056771107-24247a734e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 10,
    name: "Team 10",
    description: "IOT Based Battery Monitoring System",
    longDescription: "TrafficSense is developing an intelligent traffic management system that reduces congestion and improves safety in urban environments. Using a network of sensors, cameras, and edge computing devices, our system can detect traffic patterns, predict congestion points, and dynamically adjust traffic signal timing to optimize flow. The project also incorporates pedestrian and cyclist detection for improved safety at intersections, and integrates with navigation apps to provide drivers with real-time routing recommendations.",
    progress: 70,
    leader: {
      id: 29,
      name: "Ch Pujitha",
      role: "23KD1A0222",
      image: "/team_images/23KD1A0222.jpg"
    },
    members: [
      {
        id: 30,
        name: "A Maharshi",
        role: "23KD1A0203",
        image: "/team_images/23KD1A0203.jpg"
      },
      {
        id: 31,
        name: "M Kali",
        role: "23KD1A0263",
        image: "/team_images/23KD1A0263.jpg"
      },
      {
        id: 63,
        name: "D Teja Krishna",
        role: "23KD1A0229",
        image: "/team_images/23KD1A0229.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1573075175660-08fd45ac27a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 11,
    name: "Team 11",
    description: "Alcohol Detector and Engine Locking System",
    longDescription: "AquaPure is creating a revolutionary water purification system that combines advanced filtration technology with real-time monitoring capabilities. Our solution addresses both industrial and household water treatment needs, with a special focus on removing emerging contaminants that conventional systems miss. The modular design allows for customization based on local water quality issues, while the integrated sensor network continuously monitors water quality parameters to ensure safety and optimize filter replacement scheduling.",
    progress: 35,
    leader: {
      id: 32,
      name: "A Rupa Rani",
      role: "24KD5A0202",
      image: "/team_images/24KD5A0202.jpg"
    },
    members: [
      {
        id: 33,
        name: "D Lasya",
        role: "23KD1A0230",
        image: "/team_images/23KD1A0230.jpg"
      },
      {
        id: 34,
        name: "M Prabhu Kumar",
        role: "23KD1A0262",
        image: "/team_images/23KD1A0262.jpg"
      },
      {
        id: 64,
        name: "K Venkata Lakshmi",
        role: "23KD1A0247",
        image: "/team_images/23KD1A0247.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    id: 12,
    name: "Team 12",
    description: "Smart Energy Meter",
    longDescription: "SolarFlex is developing highly efficient, flexible solar panels that can be integrated into a wide range of surfaces and applications. Unlike conventional rigid panels, our technology can conform to curved surfaces, be incorporated into clothing, or applied to vehicle exteriors. The project focuses on improving the durability and efficiency of flexible photovoltaic materials while developing novel manufacturing techniques to reduce production costs. This versatile approach to solar energy aims to expand renewable energy adoption beyond traditional rooftop and ground-mounted installations.",
    progress: 55,
    leader: {
      id: 35,
      name: "G Tarun Sai",
      role: "23KD1A0237",
      image: "/team_images/23KD1A0237.jpg"
    },
    members: [
      {
        id: 36,
        name: "B Bhanu Prakash",
        role: "23KD1A0207",
        image: "/team_images/23KD1A0207.jpg"
      },
      {
        id: 37,
        name: "G Vasu",
        role: "23KD1A0242",
        image: "/team_images/23KD1A0242.jpg"
      },
      {
        id: 65,
        name: "B Varshitha",
        role: "23KD1A0208",
        image: "/team_images/23KD1A0208.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
    ]
  },
  {
    id: 13,
    name: "Team 13",
    description: "Wet and Dry Waste Segregation",
    longDescription: "BioFabric is pioneering a new generation of sustainable textiles that combine biodegradable materials with integrated technology for enhanced functionality. Our fabrics are produced using environmentally friendly processes and incorporate features like moisture management, temperature regulation, and antimicrobial properties. We're also developing specialized variations with embedded sensors for healthcare monitoring applications, while maintaining comfort, durability, and end-of-life biodegradability. This project represents a significant step toward reducing the environmental impact of the textile industry.",
    progress: 40,
    leader: {
      id: 38,
      name: "Ch Sohitha Sai",
      role: "23KD1A0219",
      image: "/team_images/23KD1A0219.jpg"
    },
    members: [
      {
        id: 39,
        name: "L Venkata Lakshmi",
        role: "23KD1A0260",
        image: "/team_images/23KD1A0260.jpg"
      },
      {
        id: 40,
        name: "B Ramu",
        role: "23KD1A0212",
        image: "/team_images/23KD1A0212.jpg"
      },
      {
        id: 66,
        name: "I Sai Vamsi",
        role: "23KD1A0245",
        image: "/team_images/23KD1A0245.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1551091016-1cdefa81989d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
    ]
  },
  {
    id: 14,
    name: "Team 14",
    description: "Solar Power Irrigation System",
    longDescription: "UrbanFarm is developing compact, efficient vertical farming systems specifically designed for urban environments. Our modular hydroponic units can be installed in various spaces from residential buildings to unused urban lots, enabling local food production with minimal water and energy usage. The system incorporates automated climate control, nutrient delivery, and lighting to optimize plant growth while requiring minimal maintenance. This project addresses challenges in urban food security, reduces the carbon footprint of food transportation, and creates green spaces in densely populated areas.",
    progress: 75,
    leader: {
      id: 41,
      name: "K Sandeep Babu",
      role: "23KD1A0257",
      image: "/team_images/23KD1A0257.jpg"
    },
    members: [
      {
        id: 42,
        name: "D Reshma",
        role: "23KD1A0232",
        image: "/team_images/23KD1A0232.jpg"
      },
      {
        id: 43,
        name: "K Bhavani",
        role: "23KD1A0254",
        image: "/team_images/23KD1A0254.jpg"
      },
      {
        id: 67,
        name: "B Leela Jyotshna",
        role: "23KD1A0211",
        image: "/team_images/23KD1A0211.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1585833450545-04df2d2c6014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1571913196747-5023e8dbd01c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 15,
    name: "Team 15",
    description: "Smart Leave Management System",
    longDescription: "A Smart Leave Management System for colleges is an automated platform that simplifies leave applications, approvals, and tracking for students, faculty, and staff. It eliminates manual paperwork, reduces errors, and ensures adherence to institutional policies. Students can apply for leave online, faculty can approve/reject requests, and administration can maintain records efficiently. Features include real-time leave balance tracking, automated notifications, customizable policies, and seamless integration with attendance management systems.",
    progress: 80,
    leader: {
      id: 44,
      name: "Ch Hemanth Kumar",
      role: "23KD1A0220",
      image: "/team_images/23KD1A0220.jpg"
    },
    members: [
      {
        id: 45,
        name: "G Sirisha",
        role: "23KD1A0244",
        image: "/team_images/23KD1A0244.jpg"
      },
      {
        id: 46,
        name: "K Tejesh Naidu",
        role: "23KD1A0248",
        image: "/team_images/23KD1A0248.jpg"
      },
      {
        id: 68,
        name: "D Manasa",
        role: "24KD5A0206",
        image: "/team_images/24KD5A0206.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
    ]
  },
  {
    id: 16,
    name: "Team 16",
    description: "Smart Parking System",
    longDescription: "NeuroProsthetics is developing a breakthrough neural interface system that creates more intuitive control of prosthetic limbs. Our technology combines non-invasive neural sensing with advanced signal processing algorithms to interpret intended movements with greater accuracy and lower latency than existing solutions. The system also provides sensory feedback to users, creating a two-way communication channel that significantly improves prosthetic functionality and user experience. This project aims to transform prosthetic technology from basic mobility aids to truly integrated body extensions.",
    progress: 42,
    leader: {
      id: 47,
      name: "G Kavitha",
      role: "23KD1A0239",
      image: "/team_images/23KD1A0239.jpg"
    },
    members: [
      {
        id: 48,
        name: "G Sandhya",
        role: "23KD1A0236",
        image: "/team_images/23KD1A0236.jpg"
      },
      {
        id: 49,
        name: "K Lakshman Kumar",
        role: "23KD1A0256",
        image: "/team_images/23KD1A0256.jpg"
      },
      {
        id: 69,
        name: "A Sai Mounika",
        role: "23KD1A0205",
        image: "/team_images/23KD1A0205.jpg"
      }
    ],
    projectImages: [
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
    ]
  },
  {
    id: 17,
    name: "Team 17",
    description: "Smart Blind Stick",
    longDescription: "CloudCast is creating a hyperlocal weather prediction system that provides precise forecasts for small geographic areas. By combining data from distributed weather sensors, satellite imagery, and machine learning algorithms, our system can predict microclimate variations that traditional forecasting methods miss. The technology is particularly valuable for agriculture, outdoor event planning, and emergency management during severe weather events. We're also developing specialized applications for renewable energy production forecasting to help optimize solar and wind farm operations.",
    progress: 65,
    leader: {
      id: 50,
      name: "M Adhi Lakshmi",
      role: "23KD1A0264",
      image: "/team_images/23KD1A0264.jpg"
    },
    members: [
      {
        id: 51,
        name: "L Neeharika",
        role: "23KD1A0259",
        image: "/team_images/23KD1A0259.jpg"
      },
      {
        id: 52,
        name: "Ch Ravi Teja",
        role: "23KD1A0225",
        image: "/team_images/23KD1A0225.jpg"
      },
      {
        id: 70,
        name: "B Harsha Vardhan",
        role: "24KD5A0204",
        image: "/team_images/24KD5A0204.jpg"
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
  name: "Bugatha Ram Vara Prasad",
  title: "Assistant Professor, Dept. Of EEE",
  image: "/team_images/mentor.jpg",
  bio: "Ram Vara Prasad Bugatha is an Assistant Professor in the Department of Electrical and Electronics Engineering (EEE) with over four years of experience in academia. His expertise lies in Power and Industrial Drives, and he holds an M.Tech degree, currently pursuing a Ph.D. Passionate about technological advancements, he has actively participated in numerous Faculty Development Programs (FDPs) and workshops on Industrial Automation, IoT, Embedded Systems, and Power Systems.An accomplished researcher, he has published extensively in reputed journals and conferences, focusing on Smart Electric Vehicles, Renewable Energy Applications, Power Quality Enhancement, and Advanced Motor Control Strategies. He has also presented his work at national and international conferences, contributing to the discourse on sustainable and efficient energy solutions.Beyond research, he has guided several student projects, including IoT-based home automation, smart electric vehicles, and solar-powered charging stations for EVs. A dedicated mentor, he holds multiple NPTEL certifications and actively engages in professional bodies such as ISTE, IAENG, and IFERP, fostering academic excellence and innovation in electrical engineering."
};
