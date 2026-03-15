import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AnimatedCounter } from './AnimatedCounter';
import { Typewriter } from './Typewriter';
import { MagneticWrapper } from './MagneticWrapper';
import { InfiniteMarquee } from './InfiniteMarquee';
import { TiltCard } from './TiltCard';
import { WordReveal } from './WordReveal';
import { projects } from '../../data/projects';

// const WORK_MARQUEE = [
//   '+65% Engagement', '2M+ Users', '15 Hires in 60 Days', '100% Retention',
//   '3 Hospitals Launched', 'Global Launch', '12 Designers Placed', '+40% Retention',
//   '150+ Projects', '500+ Placements', '98% Satisfaction', '50+ Clients',
// ];

interface WorkPageProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

type Filter = 'all' | 'design' | 'talent';

const stats = [
  { number: '150+', label: 'Projects Delivered', color: 'sky' },
  { number: '500+', label: 'Successful Placements', color: 'orange' },
  { number: '98%', label: 'Client Satisfaction', color: 'sky' },
  { number: '50+', label: 'Happy Clients', color: 'orange' },
];

const filters: { label: string; value: Filter }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Design', value: 'design' },
  { label: 'Talent', value: 'talent' },
];

export function WorkPage({ isDark, onNavigate }: WorkPageProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = projects.filter((p) => activeFilter === 'all' || p.category === activeFilter);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-sm font-semibold tracking-widest uppercase opacity-50">Our Work</span>
            <span className="opacity-30 text-sm">·</span>
            <Typewriter
              words={['Design Excellence', 'Talent Success', 'Measurable Impact', 'Real Results']}
              className="text-sm font-bold text-sky-600 dark:text-sky-400"
            />
          </motion.div>
          <motion.h1
            id="work-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight leading-[0.92] mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Work that{' '}
            <span className="bg-gradient-to-br from-sky-600 to-sky-800 dark:from-sky-300 dark:to-sky-500 bg-clip-text text-transparent">
              speaks
            </span>{' '}
            for itself
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="text-lg sm:text-xl opacity-65 leading-relaxed max-w-2xl"
          >
            <WordReveal
              text="A curated showcase of our design projects and successful talent placements that have driven measurable, real-world business results."
              delay={0.3}
              stagger={0.04}
            />
          </motion.p>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-12 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-label="Impact statistics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.number}
                label={stat.label}
                numberClassName={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 ${stat.color === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      {/* <div className={`py-5 border-y border-current/8 ${isDark ? 'bg-white/3' : 'bg-black/2'}`} aria-hidden="true">
        <InfiniteMarquee speed={32}>
          {WORK_MARQUEE.map((item) => (
            <span key={item} className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase opacity-35 mr-10">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block flex-shrink-0" />
              {item}
            </span>
          ))}
        </InfiniteMarquee>
      </div> */}

      {/* ── PROJECTS ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between flex-wrap gap-4 mb-12 sm:mb-16"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-1">Portfolio</p>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Featured projects</h2>
            </div>
            <div
              className={`flex items-center gap-1 p-1 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/4 border-gray-200'}`}
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:focus:ring-sky-400 min-h-[40px] ${
                    activeFilter === f.value
                      ? isDark
                        ? 'bg-white/15 text-white shadow-sm'
                        : 'bg-white text-gray-900 shadow-sm'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  aria-pressed={activeFilter === f.value}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className={`group ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <TiltCard className={`relative overflow-hidden rounded-2xl border transition-all duration-500 h-full ${
                    isDark
                      ? 'bg-white/4 border-white/8 hover:border-white/20'
                      : 'bg-white/70 border-gray-100 hover:border-gray-200 hover:shadow-xl'
                  } ${project.category === 'design' ? 'hover:shadow-sky-500/10' : 'hover:shadow-orange-500/10'}`}>
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 sm:h-56">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Category badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.category === 'design'
                          ? 'bg-sky-600/80 text-white'
                          : 'bg-orange-600/80 text-white'
                      }`}>
                        {project.label}
                      </div>
                      {/* Result badge */}
                      <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${isDark ? 'bg-white/15 text-white' : 'bg-white/90 text-gray-900'}`}>
                        {project.result}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-sm opacity-65 leading-relaxed mb-5">{project.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                                isDark ? 'bg-white/8 text-white/60' : 'bg-black/5 text-gray-600'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => onNavigate(`work/${project.slug}`)}
                          className={`flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5 ${
                            project.category === 'design'
                              ? 'text-sky-600 dark:text-sky-400'
                              : 'text-orange-600 dark:text-orange-400'
                          }`}
                          aria-label={`View ${project.title} case study`}
                        >
                          <span>Case Study</span>
                          <ArrowRight size={13} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28" aria-labelledby="work-cta-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 lg:p-20 ${
              isDark
                ? 'bg-gradient-to-br from-sky-950 via-sky-900/80 to-orange-950/50 border border-sky-800/50'
                : 'bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900'
            }`}
          >
            <div className="absolute inset-0 opacity-10" aria-hidden="true"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-3">Next project</p>
                <h2 id="work-cta-heading" className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                  Let's create something great
                </h2>
                <p className="text-lg opacity-70 max-w-lg leading-relaxed">
                  Ready to start your next project or find exceptional talent? Let's talk.
                </p>
              </div>
              <MagneticWrapper>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </MagneticWrapper>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
