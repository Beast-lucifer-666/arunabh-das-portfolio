import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, GitBranch as Github, Mail, Menu, X, Code2, Cpu, Cloud, Terminal, ExternalLink, GraduationCap, Sparkles, Layers3, MapPin } from 'lucide-react'

const GITHUB = 'https://github.com/Beast-lucifer-666'
const LINKEDIN = 'https://www.linkedin.com/in/arunabh-das-4bb4a8352/'
const EMAIL = 'arunabhdas2005@gmail.com'
const PHONE = '9434845512'
const projects = [
  { n:'01', title:'Volt', type:'IoT · Android · Energy Monitoring', desc:'A smart energy monitoring and control system built around ESP32, PZEM-004T, relay modules, OLED display and Firebase Realtime Database, with a companion Android app.', tags:['ESP32','Firebase','Android','IoT','C++'], link:'https://github.com/Beast-lucifer-666/Volt-v1', featured:true },
  { n:'02', title:'Cyber Sentinel', type:'Python · Flask · DevOps', desc:'A Flask-based cybersecurity project developed alongside a cloud-native toolchain and deployment workflow.', tags:['Python','Flask','Docker','AWS','CI/CD'], link:GITHUB, featured:false },
  { n:'03', title:'Daily Motivation', type:'Frontend · React', desc:'A daily motivation experience with time-aware greetings, quotes, a live clock, weather, theme switching and animated visual details.', tags:['React','Vite','JavaScript','CSS'], link:GITHUB, featured:false },
  { n:'04', title:'Banking Sector Production Build', type:'Cloud · Kubernetes · Deployment', desc:'A production-style banking application deployment project exploring Kubernetes workloads, MySQL, service exposure, health checks and rollout strategies.', tags:['AWS','Kubernetes','Docker','MySQL','CI/CD'], link:'https://github.com/Beast-lucifer-666/BANKING-SECTOR-PRODUCTION-BUILD', featured:false },
]
const skills = [
  {icon:Code2, title:'Programming', items:['C','Java','Python','JavaScript']},
  {icon:Layers3, title:'Frontend & Apps', items:['React','Vite','HTML & CSS','Android Development']},
  {icon:Cpu, title:'IoT & Backend', items:['ESP32','Firebase','Flask','REST concepts']},
  {icon:Cloud, title:'Cloud & Data', items:['AWS','Docker','Kubernetes','SQL','MongoDB','CI/CD']},
]
const reveal = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}} }
function Section({id,eyebrow,title,children}) { return <section id={id} className="section"><motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.14}}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></motion.div>{children}</section> }
function App(){
 const [menu,setMenu]=useState(false)
 const close=()=>setMenu(false)
 return <div className="app">
  <div className="noise"/>
  <header className="nav wrap">
   <a className="brand" href="#home" onClick={close}><span className="brand-mark">A<span>.</span></span><span>ARUNABH DAS</span></a>
   <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
   <nav className={menu?'nav-links open':'nav-links'}>{[['About','#about'],['Projects','#projects'],['Skills','#skills'],['Education','#education'],['Contact','#contact']].map(([t,h])=><a key={t} href={h} onClick={close}>{t}</a>)}<a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a></nav>
  </header>
  <main>
   <section className="hero wrap" id="home">
    <div className="hero-copy">
     <motion.div className="availability" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.15}}><span className="pulse"/> OPEN TO OPPORTUNITIES <span className="availability-dot">/</span> 2027 GRADUATE</motion.div>
     <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}}>Building ideas<br/>into <span className="gradient-text">real systems.</span></motion.h1>
     <motion.p className="hero-sub" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>I'm <strong>Arunabh Das</strong>, a Computer Science & Engineering student who enjoys building across software, IoT, and cloud technologies.</motion.p>
     <motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.65}}><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Let's connect <ArrowDown size={16}/></a></motion.div>
     <motion.div className="hero-social" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><span>·</span><a href={LINKEDIN} target="_blank" rel="noreferrer">in LinkedIn</a><span>·</span><span><MapPin size={15}/> West Bengal, India</span></motion.div>
    </div>
    <motion.div className="hero-art" initial={{opacity:0,scale:.88,rotate:3}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1,delay:.3}}>
     <img className="profile-photo" src="./profile.png" alt="Arunabh Das"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core-card"><div className="core-top"><span>BUILD / DEPLOY / REPEAT</span><span className="core-live">● LIVE</span></div><div className="terminal-mark"><Terminal size={48}/></div><div className="code-lines"><i/><i/><i/><i/></div><div className="core-bottom"><span>ARUNABH.DAS</span><span>DEV_2027</span></div></div>
     <div className="float-chip chip-a"><Cpu size={16}/> IoT & Embedded</div><div className="float-chip chip-b"><Cloud size={16}/> Cloud & DevOps</div><div className="float-chip chip-c"><Code2 size={16}/> Full-stack mindset</div>
    </motion.div>
    <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
   </section>
   <Section id="about" eyebrow="01 / A LITTLE ABOUT ME" title={<>Curious by nature.<br/><span className="muted-title">Builder by practice.</span></>}>
    <div className="about-grid"><motion.div className="about-lead" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><p>I'm pursuing a <strong>B.Tech in Computer Science & Engineering</strong> at Bengal College of Engineering and Technology, Durgapur.</p><p>I like working at the intersection of software and hardware—turning ideas into working applications, connected devices, and deployable systems. My projects have taken me from ESP32-based energy monitoring to React interfaces and cloud-native deployments.</p><p>I'm continuing to strengthen my engineering fundamentals while exploring practical ways to build reliable, useful technology.</p></motion.div>
     <motion.div className="about-stats" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="stat"><strong>2027</strong><span>Expected graduation</span></div><div className="stat"><strong>04<span>+</span></strong><span>Highlighted projects</span></div><div className="stat"><strong>3</strong><span>Core areas: software, IoT, cloud</span></div><div className="stat"><strong>∞</strong><span>Things left to build</span></div></motion.div></div>
   </Section>
   <Section id="projects" eyebrow="02 / SELECTED WORK" title={<>Projects with a <span className="gradient-text">purpose.</span></>}>
    <div className="project-grid">{projects.map((p,i)=><motion.article className={'project-card '+(p.featured?'featured':'')} key={p.n} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.12}} transition={{delay:i*.07}}><div className="project-top"><span className="project-number">{p.n} / 04</span><a href={p.link} target="_blank" rel="noreferrer" aria-label={'Open '+p.title}><ArrowUpRight/></a></div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.link} target="_blank" rel="noreferrer">View project <ExternalLink size={14}/></a></motion.article>)}</div>
   </Section>
   <Section id="skills" eyebrow="03 / TOOLKIT" title={<>Tools I work <span className="gradient-text">with.</span></>}>
    <div className="skills-grid">{skills.map((s,i)=><motion.div className="skill-card" key={s.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.08}}><div className="skill-icon"><s.icon size={21}/></div><h3>{s.title}</h3><div className="skill-tags">{s.items.map(x=><span key={x}>{x}</span>)}</div></motion.div>)}</div>
    <p className="skills-note"><Sparkles size={15}/> Tools and technologies reflect my project experience and ongoing learning.</p>
   </Section>
   <Section id="education" eyebrow="04 / EDUCATION" title="The learning journey.">
    <motion.div className="education-card" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="edu-icon"><GraduationCap size={26}/></div><div className="edu-content"><div className="edu-period">B.TECH · EXPECTED JULY 2027</div><h3>Bengal College of Engineering and Technology</h3><p>Computer Science & Engineering</p><span>Durgapur, West Bengal, India</span></div><div className="edu-side">UNDERGRADUATE</div></motion.div>
   </Section>
   <section id="contact" className="contact-section wrap"><motion.div className="contact-box" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="eyebrow">05 / WHAT'S NEXT?</div><h2>Have a project or<br/><span className="gradient-text">an opportunity?</span></h2><p>I'm always interested in connecting with people building thoughtful technology. Let's talk.</p><div className="contact-details"><a href={'mailto:'+EMAIL}><Mail size={15}/> {EMAIL}</a><a href={'tel:'+PHONE}><span>☎</span> +91 {PHONE}</a></div><div className="contact-links"><a className="button primary" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a><a className="button secondary" href="./cv.pdf" target="_blank" rel="noreferrer">Download CV <ArrowDown size={16}/></a></div><div className="contact-orb"/></motion.div></section>
  </main>
  <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ARUNABH DAS</span></a><span>Designed & built with React. © {new Date().getFullYear()} Arunabh Das.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
 </div>
}
export default App

