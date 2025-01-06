import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'VVS Basanth',
        lastName:  'Pedapati',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Hindi', 'Telugu']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
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
            link: 'https://www.linkedin.com/in/vvs-basanth',
        },
        {
            name: 'X',
            icon: 'x',
            link: '',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:vvs.pedapati@gmail.com',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
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
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
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
            title: t("about.technical.title"),
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
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        // Images from https://pexels.com
        images: []
    }
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };