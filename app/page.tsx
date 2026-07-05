'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Linkedin,
  Github,
  Award,
  Code,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  X,
  User,
  FileText,
  Trophy,
  Lightbulb,
  Activity,
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"
import { GitHubCalendar } from "@/components/github-calendar"
import { GitHubProjects } from "@/components/github-projects"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

function SectionHeading({
  icon: Icon,
  index,
  children,
}: {
  icon: React.ElementType
  index: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-primary/60 to-transparent" aria-hidden="true"></span>
      </div>
      <h3 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </span>
        {children}
      </h3>
    </div>
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide bg-primary/10 text-primary rounded-full ring-1 ring-inset ring-primary/20">
      {children}
    </span>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: "#about", label: t("section.about") },
    { href: "#education", label: t("section.education") },
    { href: "#publications", label: t("section.publications") },
    { href: "#skills", label: t("section.skills") },
    { href: "#competitions", label: t("section.competitions") },
    { href: "#github-activity", label: t("section.activity") },
    { href: "#projects", label: t("section.projects") },
  ]

  const socialLinks = [
    { href: "https://github.com/Gary0302", label: "GitHub", title: "GitHub", icon: Github, external: true },
    {
      href: "https://www.linkedin.com/in/gary-yang-fu-chun-yang",
      label: "LinkedIn",
      title: "LinkedIn",
      icon: Linkedin,
      external: true,
    },
    { href: "mailto:yanggary2388@gmail.com", label: "Email (personal)", title: "yanggary2388@gmail.com", icon: Mail, external: false },
    { href: "mailto:fyang55@ucsc.edu", label: "Email (UCSC)", title: "fyang55@ucsc.edu", icon: GraduationCap, external: false },
  ]

  return (
    <div className="relative bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* backdrop decorations */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl opacity-60"></div>
        <div className="absolute inset-0 bg-grid-fade"></div>
      </div>

      <div className="relative flex flex-col min-h-screen overscroll-y-none">
        <header className="sticky top-0 z-30 w-full bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-800/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#hero" className="flex items-center gap-2.5 cursor-pointer group">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm shadow-sm shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-200">
                  GY
                </span>
                <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Gary Yang</h1>
              </a>
              <div className="flex items-center gap-2">
                <nav className="hidden lg:flex items-center gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Link
                    className="ml-1 text-sm font-semibold px-4 py-1.5 rounded-full bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/30 transition-colors duration-200"
                    href="/notes"
                  >
                    {t("notes.title")}
                  </Link>
                </nav>
                <LanguageToggle />
                <ThemeToggle />
                <button
                  type="button"
                  className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                </button>
              </div>
            </div>
            {menuOpen && (
              <nav className="lg:hidden pb-4 border-t border-gray-200 dark:border-gray-800 pt-3 grid grid-cols-2 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors duration-200"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors duration-200"
                  href="/notes"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("notes.title")}
                </Link>
              </nav>
            )}
          </div>
        </header>

        <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <section
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-20 sm:py-28 scroll-mt-24 animate-fade-in-up"
              id="hero"
            >
              <div className="text-center md:text-left max-w-2xl">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">{t("profile.title")}</p>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                  {t("profile.name1")}
                </h2>
                <p className="mt-3 text-2xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">
                  {t("profile.name2")}
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                  {socialLinks.map(({ href, label, title, icon: Icon, external }) => (
                    <a
                      key={href}
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={label}
                      title={title}
                      className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <div
                  className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/40 via-sky-400/20 to-transparent blur-2xl"
                  aria-hidden="true"
                ></div>
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10 rotate-2 hover:rotate-0 transition-transform duration-300">
                  <Image
                    alt={t("profile.name1")}
                    className="w-full h-full object-cover"
                    src="/IMG_5214.JPG"
                    width={224}
                    height={224}
                    priority
                  />
                </div>
              </div>
            </section>

            <div className="max-w-4xl mx-auto pb-24 space-y-24">
              <section id="about" className="scroll-mt-24">
                <SectionHeading icon={User} index="01">{t("section.about")}</SectionHeading>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-prose">
                  {t("profile.bio")}
                </p>
              </section>

              <section id="education" className="scroll-mt-24">
                <SectionHeading icon={GraduationCap} index="02">{t("section.education")}</SectionHeading>
                <ol className="relative border-l-2 border-primary/20 ml-2 space-y-10">
                  <li className="pl-8 relative">
                    <span
                      className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"
                      aria-hidden="true"
                    ></span>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t("education.ucsc")}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{t("education.ucsc.details")}</p>
                  </li>
                  <li className="pl-8 relative">
                    <span
                      className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary/40 ring-4 ring-primary/10"
                      aria-hidden="true"
                    ></span>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t("education.highschool")}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{t("education.highschool.details")}</p>
                  </li>
                </ol>
              </section>

              <section id="publications" className="scroll-mt-24">
                <SectionHeading icon={FileText} index="03">{t("section.publications")}</SectionHeading>
                <Card className="p-6 sm:p-8">
                  <div className="mb-3">
                    <Badge>{t("publication.newinml.badge1")}</Badge>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t("publication.newinml.title")}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{t("publication.newinml.details")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{t("publication.newinml.description")}</p>
                  <a
                    href="https://arxiv.org/abs/2511.03945"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    {t("publication.newinml.url")}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </Card>
              </section>

              <section id="languages" className="scroll-mt-24">
                <SectionHeading icon={Languages} index="04">{t("section.languages")}</SectionHeading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { initial: "中", key: "language.mandarin" },
                    { initial: "台", key: "language.taiwanese" },
                    { initial: "EN", key: "language.english" },
                    { initial: "日", key: "language.japanese" },
                  ].map((lang) => (
                    <Card key={lang.key} className="flex flex-col items-center gap-3 p-5 text-center">
                      <div className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-xl text-primary font-bold ring-1 ring-primary/20">
                        {lang.initial}
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t(lang.key)}</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="skills" className="scroll-mt-24">
                <SectionHeading icon={Code} index="05">{t("section.skills")}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-6">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">{t("skills.programming")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["skills.python", "skills.javascript", "skills.sql", "skills.mongodb"].map((key) => (
                        <Badge key={key}>{t(key)}</Badge>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">{t("skills.certifications")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["skills.comptia", "skills.apcs", "skills.ceh", "skills.tqc"].map((key) => (
                        <Badge key={key}>{t(key)}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </section>

              <section id="competitions" className="scroll-mt-24">
                <SectionHeading icon={Trophy} index="06">{t("section.competitions")}</SectionHeading>
                <div className="space-y-5">
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{t("competition.cruzhacks.title")}</h4>
                      <Badge>{t("competition.cruzhacks.badge1")}</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{t("competition.cruzhacks.details")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{t("competition.cruzhacks.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>{t("competition.cruzhacks.badge2")}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-5">
                      <a
                        href="https://devpost.com/software/studybuddy-6u0g5x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
                      >
                        {t("competition.cruzhacks.url")}
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                      <a
                        href="https://github.com/Gary0302/StudyBuddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
                      >
                        {t("competition.cruzhacks.github")}
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </Card>
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{t("competition.science.title")}</h4>
                      <Badge>{t("competition.science.badge1")}</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{t("competition.science.details")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{t("competition.science.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>{t("competition.science.badge2")}</Badge>
                      <Badge>{t("competition.science.badge3")}</Badge>
                    </div>
                    <a
                      href="https://www.nknu.edu.tw/var/file/0/1000/img/513/mobile/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
                    >
                      {t("competition.science.url")}
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </Card>
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{t("competition.icdl.title")}</h4>
                      <Badge>{t("competition.icdl.badge1")}</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{t("competition.icdl.details")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{t("competition.icdl.description")}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{t("competition.icdl.badge2")}</Badge>
                    </div>
                  </Card>
                </div>
              </section>

              <section id="achievements" className="scroll-mt-24">
                <SectionHeading icon={Award} index="07">{t("section.achievements")}</SectionHeading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "achievement.publication",
                    "achievement.cruzhacks",
                    "achievement.music",
                    "achievement.leadership",
                    "achievement.folk",
                    "achievement.ai",
                  ].map((key) => (
                    <li key={key}>
                      <Card className="flex items-start gap-3 p-4 h-full">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <Award className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 pt-1">{t(key)}</span>
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="inventions" className="scroll-mt-24">
                <SectionHeading icon={Lightbulb} index="08">{t("section.inventions")}</SectionHeading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["invention.fan", "invention.mop", "invention.insulin", "invention.wifi"].map((key) => (
                    <li key={key}>
                      <Card className="flex items-start gap-3 p-4 h-full">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <Lightbulb className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 pt-1">{t(key)}</span>
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="github-activity" className="scroll-mt-24">
                <SectionHeading icon={Activity} index="09">{t("section.activity")}</SectionHeading>
                <GitHubCalendar username="Gary0302" />
              </section>

              <section id="projects" className="scroll-mt-24">
                <SectionHeading icon={FolderGit2} index="10">{t("section.projects")}</SectionHeading>
                <div className="space-y-12">
                  <GitHubProjects username="Gary0302" limit={6} />
                </div>
              </section>
            </div>
          </div>
        </main>

        <footer className="border-t border-gray-200/70 dark:border-gray-800/70">
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>{t("footer.copyright")}</p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/Gary0302", label: "GitHub", icon: Github },
                { href: "https://www.linkedin.com/in/gary-yang-fu-chun-yang", label: "LinkedIn", icon: Linkedin },
                { href: "mailto:yanggary2388@gmail.com", label: "Email", icon: Mail },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
