import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { heroSlides } from '../../data/HomePageData/Home';

// 0. Introduction
import IntroductionSection from './IntroductionPage/IntroductionSection';

// 1. Software Development & Product Engineering
import SoftwareDevelopmentProductEngineeringSection from './SoftwareDevelopmentProductEngineeringPage/SoftwareDevelopmentProductEngineeringSection';
// 2. Our Technology
import OurTechnologySection from './OurTechnologyPage/OurTechnologySection';
// 3. Our Product Ecosystem
import OurProductEcosystemSection from './OurProductEcosystemPage/OurProductEcosystemSection';
// 4. Cybersecurity & Digital Security
import CybersecurityDigitalSecuritySection from './CybersecurityDigitalSecurityPage/CybersecurityDigitalSecuritySection';
// 5. Artificial Intelligence & Intelligent Software
import ArtificialIntelligenceIntelligentSoftwareSection from './ArtificialIntelligenceIntelligentSoftwarePage/ArtificialIntelligenceIntelligentSoftwareSection';
// 6. Cloud, SaaS & Digital Platforms
import CloudSaasDigitalPlatformsSection from './CloudSaasDigitalPlatformsPage/CloudSaasDigitalPlatformsSection';
// 7. Data, Analytics & Intelligence Technology
import DataAnalyticsIntelligenceTechnologySection from './DataAnalyticsIntelligenceTechnologyPage/DataAnalyticsIntelligenceTechnologySection';
// 8. Software Architecture & Product Engineering
import SoftwareArchitectureProductEngineeringSection from './SoftwareArchitectureProductEngineeringPage/SoftwareArchitectureProductEngineeringSection';
// 9. Product Development Lifecycle
import ProductDevelopmentLifecycleSection from './ProductDevelopmentLifecyclePage/ProductDevelopmentLifecycleSection';
// 10. APIs, Integration & Digital Connectivity
import ApisIntegrationDigitalConnectivitySection from './ApisIntegrationDigitalConnectivityPage/ApisIntegrationDigitalConnectivitySection';
// 11. Enterprise & Business Software Products
import EnterpriseBusinessSoftwareProductsSection from './EnterpriseBusinessSoftwareProductsPage/EnterpriseBusinessSoftwareProductsSection';
// 12. Government & Public Technology
import GovernmentPublicTechnologySection from './GovernmentPublicTechnologyPage/GovernmentPublicTechnologySection';
// 13. Investigation, Legal & Institutional Technology
import InvestigationLegalInstitutionalTechnologySection from './InvestigationLegalInstitutionalTechnologyPage/InvestigationLegalInstitutionalTechnologySection';
// 14. Education, Training & Skill Development Technology
import EducationTrainingSkillDevelopmentTechnologySection from './EducationTrainingSkillDevelopmentTechnologyPage/EducationTrainingSkillDevelopmentTechnologySection';
// 15. Intellectual Property & Technology
import IntellectualPropertySection from './IntellectualPropertyPage/IntellectualPropertySection';
// 16. Software Product Commercialisation
import SoftwareProductCommercialisationSection from './SoftwareProductCommercialisationPage/SoftwareProductCommercialisationSection';

// Demo Extra Sections (17 to 24)
// 17. Global Infrastructure & Managed Services
import GlobalInfrastructureManagedServicesSection from './GlobalInfrastructureManagedServicesPage/GlobalInfrastructureManagedServicesSection';
// 18. DevOps & Continuous Delivery
import DevOpsContinuousDeliverySection from './DevOpsContinuousDeliveryPage/DevOpsContinuousDeliverySection';
// 19. Digital Experience & UI/UX Design
import DigitalExperienceDesignSection from './DigitalExperienceDesignPage/DigitalExperienceDesignSection';
// 20. Regulatory Compliance & Risk Governance
import RegulatoryComplianceGovernanceSection from './RegulatoryComplianceGovernancePage/RegulatoryComplianceGovernanceSection';
// 21. Quantum Security & Advanced Cryptography
import QuantumSecurityCryptographySection from './QuantumSecurityCryptographyPage/QuantumSecurityCryptographySection';
// 22. IoT, Smart Systems & Edge Computing
import IotSmartEdgeSystemsSection from './IotSmartEdgeSystemsPage/IotSmartEdgeSystemsSection';
// 23. Blockchain & Decentralised Technologies
import BlockchainDecentralisedTechSection from './BlockchainDecentralisedTechPage/BlockchainDecentralisedTechSection';
import RevealSection from '../../components/common/RevealSection';

