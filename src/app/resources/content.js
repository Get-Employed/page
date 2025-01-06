import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'VVS Basanth',
    lastName:  'Pedapati',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Computer Science Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about Lifestyle, technology, and share thoughts on the intersection of innovation and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/vvs-basanth',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/vvs-basanth/',
    },
    // {
    //     name: 'X',
    //     icon: 'x',
    //     link: '',
    // },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:vvs.pedapati@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer</>,
    subline: <>I'm Basanth, a <InlineCode>Software Engineer</InlineCode>, where I build amazing<br/> things for the web. After hours, I teach programming.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendar.notion.so/meet/vvsbasanth/m7k74lbz'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Basanth is a India-based software engineer with a passion towards machine learning and transforming complex challenges into simple, elegant software solutions. His work spans digital interfaces, innovative experiences, and the convergence of innovation and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Indian Navy',
                timeframe: '2024 - Present',
                role: 'Machine Learning Scientist (B)',
                achievements: [
                    <>Working on the active Indian Navy Tech Projects</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                ]
            },
            {
                company: 'StellaX Technologies',
                timeframe: '2022 - Present',
                role: 'Founder',
                achievements: [
                    <>Developed an innovative concept of an LLM model, which acts as a tool for automating tasks for software engineering.</>,
                    <>Led a cross-functional team to launch a new product line.</>
                ],
                images: [ ]
            },
            {
                company: 'IBM Qiskit',
                timeframe: '2023 - 2024',
                role: 'Quantum - Machine Learning Engineer',
                achievements: [
                    <>Developed an new machine learning algorithm and optimized the capabilities of Qiskit Framework and IBM - Quantum Computer.</>,
                ],
                images: [ ]
            },
            {
                company: 'Goldman Sachs',
                timeframe: '2023',
                role: 'New Summer Analyst (intern)',
                achievements: [
                    <>Was part of a Reaseach team which was building a financial model and assisting senior bankers with deal execution.</>,
                ],
                images: [ ]
            },
            {
                company: 'Defence Research and Development Organisation',
                timeframe: '2023',
                role: 'Machine Learning Engineer (Intern)',
                achievements: [
                    <>Was part of a team which does data preprocessing, model development and testing pipelines.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Indian Institute of Sciences [ TATA Institute]',
                description: <>MSc - Quantum Simulations and Computing</>,
            },
            {
                name: 'Indian Institute of Technology - Madras [IIT Madras]',
                description: <>BSc (Hons.) - Physics (Hons.).</>,
            },
            {
                name: 'GITAM University',
                description: <>B.Tech - Mechanical Engineering</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            },
            {
                title: 'React and Next.js',
                description: <>Building next gen apps with Next.js.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                ]
            },
            {
                title: 'Amplify',
                description: <>Certified Host in AWS Amplify.</>,
                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Angular.js',
                description: <>Building next gen apps with Angular.js</>,
                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'Tensorflow',
                description: <>Building ml products and apps with TensorFlow.</>,
                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            },
            {
                title: 'and many more...',
                description: <>Check ouy my Github Profile for better understanding of my tech skills.</>,
                // optional: leave the array empty if you don't want to display images
                images: [

                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about lifestyle and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [

    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };