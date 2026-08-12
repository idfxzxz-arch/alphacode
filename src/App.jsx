import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUp, Check, ChevronDown, ChevronRight, Code2, Copy, ExternalLink, Heart, Instagram, Menu, MessageCircle, Moon, Palette, Pause, Phone, Play, SlidersHorizontal, Smartphone, Sparkles, Sun, X, Zap } from 'lucide-react'

const services = [
  { icon: Code2, title: { id: 'Website Development', en: 'Website Development' }, text: { id: 'Website cepat, responsif, dan punya karakter yang kuat.', en: 'Fast, responsive websites with a strong and memorable character.' }, tone: 'blue', url: 'https://rt-rw-beryl.vercel.app' },
  { icon: Smartphone, title: { id: 'Website UMKM', en: 'Small Business Websites' }, text: { id: 'Etalase digital yang menarik agar produk lokal makin mudah ditemukan.', en: 'Engaging digital storefronts that help local products get discovered.' }, tone: 'pink', url: 'https://banana-three-omega.vercel.app/' },
  { icon: Palette, title: { id: 'UI/UX Design', en: 'UI/UX Design' }, text: { id: 'Desain yang cantik, jelas, dan benar-benar memudahkan pengguna.', en: 'Beautiful, clear interfaces that genuinely make things easier for users.' }, tone: 'yellow', url: 'https://asoka-chi.vercel.app/' },
  { icon: Zap, title: { id: 'Project Mahasiswa', en: 'Student Projects' }, text: { id: 'Pendampingan project web dan tugas kuliah dari konsep sampai siap presentasi.', en: 'Web project guidance from the first concept through presentation day.' }, tone: 'purple', url: 'https://kkn-kappa.vercel.app' },
]

const steps = [
  { number: '01', title: { id: 'Ngobrol dulu', en: 'Let’s talk' }, text: { id: 'Ceritakan ide, kebutuhan, dan mimpi besarmu. Kami pendengar yang baik.', en: 'Tell us about your ideas, needs, and big dreams. We are good listeners.' } },
  { number: '02', title: { id: 'Racik solusinya', en: 'Shape the solution' }, text: { id: 'Kami susun strategi, desain, dan teknologi yang paling pas.', en: 'We craft the right strategy, design, and technology for your needs.' } },
  { number: '03', title: { id: 'Waktunya meluncur!', en: 'Ready to launch!' }, text: { id: 'Setelah semua terasa mantap, produkmu siap menyapa dunia.', en: 'Once everything feels right, your product is ready to meet the world.' } },
]

const projects = [
  { title: 'Banana Krezzz', category: { id: 'Kuliner & Oleh-Oleh', en: 'Food & Souvenirs' }, url: 'https://banana-three-omega.vercel.app/', image: '/projects/banana.webp', color: '#c98712', soft: '#fff3cf' },
  { title: 'Bakpia Raizhel', category: { id: 'Oleh-Oleh Khas', en: 'Local Souvenirs' }, url: 'https://bakpia-raizhel.vercel.app/', image: '/projects/bakpia.webp', color: '#a4513d', soft: '#f9e7e1' },
  { title: 'Jadah Tempe', category: { id: 'Produk Kuliner', en: 'Culinary Products' }, url: 'https://jadah-tempe.vercel.app/', image: '/projects/jadah.webp', color: '#537c3f', soft: '#e9f3e4' },
  { title: 'Ubigo Karanganyar', category: { id: 'UMKM Lokal', en: 'Local Business' }, url: 'https://obigo.vercel.app/', image: '/projects/ubigo.webp', color: '#d66d28', soft: '#fff0e3' },
  { title: 'Administrasi RT/RW', category: { id: 'Sistem Administrasi', en: 'Administration System' }, url: 'https://rt-rw-beryl.vercel.app', image: '/projects/rtrw.webp', color: '#336bc0', soft: '#e8f0ff' },
  { title: 'Bank Sampah', category: { id: 'Dashboard Pengelolaan', en: 'Management Dashboard' }, url: 'https://bank-sampah-one.vercel.app', image: '/projects/bank-sampah.webp', color: '#288060', soft: '#e4f4ed' },
  { title: 'Desa Sukamaju', category: { id: 'Portal Informasi Desa', en: 'Village Information Portal' }, url: 'https://kkn-kappa.vercel.app', image: '/projects/desa.webp', color: '#337d98', soft: '#e5f3f7' },
  { title: 'Asoka', category: { id: 'Oleh-Oleh Karanganyar', en: 'Karanganyar Souvenirs' }, url: 'https://asoka-chi.vercel.app/', image: '/projects/asoka.webp', color: '#d45073', soft: '#fce8ee' },
]

const faqs = [
  {
    question: { id: 'Berapa lama proses pengerjaan website?', en: 'How long does it take to build a website?' },
    answer: { id: 'Website sederhana dapat selesai maksimal 3 hari. Untuk website yang lebih rumit, durasi pengerjaan menyesuaikan fitur dan tingkat kerumitannya.', en: 'A simple website can be completed within a maximum of 3 days. More complex websites take longer depending on their features and level of complexity.' },
  },
  {
    question: { id: 'Apa saja yang perlu disiapkan?', en: 'What do I need to prepare?' },
    answer: { id: 'Siapkan logo, teks, foto produk, referensi desain, dan gambaran fitur yang dibutuhkan. Jika belum lengkap, kami bantu menyusunnya bersama.', en: 'Prepare your logo, copy, product photos, design references, and a rough list of required features. If anything is missing, we can help organize it together.' },
  },
  {
    question: { id: 'Apakah dibantu domain dan hosting?', en: 'Can you help with domains and hosting?' },
    answer: { id: 'Bisa. Alpha Code dapat membantu pemilihan domain, hosting, hingga proses website siap diakses secara online.', en: 'Yes. Alpha Code can help you choose a domain and hosting, then assist until the website is live and accessible.' },
  },
  {
    question: { id: 'Apakah website bisa direvisi?', en: 'Can the website be revised?' },
    answer: { id: 'Bisa. Proses revisi dilakukan sesuai kebutuhan dan ruang lingkup yang telah disepakati bersama di awal.', en: 'Yes. Revisions are handled according to the needs and project scope agreed upon at the beginning.' },
  },
  {
    question: { id: 'Bagaimana pendampingan project mahasiswa?', en: 'How does student project guidance work?' },
    answer: { id: 'Pendampingan dapat mencakup penyusunan konsep, pengembangan website, penjelasan kode, dan persiapan presentasi project.', en: 'Guidance can include concept development, website implementation, code explanation, and project presentation preparation.' },
  },
]

