import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AnimatedCounter } from './AnimatedCounter';
import { TiltCard } from './TiltCard';
import { MagneticWrapper } from './MagneticWrapper';
import { WordReveal } from './WordReveal';
import { projects } from '../../data/projects';

interface CaseStudyPageProps {
  slug: string;
  isDark: boolean;
  onNavigate: (page: string) => void;
}

export function CaseStudyPage({ slug, isDark, onNavigate }: CaseStudyPageProps) {
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Fallback if slug not found
  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-xl font-semibold opacity-60">Case study not found.</p>
        <button
          onClick={() => onNavigate('work')}
          className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Work
        </button>
      </div>
    );
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const accentColor = project.category === 'design' ? 'sky' : 'orange';
  const accentClass = accentColor === 'sky'
    ? 'text-sky-600 dark:text-sky-400'
    : 'text-orange-600 dark:text-orange-400';
  const accentBg = accentColor === 'sky'
    ? 'bg-sky-600 dark:bg-sky-500'
    : 'bg-orange-600 dark:bg-orange-500';

  return (
    <>
      {/* ── BREADCRUMB + HERO ─────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-0">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 mb-6 text-sm"
            aria-label="Breadcrumb"
          >
            <button
              onClick={() => onNavigate('work')}
              className={`font-medium opacity-50 hover:opacity-100 transition-opacity ${accentClass} hover:opacity-100`}
            >
              Work
            </button>
            <ChevronRight size={14} className="opacity-30 flex-shrink-0" aria-hidden="true" />
            <span className="font-medium opacity-70 truncate">{project.title}</span>
          </motion.nav>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] sm:aspect-[16/7]"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Overlaid content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${accentBg}`}>
                  {project.label}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-white/15 text-white">
                  {project.result}
                </span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl"
              >
                {project.title}
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECT META ─────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-8 border-b border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-label="Project details">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Client', value: project.client },
            { label: 'Industry', value: project.industry },
            { label: 'Duration', value: project.duration },
            { label: 'Year', value: project.year },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-1">{item.label}</p>
              <p className="font-semibold text-base">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW + DELIVERABLES ───────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase opacity-40 mb-3">Overview</p>
              <h2 id="overview-heading" className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                About this project
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg opacity-65 leading-relaxed"
            >
              <WordReveal text={project.overview} delay={0.25} stagger={0.03} />
            </motion.p>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`p-7 rounded-2xl border ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm'}`}
            >
              <p className="text-sm font-semibold tracking-widest uppercase opacity-40 mb-4">Deliverables</p>
              <ul className="space-y-3" role="list">
                {project.deliverables.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${accentClass}`} aria-hidden="true" />
                    <span className="opacity-80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE ────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${accentColor === 'sky' ? 'bg-sky-600/5 dark:bg-sky-400/5' : 'bg-orange-600/5 dark:bg-orange-400/5'}`} aria-labelledby="challenge-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-40 mb-3">The Challenge</p>
            <h2 id="challenge-heading" className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
              What we were up against
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <span
              className={`absolute -top-8 -left-4 text-[8rem] font-black leading-none select-none pointer-events-none ${accentColor === 'sky' ? 'text-sky-600/10 dark:text-sky-400/10' : 'text-orange-600/10 dark:text-orange-400/10'}`}
              aria-hidden="true"
            >
              "
            </span>
            <p className="text-lg sm:text-xl leading-relaxed opacity-75 relative">
              {project.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-40 mb-3">Our Approach</p>
            <h2 id="approach-heading" className="text-2xl sm:text-3xl font-bold tracking-tight">
              How we solved it
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.approachSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
              >
                <TiltCard className={`relative p-7 sm:p-8 rounded-2xl border h-full overflow-hidden ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm hover:shadow-md'}`}>
                  <span
                    className={`absolute top-4 right-5 text-7xl font-black opacity-[0.06] select-none pointer-events-none leading-none ${accentColor === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <span className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 ${accentClass}`}>
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm opacity-65 leading-relaxed">{step.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────────────────────── */}
      <section className={`px-4 sm:px-6 lg:px-8 py-12 border-y border-current/8 ${isDark ? 'bg-white/2' : 'bg-black/2'}`} aria-label="Project results">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm font-semibold tracking-widest uppercase opacity-40 mb-2">Results</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">The impact</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="text-center"
              >
                <AnimatedCounter
                  value={metric.value}
                  label={metric.label}
                  numberClassName={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 ${metric.color === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
      {project.testimonial && (
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20" aria-label="Client testimonial">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative p-8 sm:p-12 rounded-3xl border text-center ${isDark ? 'bg-white/4 border-white/8' : 'bg-white/80 border-gray-100 shadow-sm'}`}
            >
              <span
                className={`absolute top-6 left-8 text-7xl font-black opacity-10 leading-none select-none pointer-events-none ${accentColor === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-orange-600 dark:text-orange-400'}`}
                aria-hidden="true"
              >
                "
              </span>
              <blockquote className="text-lg sm:text-xl leading-relaxed opacity-80 mb-8 italic relative">
                {project.testimonial.quote}
              </blockquote>
              <div>
                <p className="font-bold text-base">{project.testimonial.author}</p>
                <p className="text-sm opacity-55">{project.testimonial.role}, {project.testimonial.company}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── PREV / NEXT ───────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16" aria-label="Navigate between case studies">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest uppercase opacity-40 mb-6 text-center"
          >
            More Case Studies
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { project: prevProject, label: 'Previous', icon: <ArrowLeft size={16} /> },
              { project: nextProject, label: 'Next', icon: <ArrowRight size={16} /> },
            ].map(({ project: adj, label, icon }, i) => (
              <motion.div
                key={adj.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard
                  className={`group cursor-pointer overflow-hidden rounded-2xl border h-full transition-all duration-300 ${isDark ? 'bg-white/4 border-white/8 hover:border-white/20' : 'bg-white/80 border-gray-100 hover:shadow-lg hover:border-gray-200'}`}
                  onClick={() => onNavigate(`work/${adj.slug}`)}
                >
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={adj.image}
                      alt={adj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${adj.category === 'design' ? 'bg-sky-600/80' : 'bg-orange-600/80'}`}>
                      {adj.label}
                    </span>
                  </div>
                  <div className="p-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase opacity-40 mb-0.5">{label}</p>
                      <p className="font-bold text-base">{adj.title}</p>
                    </div>
                    <span className={`flex-shrink-0 transition-transform duration-200 ${i === 0 ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} opacity-50`}>
                      {icon}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
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
                <p className="text-sm font-semibold tracking-widest uppercase opacity-60 mb-3">Start your project</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                  Ready to get results like this?
                </h2>
                <p className="text-lg opacity-70 max-w-lg leading-relaxed">
                  Let's talk about your next project or talent challenge.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <MagneticWrapper>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-sky-900 rounded-2xl hover:bg-orange-50 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 min-h-[52px]"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </MagneticWrapper>
                <MagneticWrapper>
                  <button
                    onClick={() => onNavigate('work')}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-white/30 min-h-[52px]"
                  >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span>All Work</span>
                  </button>
                </MagneticWrapper>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
