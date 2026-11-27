import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Cpu,
  Cloud,
  Layers3,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  Volume2,
  VolumeX,
  GitBranch as Github,
} from 'lucide-react'

const GITHUB = 'https://github.com/Beast-lucifer-666'
const LINKEDIN = 'https://www.linkedin.com/in/arunabh-das-4bb4a8352/'
const EMAIL = 'arunabhdas2005@gmail.com'
const PHONE = '+91 9434845512'

const projects = [
  {
    n: '01',
    title: 'Volt',
    type: 'IoT · Android · Energy Monitoring',
    desc: 'A smart energy monitoring and control system built around ESP32, PZEM-004T, relay modules, OLED display and Firebase Realtime Database, with a companion Android app.',
    tags: ['ESP32', 'Firebase', 'Android', 'IoT', 'C++'],
    link: 'https://github.com/Beast-lucifer-666/Volt-v1',
  },
  {
    n: '02',
    title: 'Cyber Sentinel',
    type: 'Python · Flask · DevOps',
    desc: 'A Flask-based cybersecurity project developed alongside a cloud-native toolchain and deployment workflow.',
    tags: ['Python', 'Flask', 'Docker', 'AWS', 'CI/CD'],
    link: GITHUB,
  },
  {
    n: '03',
    title: 'Daily Motivation',
    type: 'Frontend · React',
    desc: 'A daily motivation experience with time-aware greetings, quotes, a live clock, weather, theme switching and animated visual details.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    link: GITHUB,
  },
  {
    n: '04',
    title: 'Banking Sector Production Build',
    type: 'Cloud · Kubernetes · Deployment',
    desc: 'A production-style banking application deployment project exploring Kubernetes workloads, MySQL, service exposure, health checks and rollout strategies.',
    tags: ['AWS', 'Kubernetes', 'Docker', 'MySQL', 'CI/CD'],
    link: 'https://github.com/Beast-lucifer-666/BANKING-SECTOR-PRODUCTION-BUILD',
  },
]

const skills = [
  { icon: Code2, title: 'Programming', items: ['C', 'Java', 'Python', 'JavaScript'] },
  { icon: Layers3, title: 'Frontend & Apps', items: ['React', 'Vite', 'HTML & CSS', 'Android'] },
  { icon: Cpu, title: 'IoT & Backend', items: ['ESP32', 'Firebase', 'Flask', 'REST APIs'] },
  { icon: Cloud, title: 'Cloud & Data', items: ['AWS', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'CI/CD'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

function StarField({ count = 28 }) {
  return (
    <div className="yn-stars" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} style={{ '--i': i + 1 }} />
      ))}
    </div>
  )
}