const copy = {
  id: {
    nav: ['Beranda', 'Layanan', 'Tentang Kami', 'Proyek', 'Cara Kerja', 'FAQ'], startProject: 'Mulai Proyek',
    loader: 'berenang menuju sesuatu yang menyenangkan...',
    heroBadge: 'Website UMKM & Project Mahasiswa', heroStart: 'Idemu layak punya', heroEnd: 'website yang ', heroAccent: 'nyata.', heroText: 'Kami spesialis membuat website untuk UMKM dan mendampingi project mahasiswa—rapi, responsif, mudah dipahami, dan siap digunakan.', start: 'Yuk, mulai!', seeServices: 'Lihat layanan',
    servicesKicker: 'Yang kami kerjakan', servicesTitle: 'Teknologi serius,', servicesAccent: 'dibuat terasa simpel.', servicesText: 'Dari toko lokal sampai project kampus, kami siap jadi teman satu timmu.', seeProject: 'Lihat project',
    aboutKicker: 'Kenalan yuk!', aboutTitle: 'Bukan sekadar vendor.', aboutPrefix: 'Kami ', aboutAccent: 'teman tumbuhmu.', aboutText: 'Di Alpha Code, kami membantu UMKM tampil lebih meyakinkan di dunia digital dan mendampingi mahasiswa mengembangkan project web yang bisa dipahami serta dipresentasikan dengan percaya diri.', bullets: ['Komunikasi jujur & mudah dipahami', 'Desain yang punya tujuan, bukan cuma cantik', 'Kode rapi dan mudah dikembangkan'], tellIdea: 'Cerita tentang idemu', goodVibes: 'di setiap pixel',
    projectKicker: 'Karya pilihan', projectTitle: 'Yang pernah kami', projectAccent: 'bangun bersama.', projectText: 'Setiap project punya cerita, kebutuhan, dan solusi yang berbeda. Klik untuk melihat versi live-nya.',
    processKicker: 'Cara kami bekerja', processTitle: 'Simpel, transparan,', processAccent: 'tanpa drama.',
    ctaSmall: 'Punya ide di kepala?', ctaTitle: 'Yuk, kita wujudkan', ctaEnd: 'bareng-bareng!', chat: 'Ngobrol sekarang',
    footerTitle: 'Website yang bekerja.', footerAccent: 'Desain yang berkesan.', footerText: 'Teman digital untuk UMKM dan project mahasiswa.', explore: 'Jelajahi', connect: 'Mari terhubung', selectedWork: 'Karya Pilihan',
    faqKicker: 'Yang sering ditanyakan', faqTitle: 'Sebelum mulai,', faqAccent: 'mungkin kamu penasaran.', faqText: 'Jawaban singkat untuk beberapa pertanyaan yang paling sering kami terima.',
  },
  en: {
    nav: ['Home', 'Services', 'About Us', 'Projects', 'How We Work', 'FAQ'], startProject: 'Start a Project',
    loader: 'swimming into something delightful...',
    heroBadge: 'Small Business Websites & Student Projects', heroStart: 'Your idea deserves', heroEnd: 'a website made ', heroAccent: 'real.', heroText: 'We specialize in websites for small businesses and guide student projects—polished, responsive, easy to understand, and ready to use.', start: 'Let’s begin!', seeServices: 'See our services',
    servicesKicker: 'What we do', servicesTitle: 'Serious technology,', servicesAccent: 'made beautifully simple.', servicesText: 'From local shops to campus projects, we are ready to be part of your team.', seeProject: 'View project',
    aboutKicker: 'Meet the team', aboutTitle: 'More than a vendor.', aboutPrefix: 'We are your ', aboutAccent: 'growth partner.', aboutText: 'At Alpha Code, we help small businesses build a stronger digital presence and guide students in creating web projects they understand and can present with confidence.', bullets: ['Honest, easy-to-understand communication', 'Purposeful design, not just pretty visuals', 'Clean, scalable code'], tellIdea: 'Tell us your idea', goodVibes: 'in every pixel',
    projectKicker: 'Selected work', projectTitle: 'What we have', projectAccent: 'built together.', projectText: 'Every project has a different story, need, and solution. Click to explore the live version.',
    processKicker: 'How we work', processTitle: 'Simple, transparent,', processAccent: 'drama-free.',
    ctaSmall: 'Got an idea in mind?', ctaTitle: 'Let’s bring it to life', ctaEnd: 'together!', chat: 'Start a conversation',
    footerTitle: 'Websites that work.', footerAccent: 'Designs that resonate.', footerText: 'A digital partner for small businesses and student projects.', explore: 'Explore', connect: 'Let’s connect', selectedWork: 'Selected Work',
    faqKicker: 'Frequently asked', faqTitle: 'Before we begin,', faqAccent: 'you might be wondering.', faqText: 'Quick answers to a few questions we hear most often.',
  },
}

function Brand({ light = false, href = '#home' }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href={href} aria-label="Alpha Code home">
    <img src="/alpha-code-logo.jpg" alt="Logo Alpha Code" />
    <span>alpha<span>code</span></span>
  </a>
}

const dividerPaths = [
  'M0 28 C230 72 430 2 720 34 C1010 68 1210 8 1440 35 L1440 70 L0 70Z',
  'M0 46 C210 5 425 64 690 30 C950 0 1190 62 1440 24 L1440 70 L0 70Z',
  'M0 18 C300 58 470 55 720 24 C990 -6 1160 12 1440 50 L1440 70 L0 70Z',
]

function SectionDivider({ from, to, variant = 0 }) {
  return <div className="section-divider" style={{ '--divider-from': from, '--divider-to': to }} aria-hidden="true">
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none"><path d={dividerPaths[variant]} fill={to} /></svg>
  </div>
}

