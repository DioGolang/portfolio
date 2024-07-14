export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize customer collaboration, promoting open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I am very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "Constantly evolving",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Technology enthusiast and passionate about development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Studying Computer Engineering and Information Technology",
        description: "UNIVESP",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Sistema de Venda de Ingressos",
        des: "Microsserviços de parceiro de ingressos com Nestjs, frontend com Nextjs e infraestrutura com GO.",
        img: "/p1.svg",
        iconLists: ["/golang.svg", "/ts.svg", "/nestjs.svg", "/next.svg", "/mysql.svg", "/reactjs.svg", "/tail.svg", "/dock.svg"],
        link: process.env.GITHUB + "/dev-ticket",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/devsvasconcelos/",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/devsvasconcelos/",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/devsvasconcelos/",
    },
];

export const testimonials = [
    {
        quote:
            "Trabalhar com Diogo foi uma experiência transformadora para meu negócio imobiliário. Ele criou um site incrivelmente intuitivo e visualmente atraente que facilitou para nossos clientes encontrarem e visualizarem propriedades. As ferramentas de CRM e a inteligência para campanhas no Facebook aumentaram significativamente nossa eficiência e alcance. Recomendo seus serviços a qualquer agência imobiliária que queira se destacar no mercado..",
        name: "Moacir - Gerente de Imobiliária",
        title: "Site Imobiliário",
        img: "/profile.svg",
        width: 50,
        height:50
    },
    {
        quote:
            "A criação do nosso site institucional com Diogo foi uma das melhores decisões que tomamos. Ele compreendeu perfeitamente nossa visão e valores, traduzindo isso em um site funcional e esteticamente agradável. A plataforma é fácil de usar e gerenciar, o que tem facilitado nossa comunicação com clientes e parceiros. Agradecemos profundamente pelo trabalho excepcional e profissionalismo..",
        name: "Jorge - CEO",
        title: "Site Institucional",
        img: "/profile.svg",
        width: 50,
        height:50
    },
    {
        quote:
            "Eu queria um site pessoal que refletisse minha personalidade e meu trabalho, e superou todas as minhas expectativas. Ele foi paciente e atento às minhas necessidades, resultando em um site elegante e profissional que realmente captura quem eu sou. A navegação é fluida, e recebi inúmeros elogios pelo design. Não poderia estar mais feliz com o resultado!",
        name: "Luana - Corretora de Imóveis",
        title: "Site Pessoal",
        img: "/profile.svg",
        width: 50,
        height:50
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Full-Stack developer",
        desc: "Complete web applications, from interactive front-end with React and TypeScript to robust APIs with Python, NodeJs, PHP, Go and databases",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Data Science",
        desc: "Use of Python and its main libraries and packages.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Good Practices: ",
        desc: "Adoption of OOP principles and logical programming for efficient and maintainable code.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Main Soft Skills",
        desc: "Effective Communication, Teamwork, Problem-Solving, Adaptability, Attention to Detail, Responsibility and Reliability, Critical Thinking, Empathy and Emotional Intelligence, Mentoring and Teaching",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        url: "https://github.com/diogolang",
    },
    {
        id: 2,
        img: "/whatsapp.svg",
        url: "https://api.whatsapp.com/send?phone=5511961508823",
    },
    {
        id: 3,
        img: "/link.svg",
        url: "https://www.linkedin.com/in/diogo-vasconcelos-localwebimoveis/",
    },
];