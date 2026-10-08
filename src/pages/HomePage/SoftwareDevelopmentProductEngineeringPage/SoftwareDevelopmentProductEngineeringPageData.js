// Content for the 12 software product cards, in display order.
const cards = [
    {
        "number": "01",
        "name": "Software Products for State Governments",
        "description": "We develop product-based software solutions and digital platforms for State Government departments, public institutions and authorised government users. Our software products can support digital administration, citizen services, workflow management, data management, reporting, automation and institutional operations. These government technology products are designed with scalable architecture, secure data handling and configurable workflows to address diverse administrative and public-service requirements.",
        "color": "#E8F4F8",
        "summary": "Digital administration. Connected citizen services."
    },
    {
        "number": "02",
        "name": "Software Products for Central Government",
        "description": "We build software products and digital platforms for Central Government departments, public authorities and institutional users. Our product development capabilities cover digital administration, information management, workflow automation, reporting, analytics, data processing and technology-enabled service delivery. These government software products are engineered to support structured operations, scalable deployments, secure information management and evolving digital requirements across different government functions.",
        "color": "#F3EFE8",
        "summary": "Secure platforms for public institutions."
    },
    {
        "number": "03",
        "name": "Legal \u0026 Law Enforcement Technology Products",
        "description": "We develop specialised software products for lawful legal and law-enforcement requirements, including case management, document management, records management, workflow automation, reporting and operational coordination. Our technology products are designed to help authorised organisations digitise processes, organise information and improve operational visibility. Product capabilities can be configured according to applicable laws, institutional requirements, permissions and authorised access.",
        "color": "#E9F2ED",
        "summary": "Structured cases. Connected legal workflows."
    },
    {
        "number": "04",
        "name": "Investigation \u0026 Intelligence Technology Products",
        "description": "We create specialised software products and digital platforms for authorised investigation and intelligence workflows. These technology products may support investigation management, case analysis, evidence management, information processing, intelligence analysis, documentation and reporting. Our product-based approach enables organisations to use structured digital workflows and data-driven technology for managing complex information and operational processes, subject to applicable laws and authorised access.",
        "color": "#F5EBE9",
        "summary": "Organised evidence. Informed investigation workflows."
    },
    {
        "number": "05",
        "name": "Police \u0026 Public Safety Technology Products",
        "description": "We develop software products and digital platforms designed to support authorised police, public-safety and institutional workflows. Our technology products can include digital records, case management, reporting, operational coordination, information management, analytics and workflow automation capabilities. These products are designed to help organisations modernise operational processes, improve information accessibility and build scalable digital systems while remaining subject to applicable laws, regulations and authorised use.",
        "color": "#EBEBF2",
        "summary": "Connected operations for public safety."
    },
    {
        "number": "06",
        "name": "Cybersecurity \u0026 Digital Security Products",
        "description": "We develop cybersecurity software products and digital security platforms focused on protecting applications, systems, data and digital environments. Our product portfolio can address threat intelligence, security monitoring, vulnerability management, incident management, fraud detection, privacy protection, digital risk management and information security. We focus on building scalable security technology products that can help organisations identify, monitor and manage evolving cybersecurity risks.",
        "color": "#F4F4EB",
        "summary": "Monitor threats. Manage digital risk."
    },
    {
        "number": "07",
        "name": "Commercial \u0026 Enterprise Software Products",
        "description": "We build commercial software products and enterprise technology platforms designed to support modern business operations. Our product development capabilities include enterprise management, workflow automation, customer management, business intelligence, productivity, communication, collaboration, data management and operational software. These digital products are designed to help organisations streamline processes, manage information and adopt scalable technology for evolving commercial and enterprise requirements.",
        "color": "#EBF1F4",
        "summary": "Connected teams. Streamlined business operations."
    },
    {
        "number": "08",
        "name": "Education \u0026 Institutional Technology Products",
        "description": "We develop education technology products and institutional software platforms for schools, colleges, universities, training organisations and other educational institutions. Our digital products can support learning management, examinations, assessments, digital content, knowledge management, institutional administration, student workflows and educational operations. We focus on creating scalable education software products that enable institutions to adopt modern digital systems for learning, management and information delivery.",
        "color": "#F2EBEF",
        "summary": "Digital learning and institutional management."
    },
    {
        "number": "09",
        "name": "AI, Data \u0026 Intelligent Software Products",
        "description": "We develop intelligent software products powered by Artificial Intelligence, Machine Learning, Generative AI, data engineering, analytics and automation technologies. Our AI and data products can support intelligent information processing, automation, analytics, decision-support workflows and data-driven applications. We combine software engineering with emerging technologies to create commercially viable digital products designed to solve complex operational and information-processing requirements.",
        "color": "#ECF4E9",
        "summary": "Intelligent automation. Data-driven applications."
    },
    {
        "number": "10",
        "name": "Cloud, SaaS \u0026 Digital Platform Products",
        "description": "We design and develop cloud-based software products, SaaS platforms and scalable digital applications for modern technology environments. Our product engineering capabilities cover cloud applications, distributed systems, database platforms, digital infrastructure and continuously evolving SaaS products. These technology products are designed for scalable deployment, secure access, integration and continuous product improvement across different users, organisations and markets.",
        "color": "#F4EFE9",
        "summary": "Cloud-native platforms built to scale."
    },
    {
        "number": "11",
        "name": "API, Integration \u0026 Digital Infrastructure Products",
        "description": "We develop API products, integration platforms, middleware and digital infrastructure solutions that enable software systems to communicate and work together efficiently. Our technology products can support application integration, database connectivity, cloud integration, software interoperability and digital ecosystem development. By building reusable and scalable integration products, we help create connected technology environments where applications, platforms and data systems can interact through structured digital interfaces.",
        "color": "#E8EAEF",
        "summary": "Connected applications. Unified digital ecosystems."
    },
    {
        "number": "12",
        "name": "Global Software Products",
        "description": "We develop proprietary software products and digital technology platforms for deployment, licensing, distribution and commercialisation in international markets. Our product-based approach enables us to create scalable technology products that can serve diverse industries, organisations and users across different regions. We focus on software architecture, security, usability, scalability and continuous product development to build digital products with potential for global technology markets.",
        "color": "#EFEFDF",
        "summary": "Scalable software for international markets."
    }
]

export const SoftwareDevelopmentProductEngineeringPageData = {
  id: 1,
  slug: 'products-platforms',
  eyebrow: 'Products & platforms',
  title: 'Software Development & Product Engineering',
  description: 'At IB Cyber Security Private Limited, we design, develop, engineer and commercialise software products, digital platforms and technology solutions.',
  href: '#products-platforms',
  cards: cards.map((card) => ({
    id: `sdpe-${card.number}`,
    title: card.name,
    description: card.description,
    icon: 'Code2',
    status: 'Core capability',
    route: '/solutions/products-platforms'
  }))
};

export default cards;
