import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Terminal } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Timeline"
      className="py-20 sm:py-28 relative bg-[#0C0C14] border-t border-[#222338]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#222338] text-xs font-mono text-[#8B7EFF]">
            <span>TRACK RECORD & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Commercial shipping experience and engineering milestones.
          </h2>
          <p className="text-base text-[#A0A3B1]">
            Full-time enterprise integration leadership alongside bespoke client consulting and foundational software engineering training.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l-2 border-[#222338] ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#12121E] border-2 border-[#6D5EF5] flex items-center justify-center shadow-[0_0_12px_rgba(109,94,245,0.6)] group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#12121E] border border-[#222338] group-hover:border-[#6D5EF5]/50 p-6 sm:p-8 transition-all duration-300 space-y-5">
                {/* Role and Period Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222338] pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#A0A3B1] mt-1">
                      <span className="text-[#8B7EFF] font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#6D5EF5]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A2A] border border-[#2B2C44] text-xs font-mono text-[#D0CCFF] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#D1D5DB] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Delivered Projects Checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A0A3B1]">
                    Key Deliverables & Architectural Milestones:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-[#C5C8D8] leading-relaxed bg-[#0E0E18] p-3 rounded-xl border border-[#1C1D2C]"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#6D5EF5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used in this role */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded bg-[#0A0A10] border border-[#222338] text-[11px] font-mono text-[#A0A3B1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