function MovingRedThread({ d, color = '#e63950' }) {
  return (
    <svg className="yn-thread-svg" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="16 10"
        initial={{ pathLength: 0, opacity: 0.25 }}
        whileInView={{ pathLength: 1, opacity: 0.92 }}
        viewport={{ once: true, amount: 0.15 }}
        animate={{ strokeDashoffset: [0, -104] }}
        transition={{
          pathLength: { duration: 1.8, ease: 'easeInOut' },
          strokeDashoffset: { duration: 4, repeat: Infinity, ease: 'linear' },
        }}
      />
    </svg>
  )
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="yn-cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <motion.div
        className="yn-cursor-ring"
        animate={{ left: pos.x, top: pos.y }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.4 }}
      />
    </>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef(null)
  const ctxRef = useRef(null)
  const timerRef = useRef(null)

  // Disable right-click, text selection, copy, cut, and drag
  useEffect(() => {
    const block = (e) => e.preventDefault()
    document.addEventListener('contextmenu', block)
    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    document.addEventListener('selectstart', block)
    document.addEventListener('dragstart', block)
    return () => {
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
      document.removeEventListener('selectstart', block)
      document.removeEventListener('dragstart', block)
    }
  }, [])

  const stopSynth = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {})
      ctxRef.current = null
    }
  }

  const startSparkleSynth = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    ctxRef.current = ctx
    // Gentle Sparkle-inspired piano arpeggio notes (Hz)
    const notes = [523.25, 659.25, 783.99, 987.77, 783.99, 659.25, 587.33, 880.0]
    let step = 0
    const playNote = () => {
      if (!ctxRef.current) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = notes[step % notes.length]
      gain.gain.setValueAtTime(0.001, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.72)
      step += 1
    }
    playNote()
    timerRef.current = setInterval(playNote, 420)
  }

  const toggleMusic = async () => {
    if (musicPlaying) {
      if (audioRef.current) audioRef.current.pause()
      stopSynth()
      setMusicPlaying(false)
      return
    }
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('./sparkle.mp3')
        audioRef.current.loop = true
      }
      await audioRef.current.play()
      setMusicPlaying(true)
    } catch {
      startSparkleSynth()
      setMusicPlaying(true)
    }
  }

  return (
    <div className="yn-app">
      <CustomCursor />

      {/* Floating Glassmorphic Pill Navbar */}
      <header className="yn-nav-wrap">
        <nav className="yn-nav">
          <a className="yn-brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="yn-brand-dot" />
            <span>Arunabh Das</span>
          </a>

          <button
            className="yn-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className={`yn-nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Constellation</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button type="button" className="yn-music-btn" onClick={toggleMusic}>
              {musicPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
              {musicPlaying ? 'Sparkle On' : 'Play Sparkle'}
            </button>
            <a className="yn-nav-cta" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      </header>

      {/* 1. Hero Scene */}
      <section id="home" className="yn-scene yn-sky-hero">
        <div className="yn-comet" />
        <MovingRedThread d="M -40 420 C 260 120, 520 580, 820 260 C 1040 30, 1260 360, 1490 190" />

        <div className="yn-container">
          <motion.div
            className="yn-hero-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div>
              <div className="yn-profile-wrap">
                <img className="yn-profile-img" src="./profile.png" alt="Arunabh Das" />
              </div>
            </div>
            <div className="yn-hero-kicker">
              <Sparkles size={14} /> EVERY LAYER, ONE THREAD · 2027 GRADUATE
            </div>
            <h1 className="yn-hero-title">Arunabh Das</h1>
            <p className="yn-hero-sub">
              Computer Science &amp; Engineering student building across software, IoT, and cloud
              technologies — turning ideas into real, connected systems.
            </p>
            <div className="yn-hero-actions">
              <a className="yn-btn yn-btn-primary" href="#projects">
                Explore My Work <ArrowUpRight size={16} />
              </a>
              <a className="yn-btn yn-btn-glass" href="#contact">
                Let&apos;s Connect <ArrowDown size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Twilight Transition & Story */}
      <section id="journey" className="yn-scene yn-sky-night">
        <StarField count={32} />
        <div className="yn-comet" style={{ top: '18%', right: '8%' }} />
        <MovingRedThread d="M -20 350 Q 420 120 720 350 T 1460 280" color="rgba(255,255,255,0.65)" />

        <div className="yn-container">
          <motion.div
            className="yn-story-quote"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="yn-eyebrow">01 / THE THREAD</div>
            <h2 className="yn-serif-heading">
              Somewhere between an Idea and Production...
            </h2>
            <p className="yn-body-lead">
              The front end and the back end. Hardware and cloud. Two worlds — one space where they
              meet. Every product begins with a spark, and I love building the bridge that brings it
              to life.
            </p>
          </motion.div>

          <motion.div
            className="yn-about-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="yn-glass-card">
              <div className="yn-eyebrow">B.TECH · EXPECTED JULY 2027</div>
              <h3 className="yn-serif-heading" style={{ fontSize: 32, marginBottom: 12 }}>
                Bengal College of Engineering &amp; Technology
              </h3>
              <p className="yn-body-lead" style={{ fontSize: 15, marginBottom: 16 }}>
                Pursuing Computer Science &amp; Engineering in Durgapur, West Bengal. My work spans
                ESP32-based energy monitoring, React interfaces, and cloud-native Kubernetes
                deployments.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#cdd7ee' }}>
                <GraduationCap size={18} /> Undergraduate · <MapPin size={16} /> West Bengal, India
              </div>
            </div>

            <div className="yn-stats-grid">
              <div className="yn-stat-box">
                <strong>2027</strong>
                <span>Expected graduation</span>
              </div>
              <div className="yn-stat-box">
                <strong>04+</strong>
                <span>Highlighted projects</span>
              </div>
              <div className="yn-stat-box">
                <strong>03</strong>
                <span>Software · IoT · Cloud</span>
              </div>
              <div className="yn-stat-box">
                <strong>∞</strong>
                <span>Things left to build</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Skills Constellation */}
      <section id="skills" className="yn-scene yn-sky-constellation">
        <StarField count={40} />
        <div className="yn-container">
          <motion.div
            className="yn-story-quote"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="yn-eyebrow">02 / TOOLKIT</div>
            <h2 className="yn-serif-heading">
              Every skill, a star. Together, a constellation.
            </h2>
          </motion.div>

          <div className="yn-skills-grid">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                className="yn-skill-node"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08 }}
              >
                <s.icon size={22} color="#7ce8ff" />
                <h3>{s.title}</h3>
                <div className="yn-tag-list">
                  {s.items.map((item) => (
                    <span className="yn-tag" key={item}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="yn-scene yn-sky-dusk">
        <MovingRedThread d="M -30 520 C 320 220, 720 620, 1470 220" />
        <div className="yn-container">
          <motion.div
            className="yn-story-quote"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="yn-eyebrow">03 / SELECTED WORK</div>
            <h2 className="yn-serif-heading">Every project, a station on the line.</h2>
          </motion.div>

          <div className="yn-projects-grid">
            {projects.map((p, i) => (
              <motion.article
                key={p.n}
                className="yn-project-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedProject(p)}
              >
                <div className="yn-project-banner">
                  <span className="yn-tag">{p.n} / 04</span>
                  <span className="yn-tag">{p.type}</span>
                </div>
                <div className="yn-project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="yn-tag-list" style={{ marginTop: 'auto' }}>
                    {p.tags.map((t) => (
                      <span className="yn-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing / Contact Scene */}
      <section id="contact" className="yn-scene yn-sky-closing">
        <StarField count={26} />
        <div className="yn-comet" style={{ top: '20%', right: '16%' }} />
        <div className="yn-container">
          <motion.div
            className="yn-story-quote yn-glass-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="yn-eyebrow">04 / WHAT&apos;S NEXT?</div>
            <h2 className="yn-serif-heading">Until Our Paths Cross Again</h2>
            <p className="yn-body-lead">
              I&apos;m always open to connecting with people building thoughtful software, IoT, and
              cloud systems.
            </p>
            <div className="yn-hero-actions" style={{ marginBottom: 22 }}>
              <a className="yn-btn yn-btn-light" href={LINKEDIN} target="_blank" rel="noreferrer">
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
              <a className="yn-btn yn-btn-outline" href="./cv.pdf" target="_blank" rel="noreferrer">
                Download CV <ArrowDown size={16} />
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 18, fontSize: 13, color: '#cdd7ee' }}>
              <a href={`mailto:${EMAIL}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Mail size={15} /> {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Phone size={15} /> {PHONE}
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Github size={15} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="yn-footer">
        Designed &amp; built with React · © {new Date().getFullYear()} Arunabh Das
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="yn-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="yn-modal"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span className="yn-eyebrow" style={{ marginBottom: 0 }}>{selectedProject.type}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{ background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              <h3 className="yn-serif-heading" style={{ fontSize: 36, marginBottom: 12 }}>
                {selectedProject.title}
              </h3>
              <p className="yn-body-lead" style={{ fontSize: 15, marginBottom: 20 }}>
                {selectedProject.desc}
              </p>
              <div className="yn-tag-list" style={{ marginBottom: 24 }}>
                {selectedProject.tags.map((t) => (
                  <span className="yn-tag" key={t}>{t}</span>
                ))}
              </div>
              <a
                className="yn-btn yn-btn-light"
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <ExternalLink size={15} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
