import { 
  ShieldAlert, UserX, Lock, Fingerprint, CreditCard, 
  Cpu, AlertTriangle, Globe, MonitorX, Server 
} from "lucide-react";

export const cardData = [
  { 
    id: 1, 
    num: "01",
    title: "Regulatory Compliance Frameworks", 
    desc: "Establish and enforce comprehensive regulatory structures.",
    description: "Establish and enforce comprehensive regulatory compliance structures across global enterprise operations.",
    Icon: ShieldAlert,
    icon: ShieldAlert, 
    bgGradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    details: "We design and implement structured regulatory compliance platforms that align software applications, data systems, and business processes with international standards, government requirements, and industry-specific mandates. Our framework ensures continuous audit readiness, policy enforcement, and risk reporting."
  },
  { 
    id: 2, 
    num: "02",
    title: "Enterprise Risk Management", 
    desc: "Identify, quantify, and mitigate digital & tech risks.",
    description: "Identify, quantify, and mitigate digital, operational, and technology-related risks.",
    Icon: UserX,
    icon: UserX, 
    bgGradient: "linear-gradient(135deg, #475569 0%, #0f172a 100%)",
    details: "Enterprise Risk Management (ERM) provides executive teams with real-time risk quantification, vulnerability prioritization, and mitigation tracking. By embedding risk assessment workflows into core software operations, organizations maintain operational resilience and business continuity."
  },
  { 
    id: 3, 
    num: "03",
    title: "Data Privacy & Governance", 
    desc: "Protect sensitive data assets with strict privacy controls.",
    description: "Protect sensitive data assets with strict privacy controls and governance policies.",
    Icon: Lock,
    icon: Lock, 
    bgGradient: "linear-gradient(135deg, #0d9488 0%, #065f46 100%)",
    details: "Our data privacy technologies enforce GDPR, CCPA, HIPAA, and local data protection regulations through automated data discovery, classification, access management, and consent tracking, safeguarding customer trust and preventing regulatory penalties."
  },
  { 
    id: 4, 
    num: "04",
    title: "Audit & Reporting Automation", 
    desc: "Automate compliance evidence collection and audit reports.",
    description: "Automate compliance evidence collection and generate executive audit reports instantly.",
    Icon: Fingerprint,
    icon: Fingerprint, 
    bgGradient: "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    details: "Eliminate manual compliance tracking with automated audit logging, real-time evidence gathering, and standardized reporting dashboards. Our systems provide immutable audit trails for internal reviews and external regulatory inspections."
  },
  { 
    id: 5, 
    num: "05",
    title: "Third-Party Vendor Risk", 
    desc: "Assess, monitor, and mitigate vendor & supply chain risks.",
    description: "Assess, monitor, and mitigate vendor and supply chain cybersecurity risks.",
    Icon: CreditCard,
    icon: CreditCard, 
    bgGradient: "linear-gradient(135deg, #d97706 0%, #9a3412 100%)",
    details: "Extend governance beyond your organization by continuously assessing third-party vendor security postures, contract compliance, and supply chain exposure through automated vendor risk scoring and continuous monitoring platforms."
  },
  { 
    id: 6, 
    num: "06",
    title: "Policy Management & Enforcement", 
    desc: "Centralize corporate policies & compliance training.",
    description: "Centralize corporate policies, employee attestations, and compliance training.",
    Icon: Cpu,
    icon: Cpu, 
    bgGradient: "linear-gradient(135deg, #0891b2 0%, #1e40af 100%)",
    details: "Streamline policy distribution, version control, and employee acknowledgments. Automated workflows ensure all personnel adhere to updated security policies, code-of-conduct guidelines, and compliance training requirements."
  },
  { 
    id: 7, 
    num: "07",
    title: "Cybersecurity Governance", 
    desc: "Align security strategy with business objectives & board goals.",
    description: "Align cybersecurity strategy with business objectives and board governance expectations.",
    Icon: AlertTriangle,
    icon: AlertTriangle, 
    bgGradient: "linear-gradient(135deg, #dc2626 0%, #881337 100%)",
    details: "Establish robust CISO governance frameworks, incident escalation protocols, and strategic risk controls that satisfy board oversight, insurer requirements, and institutional security expectations."
  },
  { 
    id: 8, 
    num: "08",
    title: "Financial & Tax Compliance", 
    desc: "Automate compliance with AML, KYC, and financial laws.",
    description: "Ensure automated compliance with financial regulations, anti-money laundering (AML), and tax laws.",
    Icon: Globe,
    icon: Globe, 
    bgGradient: "linear-gradient(135deg, #059669 0%, #115e59 100%)",
    details: "Build secure digital interfaces and transaction monitoring platforms that enforce AML, Know Your Customer (KYC), and tax compliance rules across digital financial products and enterprise platforms."
  },
  { 
    id: 9, 
    num: "09",
    title: "ESG & Sustainability Governance", 
    desc: "Track, measure, and report ESG metrics and carbon telemetry.",
    description: "Track, measure, and report Environmental, Social, and Governance (ESG) metrics.",
    Icon: MonitorX,
    icon: MonitorX, 
    bgGradient: "linear-gradient(135deg, #047857 0%, #003135 100%)",
    details: "Implement digital platforms to collect, verify, and report ESG telemetry, carbon metrics, and social responsibility compliance, satisfying investor requirements and emerging regulatory sustainability standards."
  },
  { 
    id: 10, 
    num: "10",
    title: "Continuous Compliance Monitoring", 
    desc: "Real-time compliance tracking with drift detection.",
    description: "Real-time compliance posture tracking with automated drift detection and alerts.",
    Icon: Server,
    icon: Server, 
    bgGradient: "linear-gradient(135deg, #0FA4AF 0%, #003135 100%)",
    details: "Replace periodic manual audits with 24/7 continuous compliance monitoring. Detect configuration drift, policy violations, and unapproved changes instantly to maintain perpetual compliance."
  }
];

export const cardsData = cardData;
