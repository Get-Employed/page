const person = {
    firstName: "VVS Basanth",
    lastName: "Pedapati",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Computer Science Engineer",
    avatar: "/images/avatar.jpg",
    location: Intl.DateTimeFormat().resolvedOptions().timeZone, // Dynamically fetch timezone
    languages: [], // Optional: Can be populated dynamically
};

const newsletter = {
    display: true,
    title: `Subscribe to ${person.firstName}'s Newsletter`,
    description: "I occasionally write about lifestyle, technology, and share thoughts on the intersection of innovation and engineering.",
};

const social = [
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/vvs-basanth",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/vvs-basanth/",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:vvs.pedapati@gmail.com",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: "Software Engineer",
    subline: `I'm Basanth, a Software Engineer, where I build amazing things for the web. After hours, I teach programming.`,
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://calendar.notion.so/meet/vvsbasanth/m7k74lbz",
    },
    intro: {
        display: true,
        title: "Introduction",
        description:
            "Basanth is an India-based software engineer with a passion for machine learning and transforming complex challenges into simple, elegant software solutions. His work spans digital interfaces, innovative experiences, and the convergence of innovation and technology.",
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Indian Navy",
                timeframe: "2024 - Present",
                role: "Machine Learning Scientist (B)",
                achievements: [
                    "Working on the active Indian Navy Tech Projects",
                ],
                images: [],
            },
            {
                company: "StellaX Technologies",
                timeframe: "2022 - Present",
                role: "Founder",
                achievements: [
                    "Developed an innovative concept of an LLM model, automating tasks for software engineering.",
                    "Led a cross-functional team to launch a new product line.",
                ],
                images: [
                    {
                        src: "/images/projects/project-01/cover-01.jpg",
                        alt: "Once UI Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "IBM Qiskit",
                timeframe: "2023",
                role: "Quantum Machine Learning Engineer",
                achievements: [
                    "Worked in a team which maintained quantum machine learning model and setting up data pipelines to optimize the model for IBM Qiskit.",
                ],
                images: [],
            },
            {
                company: "GoldMan Sachs",
                timeframe: "2022",
                role: "New Summer Analyst (inter)",
                achievements: [
                    "Was part of a team which made a new trading algorithm for the company.",
                    "Maintained the algorithm and optimized it for the company.",
                ],
                images: [],
            }
        ],
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            {
                name: "Indian Institute of Sciences [TATA Institute]",
                description: "MSc - Quantum Simulations and Computing",
            },
            {
                name: "Indian Institute of Technology - Madras [IIT Madras]",
                description: "BSc (Hons.) - Physics",
            },
            {
                name: "GITAM University",
                description: "B.Tech - Mechanical Engineering",
            },
        ],
    },
    technical: {
        display: true,
        title: "Technical skills",
        skills: [
            {
                title: "Figma",
                description: "Able to prototype in Figma with Once UI with unnatural speed.",
                images: [
                    {
                        src: "/images/projects/project-01/cover-02.jpg",
                        alt: "Figma Prototype",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "React and Next.js",
                description: "Building next-gen apps with Next.js.",
                images: [
                    {
                        src: "/images/projects/project-01/cover-03.jpg",
                        alt: "React and Next.js Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "JAVA Programming",
                description: "JAVA is my go-to language for most of my projects.",
                images: [],
            },
            {
                title: "Machine Learning",
                description: "I have a strong background in machine learning.",
                images: [],
            },
            {
                title: "Quantum Computing",
                description: "I have a strong background in quantum computing.",
                images: [],
            },
            {
                title: "RUST Programming",
                description: "I have a strong background in RUST programming.",
                images: [],
            }
        ],
    },
};

const blog = {
    label: "Blog",
    title: "Writing about lifestyle and tech...",
    description: `Read what ${person.name} has been up to recently.`,
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}.`,
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}.`,
    images: [], // Can be populated with actual photo data
};

export { person, social, newsletter, home, about, blog, work };
