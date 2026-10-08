export const DATA_ANALYTICS_CARDS = [
  {
    id: 1,
    title: "Data Processing Products",
    desc: "We develop software products designed to collect, process, transform and manage digital information.",
    content: "We develop software products designed to collect, process, transform and manage digital information. These products can support enterprise applications, government systems, analytics platforms and specialised technology environments. Our data processing technologies are engineered to handle structured workflows and large information requirements while maintaining appropriate security and reliability.",
    tag: "01"
  },
  {
    id: 2,
    title: "Data Management Products",
    desc: "Our data management products provide software-based capabilities for organising, maintaining and accessing information across digital environments.",
    content: "Our data management products provide software-based capabilities for organising, maintaining and accessing information across digital environments. These products can support databases, records, information structures and organisational workflows. We focus on building reliable data management technology that becomes a strong foundation for enterprise applications, analytics and intelligent software products.",
    tag: "02"
  },
  {
    id: 3,
    title: "Data Engineering Products",
    desc: "We develop data engineering technologies that support data pipelines, transformation, processing and integration across software systems.",
    content: "We develop data engineering technologies that support data pipelines, transformation, processing and integration across software systems. These capabilities can power analytics products, AI applications, business intelligence platforms and enterprise software. Our product engineering approach focuses on creating reliable data flows that support consistent and scalable digital operations.",
    tag: "03"
  },
  {
    id: 4,
    title: "Data Analytics Products",
    desc: "Our analytics products transform organisational and operational data into structured insights through software.",
    content: "Our analytics products transform organisational and operational data into structured insights through software. Product capabilities may include trend analysis, performance analytics, reporting and interactive dashboards. We design analytics products that help authorised users understand information and support technology-enabled decisions across business, institutional and operational environments.",
    tag: "04"
  },
  {
    id: 5,
    title: "Business Intelligence Products",
    desc: "We develop Business Intelligence software products that provide organisations with tools for understanding business and operational information.",
    content: "We develop Business Intelligence software products that provide organisations with tools for understanding business and operational information. These products can combine data integration, analytics, dashboards and reporting into unified digital platforms. Our BI product approach focuses on usability, scalability and meaningful presentation of organisational data.",
    tag: "05"
  },
  {
    id: 6,
    title: "Data Visualisation Products",
    desc: "Our data visualisation products transform complex datasets into accessible charts, dashboards and interactive information interfaces.",
    content: "Our data visualisation products transform complex datasets into accessible charts, dashboards and interactive information interfaces. These technologies can support business intelligence, government reporting, cybersecurity analytics and operational management. We focus on designing visualisation products that make important information easier to understand while preserving data accuracy and context.",
    tag: "06"
  },
  {
    id: 7,
    title: "Reporting Software Products",
    desc: "We develop reporting products that automate the generation, organisation and presentation of structured information.",
    content: "We develop reporting products that automate the generation, organisation and presentation of structured information. These products can support operational reporting, management reporting, compliance-related reporting and institutional workflows. By combining data processing and software automation, our reporting products can reduce manual effort and improve information accessibility.",
    tag: "07"
  },
  {
    id: 8,
    title: "Intelligence Platforms",
    desc: "Our intelligence platforms combine data processing, analytics and information analysis to create structured digital environments for understanding complex information.",
    content: "Our intelligence platforms combine data processing, analytics and information analysis to create structured digital environments for understanding complex information. These products may support enterprise intelligence, cybersecurity intelligence, investigation workflows and institutional analysis. We develop intelligence technology with emphasis on authorised access, data integrity and useful analytical workflows.",
    tag: "08"
  },
  {
    id: 9,
    title: "Real-Time Analytics",
    desc: "We develop software products capable of processing and presenting relevant information in near real-time environments where appropriate.",
    content: "We develop software products capable of processing and presenting relevant information in near real-time environments where appropriate. Real-time analytics can support monitoring, operational dashboards, cybersecurity products and digital platforms. Our technology approach combines data processing, scalable architecture and visualisation to provide timely information to authorised users.",
    tag: "09"
  },
  {
    id: 10,
    title: "Data Integration Products",
    desc: "Our data integration products enable information to move between applications, databases, APIs and digital platforms through structured technology interfaces.",
    content: "Our data integration products enable information to move between applications, databases, APIs and digital platforms through structured technology interfaces. These products can support enterprise systems, cloud platforms and analytics environments. We focus on building reliable integration technologies that help organisations create connected and interoperable digital ecosystems.",
    tag: "10"
  },
  {
    id: 11,
    title: "Decision-Support Products",
    desc: "We develop software products that use data, analytics and intelligent processing to support technology-enabled decision workflows.",
    content: "We develop software products that use data, analytics and intelligent processing to support technology-enabled decision workflows. These products can provide dashboards, analysis, reports, alerts and relevant information to authorised users. Our decision-support technologies are designed to improve information visibility without replacing appropriate human judgement and organisational controls.",
    tag: "11"
  },
  {
    id: 12,
    title: "Data Security & Privacy Products",
    desc: "We develop data-focused security and privacy technologies designed to support responsible information management.",
    content: "We develop data-focused security and privacy technologies designed to support responsible information management. These products may address access control, data visibility, monitoring and privacy-related workflows. Our approach integrates security and privacy considerations into data products to help organisations manage valuable information within appropriate technological and regulatory frameworks.",
    tag: "12"
  }
];

const topicIds = DATA_ANALYTICS_CARDS.map(card => card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));

export const DATA_ANALYTICS_DETAILS = {};
topicIds.forEach((id, index) => {
  const card = DATA_ANALYTICS_CARDS[index];
  if (card) {
    DATA_ANALYTICS_DETAILS[id] = {
      description: card.desc,
      content: card.content
    };
  }
});

export const DataAnalyticsIntelligenceTechnologyData = DATA_ANALYTICS_CARDS;
export const DataAnalyticsAndIntelligenceTechnologyPageData = DATA_ANALYTICS_CARDS;
export const cardsData = DATA_ANALYTICS_CARDS;
export default DATA_ANALYTICS_CARDS;
