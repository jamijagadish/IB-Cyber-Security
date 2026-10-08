/**
 * Intellectual Property & Technology Dataset
 * Exactly 12 cards representing corporate IP & technology assets.
 */

export const intellectualPropertyData = [
  {
    id: 1,
    number: "01",
    title: "Proprietary Software Products",
    description:
      "We develop proprietary software products that are designed, engineered and owned as technology assets of the Company. These products can be commercialised through SaaS, licensing, subscriptions, enterprise deployment and other lawful models. Our proprietary product strategy enables continuous improvement and long-term technology development.",
    icon: "Laptop",
  },
  {
    id: 2,
    number: "02",
    title: "Source Code & Software Assets",
    description:
      "Source code is a fundamental technology asset behind our software products. We develop and manage proprietary codebases, software components, application architectures and related technical assets. Appropriate ownership, documentation, access management and protection practices help preserve the technical value of our software products.",
    icon: "Code2",
  },
  {
    id: 3,
    number: "03",
    title: "Algorithms & Technology Models",
    description:
      "We may develop proprietary algorithms, software logic and technology models that contribute to product functionality and intelligence. These assets can support Artificial Intelligence, analytics, automation, cybersecurity and other technology products. We manage such technical assets as part of the broader intellectual property ecosystem supporting our software products.",
    icon: "Cpu",
  },
  {
    id: 4,
    number: "04",
    title: "Software Architecture IP",
    description:
      "Our software architectures represent valuable technical knowledge developed through product engineering and research. Architecture IP can include system structures, technical patterns, service designs and integration frameworks. We use these technology assets to develop scalable products and can protect or commercialise them where appropriate.",
    icon: "Layers",
  },
  {
    id: 5,
    number: "05",
    title: "Database Technology Assets",
    description:
      "Databases, data structures and related technology systems can form important components of software products. We develop and manage database technologies according to product requirements, ownership rights and applicable laws. These assets can support enterprise platforms, analytics products, SaaS applications and specialised technology systems.",
    icon: "Database",
  },
  {
    id: 6,
    number: "06",
    title: "Copyrighted Software",
    description:
      "Software code, technical documentation, interfaces and other eligible software-related works may constitute copyright assets where applicable. We can create, protect, manage, license and commercially exploit such intellectual property in accordance with applicable law. Copyright management forms part of our broader software product ownership strategy.",
    icon: "ShieldCheck",
  },
  {
    id: 7,
    number: "07",
    title: "Trademarks & Product Brands",
    description:
      "We may create and manage trademarks and product brands associated with our software products and technology platforms. Strong product identity helps distinguish technology products in domestic and international markets. Trademark strategy can support the commercialisation, licensing and long-term recognition of software products.",
    icon: "Award",
  },
  {
    id: 8,
    number: "08",
    title: "Patents Where Applicable",
    description:
      "Where an invention meets applicable legal requirements, we may pursue patent protection for eligible technology innovations. Patent strategy can form part of our broader intellectual property management approach. Any patent protection will depend on the nature of the invention, applicable law, examination requirements and relevant jurisdiction.",
    icon: "Lightbulb",
  },
  {
    id: 9,
    number: "09",
    title: "Trade Secrets & Know-How",
    description:
      "Our technology development may generate proprietary technical knowledge, processes, methodologies and know-how. Where appropriate, such information can be managed as confidential business or technical assets. Protecting proprietary know-how helps preserve competitive technology advantages associated with software products and product engineering.",
    icon: "Lock",
  },
  {
    id: 10,
    number: "10",
    title: "Technology Licensing",
    description:
      "We may license proprietary software products, technologies, APIs, intellectual property and related technology assets to authorised customers and partners. Licensing models can support enterprise deployment, SaaS arrangements, technology partnerships and international commercialisation. Our licensing approach can be structured according to product requirements and applicable contractual and legal conditions.",
    icon: "Handshake",
  },
  {
    id: 11,
    number: "11",
    title: "Technology Transfer",
    description:
      "We may undertake lawful technology transfer arrangements involving software products, technical knowledge, APIs, intellectual property and other technology assets. Such arrangements can support strategic partnerships, enterprise deployment and market expansion. Technology transfer activities remain subject to ownership rights, contractual terms, applicable laws and regulatory requirements.",
    icon: "Share2",
  },
  {
    id: 12,
    number: "12",
    title: "Intellectual Property Commercialisation",
    description:
      "We aim to transform research and engineering into commercially valuable technology assets. Intellectual property can be commercialised through software products, licensing, SaaS platforms, subscriptions, APIs, partnerships and other lawful business models. This product-led approach allows technology innovation to create long-term commercial value for the Company.",
    icon: "TrendingUp",
  },
];

export const IntellectualPropertyPageData = {
  id: 15,
  slug: 'industry-solutions',
  eyebrow: 'Intellectual Property & Technology',
  title: 'Intellectual Property & Technology',
  description: 'Our software products are supported by intellectual property, proprietary technology and technical assets.',
  href: '#industry-solutions',
  cards: intellectualPropertyData.map((item) => ({
    id: `industry-solutions-${item.id}`,
    title: item.title,
    description: item.description,
    icon: item.icon,
    status: 'Core capability',
    route: `/solutions/industry-solutions/${item.id}`,
  })),
};