const AUTOPLAY_DELAY = 6500;

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((index) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }, []);

  const nextSlide = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const previousSlide = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [nextSlide, reduceMotion]);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') nextSlide();
    if (event.key === 'ArrowLeft') previousSlide();
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = touchStart.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 48) distance > 0 ? nextSlide() : previousSlide();
    touchStart.current = null;
  };

  const activeSlide = heroSlides[activeIndex];

  return (
    <section id="featured-technology" className="scroll-mt-20 bg-brand-navy" aria-label="Featured technology stories">
      <div className="w-full">
        <div
          onKeyDown={onKeyDown}
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={onTouchEnd}
          tabIndex="0"
          className="relative overflow-hidden border-b border-brand-cyan/20 bg-brand-navy select-none"
        >
          <div className="relative h-[calc(100vh-80px)] sm:h-[calc(100vh-92px)] min-h-[480px]">
            {/* Crystal-Clear 3D Cube Matrix with Dynamic Corner-to-Corner Wave Transition */}
            <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ perspective: '1400px' }}>
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={`${activeSlide.id}`}
                  className="absolute inset-0 grid w-full h-full"
                  style={{
                    gridTemplateColumns: 'repeat(16, minmax(0, 1fr))',
                    gridTemplateRows: 'repeat(9, minmax(0, 1fr))',
                  }}
                >
                  {Array.from({ length: 144 }, (_, i) => {
                    const ROWS = 9;
                    const COLS = 16;
                    const r = Math.floor(i / COLS);
                    const c = i % COLS;

                    // Dynamic corner origin based on activeIndex (0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right)
                    const cornerMode = activeIndex % 4;
                    let dist = 0;
                    if (cornerMode === 0) dist = r + c; // Top-Left to Bottom-Right
                    else if (cornerMode === 1) dist = r + (COLS - 1 - c); // Top-Right to Bottom-Left
                    else if (cornerMode === 2) dist = (ROWS - 1 - r) + c; // Bottom-Left to Top-Right
                    else dist = (ROWS - 1 - r) + (COLS - 1 - c); // Bottom-Right to Top-Left

                    // Crisp, clearly visible wave stagger delay
                    const delay = dist * 0.04;

                    return (
                      <div
                        key={`cube-${r}-${c}`}
                        className="relative w-full h-full overflow-visible"
                        style={{ perspective: '600px', transformStyle: 'preserve-3d' }}
                      >
                        <motion.div
                          className="w-full h-full relative"
                          style={{ transformStyle: 'preserve-3d' }}
                          initial={reduceMotion ? false : { rotateY: -180, scale: 0.82, opacity: 0 }}
                          animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                          exit={reduceMotion ? { opacity: 0 } : { rotateY: 180, scale: 0.82, opacity: 0 }}
                          transition={{
                            duration: reduceMotion ? 0.01 : 0.85,
                            delay: reduceMotion ? 0 : delay,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          {/* Front 3D Cube Face - 100% Original Aspect Ratio, Unstretched */}
                          <div
                            className="absolute -inset-[0.5px] overflow-hidden border-0 outline-none"
                            style={{
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(14px)',
                            }}
                          >
                            <div
                              className="absolute bg-cover bg-center"
                              style={{
                                width: `${COLS * 100}%`,
                                height: `${ROWS * 100}%`,
                                left: `${-c * 100}%`,
                                top: `${-r * 100}%`,
                                backgroundImage: `url("${activeSlide.image}")`,
                              }}
                            />
                          </div>
                          {/* Back 3D Cube Face for depth during rotation */}
                          <div
                            className="absolute -inset-[0.5px] bg-[#001C1F] border-0 outline-none"
                            style={{
                              backfaceVisibility: 'hidden',
                              transform: 'rotateY(180deg) translateZ(14px)',
                            }}
                          />
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-brand-navy/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-transparent to-brand-navy/10" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/60 to-transparent" />

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pb-20 pt-10 text-center sm:px-10 lg:px-14">
              <div className="mx-auto max-w-3xl pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSlide.id}-copy`}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    {/* Eyebrow 3D Fold Reveal */}
                    <div className="overflow-hidden mb-3" style={{ perspective: '800px' }}>
                      <motion.p
                        className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan sm:text-xs origin-top inline-block"
                        style={{ transformStyle: 'preserve-3d' }}
                        initial={reduceMotion ? false : { rotateX: -90, y: -16, opacity: 0 }}
                        animate={{ rotateX: 0, y: 0, opacity: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { rotateX: 90, y: 16, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0.01 : 1.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {activeSlide.eyebrow}
                      </motion.p>
                    </div>

                    {/* Heading 3D Fold Text Reveal (Word by Word) */}
                    <h2 className="font-display text-2xl font-extrabold leading-[1.16] tracking-[-0.03em] text-white xs:text-3xl sm:text-4xl lg:text-5xl flex flex-wrap justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-1 my-1">
                      {activeSlide.title.split(' ').map((word, wIdx) => (
                        <span key={`${activeSlide.id}-word-${wIdx}`} className="inline-block overflow-hidden py-0.5" style={{ perspective: '800px' }}>
                          <motion.span
                            className="inline-block origin-top will-change-transform"
                            style={{ transformStyle: 'preserve-3d' }}
                            initial={reduceMotion ? false : { rotateX: -90, y: -20, opacity: 0 }}
                            animate={{ rotateX: 0, y: 0, opacity: 1 }}
                            exit={reduceMotion ? { opacity: 0 } : { rotateX: 90, y: 20, opacity: 0 }}
                            transition={{
                              duration: reduceMotion ? 0.01 : 1.4,
                              delay: reduceMotion ? 0 : 0.18 + wIdx * 0.15,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            {word}
                          </motion.span>
                        </span>
                      ))}
                    </h2>

                    {/* Description 3D Fold Reveal */}
                    <div className="overflow-hidden mt-3 max-w-xl mx-auto" style={{ perspective: '800px' }}>
                      <motion.p
                        className="text-xs leading-6 text-brand-cyan/85 sm:text-base sm:leading-7 origin-top inline-block"
                        style={{ transformStyle: 'preserve-3d' }}
                        initial={reduceMotion ? false : { rotateX: -90, y: -16, opacity: 0 }}
                        animate={{ rotateX: 0, y: 0, opacity: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { rotateX: 90, y: 16, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0.01 : 1.5, delay: reduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {activeSlide.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-center sm:bottom-8 sm:left-10 sm:right-10 lg:left-14 lg:right-14 z-20">
              <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Choose featured story">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-label={`View slide ${index + 1}: ${slide.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(index);
                    }}
                    className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 focus-ring ${activeIndex === index ? 'w-10 bg-white/30 sm:w-14' : 'w-3 bg-white/35 hover:bg-white/70 sm:w-5'}`}
                  >
                    {activeIndex === index && (
                      <span className={`absolute inset-y-0 left-0 bg-brand-blue ${!reduceMotion ? 'slider-progress' : 'w-full'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home({
  onOpenSdpePage,
  onOpenIpPage,
  onOpenSpcPage,
  onOpenPdlPage,
  onOpenOpePage,
  onOpenOtPage,
  onOpenAiPage,
  onOpenCloudPage,
  onOpenDataAnalyticsPage,
  onOpenArchPage,
  onOpenApisPage,
  onOpenEntPage,
  onOpenGovPage,
  onOpenInvPage,
  onOpenEduPage,
  onOpenGlobalInfraPage,
  onOpenDevOpsPage,
  onOpenDigitalExpPage,
  onOpenRegulatoryPage
}) {
  return (
    <>
      <HeroSection />

      {/* 0. Introduction (Priority above-the-fold) */}
      <RevealSection priority>
        <IntroductionSection />
      </RevealSection>

      {/* 1. Software Development & Product Engineering (Priority above-the-fold) */}
      <RevealSection priority>
        <SoftwareDevelopmentProductEngineeringSection onOpenPage={onOpenSdpePage} />
      </RevealSection>

      {/* 2. Our Technology */}
      <RevealSection>
        <OurTechnologySection onOpenPage={onOpenOtPage} />
      </RevealSection>

      {/* 3. Our Product Ecosystem */}
      <RevealSection>
        <OurProductEcosystemSection onOpenPage={onOpenOpePage} />
      </RevealSection>

      {/* 4. Cybersecurity & Digital Security */}
      <RevealSection>
        <CybersecurityDigitalSecuritySection />
      </RevealSection>

      {/* 5. Artificial Intelligence & Intelligent Software */}
      <RevealSection>
        <ArtificialIntelligenceIntelligentSoftwareSection onOpenPage={onOpenAiPage} />
      </RevealSection>

      {/* 6. Cloud, SaaS & Digital Platforms */}
      <RevealSection>
        <CloudSaasDigitalPlatformsSection onOpenPage={onOpenCloudPage} />
      </RevealSection>

      {/* 7. Data, Analytics & Intelligence Technology */}
      <RevealSection>
        <DataAnalyticsIntelligenceTechnologySection onOpenPage={onOpenDataAnalyticsPage} />
      </RevealSection>

      {/* 8. Software Architecture & Product Engineering */}
      <RevealSection>
        <SoftwareArchitectureProductEngineeringSection onOpenPage={onOpenArchPage} />
      </RevealSection>

      {/* 9. Product Development Lifecycle */}
      <RevealSection>
        <ProductDevelopmentLifecycleSection onOpenPage={onOpenPdlPage} />
      </RevealSection>

      {/* 10. APIs, Integration & Digital Connectivity */}
      <RevealSection>
        <ApisIntegrationDigitalConnectivitySection onOpenPage={onOpenApisPage} />
      </RevealSection>

      {/* 11. Enterprise & Business Software Products */}
      <RevealSection>
        <EnterpriseBusinessSoftwareProductsSection onOpenPage={onOpenEntPage} />
      </RevealSection>

      {/* 12. Government & Public Technology */}
      <RevealSection>
        <GovernmentPublicTechnologySection onOpenPage={onOpenGovPage} />
      </RevealSection>

      {/* 13. Investigation, Legal & Institutional Technology */}
      <RevealSection>
        <InvestigationLegalInstitutionalTechnologySection onOpenPage={onOpenInvPage} />
      </RevealSection>

      {/* 14. Education, Training & Skill Development Technology */}
      <RevealSection>
        <EducationTrainingSkillDevelopmentTechnologySection onOpenPage={onOpenEduPage} />
      </RevealSection>

      {/* 15. Intellectual Property & Technology */}
      <RevealSection>
        <IntellectualPropertySection onOpenPage={onOpenIpPage} />
      </RevealSection>

      {/* 16. Software Product Commercialisation */}
      <RevealSection>
        <SoftwareProductCommercialisationSection onOpenPage={onOpenSpcPage} />
      </RevealSection>

      {/* 17. Global Infrastructure & Managed Services */}
      <RevealSection>
        <GlobalInfrastructureManagedServicesSection onOpenPage={onOpenGlobalInfraPage} />
      </RevealSection>

      {/* 18. DevOps & Continuous Delivery */}
      <RevealSection>
        <DevOpsContinuousDeliverySection onOpenPage={onOpenDevOpsPage} />
      </RevealSection>

      {/* 19. Digital Experience & UI/UX Design */}
      <RevealSection>
        <DigitalExperienceDesignSection onOpenPage={onOpenDigitalExpPage} />
      </RevealSection>

      {/* 20. Regulatory Compliance & Risk Governance */}
      <RevealSection>
        <RegulatoryComplianceGovernanceSection onOpenPage={onOpenRegulatoryPage} />
      </RevealSection>

      {/* 21. Quantum Security & Advanced Cryptography */}
      <RevealSection>
        <QuantumSecurityCryptographySection />
      </RevealSection>

      {/* 22. IoT, Smart Systems & Edge Computing */}
      <RevealSection>
        <IotSmartEdgeSystemsSection />
      </RevealSection>

      {/* 23. Blockchain & Decentralised Technologies */}
      <RevealSection>
        <BlockchainDecentralisedTechSection />
      </RevealSection>
    </>
  );
}