function NotFound({ lang }) {
  const text = lang === 'id'
    ? { label: 'Ups, tersesat!', title: 'Halaman ini berenang terlalu jauh.', body: 'Sepertinya halaman yang kamu cari tidak ada atau sudah berpindah tempat.', button: 'Kembali ke beranda' }
    : { label: 'Oops, you are lost!', title: 'This page swam a little too far.', body: 'The page you are looking for does not exist or may have moved somewhere else.', button: 'Back to home' }

  return <main className="not-found-page">
    <div className="not-found-bubble bubble-a" /><div className="not-found-bubble bubble-b" />
    <div className="not-found-content">
      <div className="not-found-mascot">
        <img className="not-found-normal" src="/alpha-code-fish.png" alt="Alpha Code" />
        <img className="not-found-wink" src="/alpha-code-fish-wink.png" alt="" />
      </div>
      <span>{text.label}</span>
      <h1>404</h1>
      <h2>{text.title}</h2>
      <p>{text.body}</p>
      <a className="button primary" href="/">{text.button} <ArrowRight size={18} /></a>
    </div>
  </main>
}

function App() {
  const [open, setOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useState(() => localStorage.getItem('alpha-language') || 'id')
  const [theme, setTheme] = useState(() => localStorage.getItem('alpha-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    const savedPreference = localStorage.getItem('alpha-animations')
    return savedPreference === null ? !window.matchMedia('(prefers-reduced-motion: reduce)').matches : savedPreference === 'on'
  })
  const [languageChanging, setLanguageChanging] = useState(false)
  const [themeChanging, setThemeChanging] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)
  const settingsRef = useRef(null)
  const isNotFound = window.location.pathname !== '/'
  const t = copy[lang]
  const dividerColors = theme === 'dark'
    ? [
        ['#281a31', '#0e1a31'], ['#21192d', '#231b25'], ['#141c34', '#131a31'],
        ['#191a35', '#251f24'], ['#101d35', '#211a31'], ['#261b2b', '#101d36'],
      ]
    : [
        ['#fff0e8', '#edf5ff'], ['#f4eeff', '#fff1e2'], ['#f7edff', '#eeefff'],
        ['#e7f6f2', '#edf7ea'], ['#e9f1ff', '#f5efff'], ['#f1eaff', '#e6f0ff'],
      ]
  const showToast = (message) => {
    window.clearTimeout(toastTimer.current)
    setToast(message)
    toastTimer.current = window.setTimeout(() => setToast(null), 2400)
  }
  const changeLanguage = (nextLanguage) => {
    if (nextLanguage === lang || languageChanging) return
    setLanguageChanging(true)
    window.setTimeout(() => {
      setLang(nextLanguage)
      showToast(nextLanguage === 'id' ? 'Bahasa diubah ke Indonesia' : 'Language changed to English')
      window.requestAnimationFrame(() => setLanguageChanging(false))
    }, 170)
  }
  const changeTheme = () => {
    if (themeChanging) return
    setThemeChanging(true)
    window.setTimeout(() => {
      const nextTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(nextTheme)
      showToast(nextTheme === 'dark' ? (lang === 'id' ? 'Mode gelap diaktifkan' : 'Dark mode enabled') : (lang === 'id' ? 'Mode terang diaktifkan' : 'Light mode enabled'))
      window.requestAnimationFrame(() => setThemeChanging(false))
    }, 140)
  }
  const toggleAnimations = () => {
    showToast(animationsEnabled ? (lang === 'id' ? 'Animasi dimatikan' : 'Animations turned off') : (lang === 'id' ? 'Animasi diaktifkan' : 'Animations turned on'))
    setAnimationsEnabled(!animationsEnabled)
  }
  const copyWhatsApp = async () => {
    const phoneNumber = '+6287891357858'
    try {
      await navigator.clipboard.writeText(phoneNumber)
    } catch {
      const input = document.createElement('textarea')
      input.value = phoneNumber
      input.setAttribute('readonly', '')
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    showToast(lang === 'id' ? 'Nomor WhatsApp berhasil disalin' : 'WhatsApp number copied')
  }
  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('alpha-language', lang)
  }, [lang])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('alpha-theme', theme)
  }, [theme])
  useEffect(() => {
    document.documentElement.dataset.motion = animationsEnabled ? 'on' : 'off'
    localStorage.setItem('alpha-animations', animationsEnabled ? 'on' : 'off')
  }, [animationsEnabled])
  useEffect(() => {
    const updateScrollButton = () => setShowScrollTop(window.scrollY > 520)
    updateScrollButton()
    window.addEventListener('scroll', updateScrollButton, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollButton)
  }, [])
  useEffect(() => {
    if (isNotFound) return undefined
    const sectionIds = ['home', 'services', 'about', 'projects', 'work', 'faq', 'contact']
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-34% 0px -55% 0px', threshold: 0 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isNotFound])
  useEffect(() => {
    document.body.classList.add('loader-active')
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const duration = animationsEnabled ? 2850 : 450
    const timer = window.setTimeout(() => {
      setLoading(false)
      document.body.classList.remove('loader-active')
      window.requestAnimationFrame(() => window.scrollTo(0, 0))
    }, duration)
    return () => {
      window.clearTimeout(timer)
      document.body.classList.remove('loader-active')
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  useEffect(() => {
    const closeSettings = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) setSettingsOpen(false)
    }
    document.addEventListener('pointerdown', closeSettings)
    return () => document.removeEventListener('pointerdown', closeSettings)
  }, [])
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready')
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  return <>
    {loading && <div className="site-loader minimal-loader" role="status" aria-live="polite" aria-label={lang === 'id' ? 'Memuat website Alpha Code' : 'Loading the Alpha Code website'}>
      <div className="minimal-bg-sparkles" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <div className="loader-rising-bubbles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="minimal-fish-wrap">
        <div className="minimal-logo">
          <img className="minimal-logo-frame minimal-logo-normal" src="/alpha-code-fish.png" alt="" draggable="false" />
          <img className="minimal-logo-frame minimal-logo-wink" src="/alpha-code-fish-wink.png" alt="" draggable="false" />
        </div>
        <span className="minimal-bubble bubble-one" /><span className="minimal-bubble bubble-two" /><span className="minimal-bubble bubble-three" />
      </div>
      <div className="minimal-loader-copy">
        <h2>alpha<span>code</span></h2>
        <p>{t.loader}</p>
      </div>
    </div>}
    <div className={`site-content ${languageChanging ? 'language-changing' : ''} ${themeChanging ? 'theme-changing' : ''}`}>
    <header className="navbar">
      <div className="container nav-inner">
        <Brand href={isNotFound ? '/' : '#home'} />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label={lang === 'id' ? 'Navigasi utama' : 'Main navigation'}>
          <a className={activeSection === 'home' ? 'active' : ''} href={isNotFound ? '/#home' : '#home'} onClick={() => setOpen(false)}>{t.nav[0]}</a>
          <a className={activeSection === 'services' ? 'active' : ''} href={isNotFound ? '/#services' : '#services'} onClick={() => setOpen(false)}>{t.nav[1]}</a>
          <a className={activeSection === 'about' ? 'active' : ''} href={isNotFound ? '/#about' : '#about'} onClick={() => setOpen(false)}>{t.nav[2]}</a>
          <a className={activeSection === 'projects' ? 'active' : ''} href={isNotFound ? '/#projects' : '#projects'} onClick={() => setOpen(false)}>{t.nav[3]}</a>
          <a className={activeSection === 'work' ? 'active' : ''} href={isNotFound ? '/#work' : '#work'} onClick={() => setOpen(false)}>{t.nav[4]}</a>
          <a className={activeSection === 'faq' ? 'active' : ''} href={isNotFound ? '/#faq' : '#faq'} onClick={() => setOpen(false)}>{t.nav[5]}</a>
          <a className={`nav-cta ${activeSection === 'contact' ? 'active' : ''}`} href={isNotFound ? '/#contact' : '#contact'} onClick={() => setOpen(false)}>{t.startProject} <ArrowRight size={16} /></a>
        </nav>
        <div className="nav-tools">
          <div className="settings-menu" ref={settingsRef}>
            <button className={`settings-button ${settingsOpen ? 'active' : ''}`} onClick={() => setSettingsOpen((visible) => !visible)} aria-label={lang === 'id' ? 'Buka pengaturan tampilan' : 'Open display settings'} aria-expanded={settingsOpen} title={lang === 'id' ? 'Pengaturan tampilan' : 'Display settings'}><SlidersHorizontal size={16} /></button>
            <div className={`settings-panel ${settingsOpen ? 'open' : ''}`}>
              <div className="settings-panel-head">
                <i><SlidersHorizontal size={16} /></i>
                <div><span>{lang === 'id' ? 'Tampilan' : 'Display'}</span><small>{lang === 'id' ? 'Atur sesuai kenyamananmu' : 'Make it comfortable'}</small></div>
              </div>
              <div className="settings-list">
                <div className="settings-row">
                  <span>{lang === 'id' ? 'Bahasa' : 'Language'}</span>
                  <div className="language-switch" aria-label={lang === 'id' ? 'Pilih bahasa' : 'Choose language'}>
                    <button className={lang === 'id' ? 'active' : ''} onClick={() => changeLanguage('id')} aria-pressed={lang === 'id'}>ID</button>
                    <button className={lang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')} aria-pressed={lang === 'en'}>EN</button>
                  </div>
                </div>
                <button className="settings-option" onClick={changeTheme}>
                  <span>{theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}{lang === 'id' ? 'Mode warna' : 'Color mode'}</span>
                  <span className="settings-control"><small>{theme === 'light' ? (lang === 'id' ? 'Terang' : 'Light') : (lang === 'id' ? 'Gelap' : 'Dark')}</small><i className={`settings-toggle ${theme === 'dark' ? 'on' : ''}`} aria-hidden="true"><b /></i></span>
                </button>
                <button className="settings-option" onClick={toggleAnimations}>
                  <span>{animationsEnabled ? <Pause size={15} /> : <Play size={15} />}{lang === 'id' ? 'Animasi' : 'Animations'}</span>
                  <span className="settings-control"><small>{animationsEnabled ? (lang === 'id' ? 'Aktif' : 'On') : (lang === 'id' ? 'Mati' : 'Off')}</small><i className={`settings-toggle ${animationsEnabled ? 'on' : ''}`} aria-hidden="true"><b /></i></span>
                </button>
              </div>
            </div>
          </div>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={lang === 'id' ? 'Buka menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>

    {isNotFound ? <NotFound lang={lang} /> : <main>
      <section className="hero" id="home">
        <div className="blob blob-one" /><div className="blob blob-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> {t.heroBadge}</div>
            <h1>{t.heroStart}<br />{t.heroEnd}<span>{t.heroAccent}</span></h1>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">{t.start} <ArrowRight size={18} /></a>
              <a className="text-link" href="#services">{t.seeServices} <ChevronRight size={17} /></a>
            </div>
          </div>

          <div className="hero-art" aria-label={lang === 'id' ? 'Ilustrasi ruang kerja Alpha Code' : 'Alpha Code workspace illustration'}>
            <div className="spark s1">✦</div><div className="spark s2">✦</div>
            <div className="float-card card-love"><Heart size={18} fill="currentColor" /> 100%</div>
            <div className="float-card card-code"><Code2 size={21} /> clean code</div>
            <div className="screen video-screen">
              <div className="screen-bar"><span /><span /><span /></div>
              <div className="screen-content">
                <video
                  src="/alpha-code-animation.mp4"
                  poster="/alpha-code-logo.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={lang === 'id' ? 'Animasi logo Alpha Code' : 'Alpha Code logo animation'}
                >
                  {lang === 'id' ? 'Browser kamu belum mendukung pemutaran video.' : 'Your browser does not support video playback.'}
                </video>
                <div className="video-shine" />
                <span className="now-playing"><i /> Meet Alpha Code</span>
              </div>
              <div className="screen-stand" />
            </div>
            <div className="plant"><div className="leaf l1"/><div className="leaf l2"/><div className="leaf l3"/><div className="pot"/></div>
            <div className="desk"><span /></div>
          </div>
        </div>
        <a className="scroll-cue" href="#services" aria-label={lang === 'id' ? 'Lanjut ke bagian layanan' : 'Continue to services'}>
          <span>{lang === 'id' ? 'Lihat selanjutnya' : 'Keep exploring'}</span><ChevronDown size={15} />
        </a>
      </section>

      <SectionDivider from={dividerColors[0][0]} to={dividerColors[0][1]} />

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading reveal">
            <span className="kicker">{t.servicesKicker}</span>
            <h2>{t.servicesTitle}<br /><em>{t.servicesAccent}</em></h2>
            <p>{t.servicesText}</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text, tone, url }, index) => <article className="service-card reveal" style={{ '--delay': `${index * 80}ms` }} key={title.id}>
              <div className={`icon-box ${tone}`}><Icon /></div>
              <h3>{title[lang]}</h3><p>{text[lang]}</p>
              <a href={url} target="_blank" rel="noreferrer" aria-label={`${t.seeProject}: ${title[lang]}`}>{t.seeProject} <ArrowRight size={16} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <SectionDivider from={dividerColors[1][0]} to={dividerColors[1][1]} variant={1} />

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-visual reveal">
            <div className="big-logo"><img src="/alpha-code-logo.jpg" alt="Maskot Alpha Code" /></div>
            <div className="note note-one">☀ <b>Good vibes</b><span>{t.goodVibes}</span></div>
          </div>
          <div className="about-copy reveal">
            <span className="kicker">{t.aboutKicker}</span>
            <h2>{t.aboutTitle}<br />{t.aboutPrefix}<em>{t.aboutAccent}</em></h2>
            <p>{t.aboutText}</p>
            <ul>
              {t.bullets.map((item) => <li key={item}><Check /> {item}</li>)}
            </ul>
            <a className="button soft" href="#contact">{t.tellIdea} <MessageCircle size={18} /></a>
          </div>
        </div>
      </section>

      <SectionDivider from={dividerColors[2][0]} to={dividerColors[2][1]} variant={2} />

      <section className="section projects" id="projects">
        <div className="container">
          <div className="projects-heading reveal">
            <div className="section-heading">
              <span className="kicker">{t.projectKicker}</span>
              <h2>{t.projectTitle}<br /><em>{t.projectAccent}</em></h2>
            </div>
            <p>{t.projectText}</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <a className="project-card reveal" style={{ '--delay': `${(index % 4) * 70}ms`, '--project-color': project.color, '--project-soft': project.soft }} href={project.url} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-preview">
                <div className="project-window">
                  <div className="project-window-bar"><i /><i /><i /><span>Live preview</span></div>
                  <img src={project.image} alt={`${lang === 'id' ? 'Tampilan website' : 'Website preview'} ${project.title}`} loading="lazy" />
                </div>
              </div>
              <div className="project-info">
                <div><h3>{project.title}</h3><span>{project.category[lang]}</span></div>
                <i className="project-link"><ExternalLink size={18} /></i>
              </div>
            </a>)}
          </div>
        </div>
      </section>

      <SectionDivider from={dividerColors[3][0]} to={dividerColors[3][1]} variant={1} />

      <section className="section process" id="work">
        <div className="container">
          <div className="section-heading center reveal"><span className="kicker">{t.processKicker}</span><h2>{t.processTitle} <em>{t.processAccent}</em></h2></div>
          <div className="steps">
            {steps.map(({ number, title, text }, index) => <article className="step reveal" style={{ '--delay': `${index * 110}ms` }} key={number}>
              <div className="step-number">{number}</div>
              {index < 2 && <div className="dotted-line" />}
              <h3>{title[lang]}</h3><p>{text[lang]}</p>
            </article>)}
          </div>
        </div>
      </section>

      <SectionDivider from={dividerColors[4][0]} to={dividerColors[4][1]} variant={0} />

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-intro">
              <div className="faq-heading reveal">
                <span className="kicker">{t.faqKicker}</span>
                <h2>{t.faqTitle}<br /><em>{t.faqAccent}</em></h2>
                <p>{t.faqText}</p>
              </div>
              <div className="faq-mini-card reveal" aria-hidden="true">
                <div className="faq-mini-logo">
                  <img className="faq-mini-normal" src="/alpha-code-fish.png" alt="" />
                  <img className="faq-mini-wink" src="/alpha-code-fish-wink.png" alt="" />
                </div>
                <div className="faq-mini-time"><b>≤ 3</b><span>{lang === 'id' ? 'hari' : 'days'}</span></div>
              </div>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, index) => <details className={`faq-item reveal ${index === 0 ? 'featured' : ''}`} style={{ '--delay': `${index * 65}ms` }} key={faq.question.id}>
                <summary><span>{faq.question[lang]}</span><i aria-hidden="true" /></summary>
                <p>{faq.answer[lang]}</p>
              </details>)}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from={dividerColors[5][0]} to={dividerColors[5][1]} variant={2} />

      <section className="cta-section" id="contact">
        <div className="container cta-card reveal">
          <div className="cta-doodle">✦</div>
          <div><span>{t.ctaSmall}</span><h2>{t.ctaTitle}<br />{t.ctaEnd}</h2></div>
          <a className="button white" href={`https://wa.me/6287891357858?text=${encodeURIComponent(lang === 'id' ? 'Halo Alpha Code, saya ingin konsultasi tentang proyek digital.' : 'Hello Alpha Code, I would like to discuss a digital project.')}`} target="_blank" rel="noreferrer">{t.chat} <ArrowRight size={18} /></a>
        </div>
      </section>
    </main>}

    <footer className="simple-footer">
      <div className="footer-fun-decor" aria-hidden="true">
        <div className="footer-mascot">
          <img className="footer-mascot-normal" src="/alpha-code-fish.png" alt="" />
          <img className="footer-mascot-wink" src="/alpha-code-fish-wink.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="simple-footer-main">
          <div className="simple-footer-brand">
            <Brand light href={isNotFound ? '/' : '#home'} />
            <h3>{t.footerTitle} <span>{t.footerAccent}</span></h3>
            <p>{t.footerText}</p>
            <div className="simple-footer-socials" aria-label={lang === 'id' ? 'Kontak Alpha Code' : 'Alpha Code contacts'}>
              <a className="instagram-link" href="https://instagram.com/alphacode.idn" target="_blank" rel="noreferrer" aria-label="Instagram @alphacode.idn"><Instagram size={20} /><span><small>Instagram</small><b>@alphacode.idn</b></span></a>
              <div className="whatsapp-contact">
                <a className="whatsapp-link" href="https://wa.me/6287891357858" target="_blank" rel="noreferrer" aria-label="WhatsApp +62 878-9135-7858"><Phone size={19} /><span><small>WhatsApp</small><b>+62 878-9135-7858</b></span></a>
                <button className="copy-whatsapp" type="button" onClick={copyWhatsApp} aria-label={lang === 'id' ? 'Salin nomor WhatsApp' : 'Copy WhatsApp number'} title={lang === 'id' ? 'Salin nomor WhatsApp' : 'Copy WhatsApp number'}><Copy size={17} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="simple-footer-bottom">
          <p>© {new Date().getFullYear()} Alpha Code.</p>
          <div className="footer-language" aria-label={lang === 'id' ? 'Pilih bahasa' : 'Choose language'}>
            <button className={lang === 'id' ? 'active' : ''} onClick={() => changeLanguage('id')}>Indonesia</button>
            <i />
            <button className={lang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>English</button>
          </div>
        </div>
      </div>
    </footer>
    </div>
    <div className={`toast-notification ${toast ? 'show' : ''}`} role="status" aria-live="polite" aria-atomic="true">
      <span className="toast-mascot"><img src="/alpha-code-fish.png" alt="" /><i><Check size={10} /></i></span>{toast}
    </div>
    {!isNotFound && <button className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={lang === 'id' ? 'Kembali ke atas' : 'Back to top'} title={lang === 'id' ? 'Kembali ke atas' : 'Back to top'}><ArrowUp size={20} /></button>}
  </>
}

export default App
