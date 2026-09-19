/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PositioningStatement from './components/PositioningStatement';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import AchievementsSection from './components/AchievementsSection';
import OpenSourceSection from './components/OpenSourceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section with IntersectionObserver for responsive navigation highlight
  useEffect(() => {
    const sectionIds = [
      'hero',
      'positioning',
      'about',
      'skills',
      'projects',
      'experience',
      'achievements',
      'opensource',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F3F4F6] selection:bg-[#6D5EF5]/30 selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Semantic Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero & Interactive Agent Orchestrator */}
        <Hero />

        {/* 2. Bold Positioning Statement */}
        <PositioningStatement />

        {/* 3. About & Systems Architect Bio */}
        <AboutSection />

        {/* 4. Categorized Skills & Matrix */}
        <SkillsSection />

        {/* 5. Case Studies (Problem -> Approach -> Result) */}
        <ProjectsSection />

        {/* 6. Experience & Animated Timeline */}
        <ExperienceTimeline />

        {/* 7. Achievements & Credibility Full-Bleed Panels */}
        <AchievementsSection />

        {/* 8. Open Source Tools & PyPI/npm packages */}
        <OpenSourceSection />

        {/* 9. Contact & Magnetic CTA */}
        <ContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
