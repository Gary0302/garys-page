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
} from "lucide-react"
import { GitHubCalendar } from "@/components/github-calendar"
import { GitHubProjects } from "@/components/github-projects"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
        <Icon className="w-5 h-5" aria-hidden="true" />
      </span>
      {children}
    </h3>
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

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex flex-col min-h-screen overscroll-y-none">
        <header className="sticky top-0 z-30 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#hero" className="flex items-center gap-3 cursor-pointer">
                <div className="w-8 h-8 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <g clipPath="url(#clip0_6_319)">
                      <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319">
                        <rect fill="white" height="48" width="48"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Gary Yang</h1>
              </a>
              <div className="flex items-center gap-2">
                <nav className="hidden lg:flex items-center space-x-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Link
                    className="text-sm font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
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
                  className="px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors duration-200"
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-mt-24 animate-fade-in-up" id="hero">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg ring-4 ring-primary/20">
                <Image
                  alt={t("profile.name1")}
                  className="w-full h-full object-cover"
                  src="/IMG_5214.JPG"
                  width={160}
                  height={160}
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                  {t("profile.name1")}{" "}
                  <span className="block sm:inline text-2xl sm:text-3xl font-medium text-gray-500 dark:text-gray-400">{t("profile.name2")}</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-primary font-semibold tracking-widest uppercase">{t("profile.title")}</p>
                <div className="mt-5 flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://github.com/Gary0302"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gary-yang-fu-chun-yang"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:yanggary2388@gmail.com"
                    aria-label="Email (personal)"
                    title="yanggary2388@gmail.com"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:fyang55@ucsc.edu"
                    aria-label="Email (UCSC)"
                    title="fyang55@ucsc.edu"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </section>
            <div className="mt-16 space-y-16">
              <section id="about" className="scroll-mt-24">
                <SectionHeading icon={User}>{t("section.about")}</SectionHeading>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-prose">
                  {t("profile.bio")}
                </p>
              </section>
              <section id="education" className="scroll-mt-24">
                <SectionHeading icon={GraduationCap}>{t("section.education")}</SectionHeading>
                <ol className="relative border-l-2 border-primary/20 ml-2 space-y-8">
                  <li className="pl-6 relative">
                    <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary" aria-hidden="true"></span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("education.ucsc")}</h4>
                    <p className="text-md text-gray-600 dark:text-gray-400">{t("education.ucsc.details")}</p>
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary/40" aria-hidden="true"></span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("education.highschool")}</h4>
                    <p className="text-md text-gray-600 dark:text-gray-400">{t("education.highschool.details")}</p>
                  </li>
                </ol>
              </section>
              <section id="publications" className="scroll-mt-24">
                <SectionHeading icon={FileText}>{t("section.publications")}</SectionHeading>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-colors duration-200">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("publication.newinml.badge1")}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("publication.newinml.title")}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-400 mb-3">{t("publication.newinml.details")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{t("publication.newinml.description")}</p>
                  <a
                    href="https://arxiv.org/abs/2511.03945"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    {t("publication.newinml.url")}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </section>
              <section id="languages" className="scroll-mt-24">
                <SectionHeading icon={Languages}>{t("section.languages")}</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { initial: "中", key: "language.mandarin" },
                    { initial: "台", key: "language.taiwanese" },
                    { initial: "EN", key: "language.english" },
                    { initial: "日", key: "language.japanese" },
                  ].map((lang) => (
                    <div
                      key={lang.key}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-transparent hover:border-primary/30 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary font-bold flex-shrink-0">{lang.initial}</div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t(lang.key)}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section id="skills" className="scroll-mt-24">
                <SectionHeading icon={Code}>{t("section.skills")}</SectionHeading>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t("skills.programming")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["skills.python", "skills.javascript", "skills.sql", "skills.mongodb"].map((key) => (
                        <span key={key} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t(key)}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t("skills.certifications")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["skills.comptia", "skills.apcs", "skills.ceh", "skills.tqc"].map((key) => (
                        <span key={key} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t(key)}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section id="competitions" className="scroll-mt-24">
                <SectionHeading icon={Trophy}>{t("section.competitions")}</SectionHeading>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between mb-2 gap-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("competition.cruzhacks.title")}</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.cruzhacks.badge1")}</span>
                    </div>
                    <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{t("competition.cruzhacks.details")}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{t("competition.cruzhacks.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.cruzhacks.badge2")}</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://devpost.com/software/studybuddy-6u0g5x" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{t("competition.cruzhacks.url")}</a>
                      <a href="https://github.com/Gary0302/StudyBuddy" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{t("competition.cruzhacks.github")}</a>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between mb-2 gap-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("competition.science.title")}</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.science.badge1")}</span>
                    </div>
                    <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{t("competition.science.details")}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{t("competition.science.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.science.badge2")}</span>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.science.badge3")}</span>
                    </div>
                    <a href="https://www.nknu.edu.tw/var/file/0/1000/img/513/mobile/index.html" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{t("competition.science.url")}</a>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between mb-2 gap-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("competition.icdl.title")}</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.icdl.badge1")}</span>
                    </div>
                    <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{t("competition.icdl.details")}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{t("competition.icdl.description")}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.icdl.badge2")}</span>
                    </div>
                  </div>
                </div>
              </section>
              <section id="achievements" className="scroll-mt-24">
                <SectionHeading icon={Award}>{t("section.achievements")}</SectionHeading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "achievement.publication",
                    "achievement.cruzhacks",
                    "achievement.music",
                    "achievement.leadership",
                    "achievement.folk",
                    "achievement.ai",
                  ].map((key) => (
                    <li key={key} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-gray-600 dark:text-gray-400">
                      <Award className="w-4 h-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section id="inventions" className="scroll-mt-24">
                <SectionHeading icon={Lightbulb}>{t("section.inventions")}</SectionHeading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["invention.fan", "invention.mop", "invention.insulin", "invention.wifi"].map((key) => (
                    <li key={key} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-gray-600 dark:text-gray-400">
                      <Lightbulb className="w-4 h-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section id="github-activity" className="scroll-mt-24">
                <SectionHeading icon={Activity}>{t("section.activity")}</SectionHeading>
                <GitHubCalendar username="Gary0302" />
              </section>
              <section id="projects" className="scroll-mt-24">
                <SectionHeading icon={FolderGit2}>{t("section.projects")}</SectionHeading>
                <div className="space-y-12">
                  <GitHubProjects username="Gary0302" limit={6} />
                </div>
              </section>
            </div>
          </div>
        </main>
        <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
            <p>{t("footer.copyright")}</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Gary0302" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors duration-200">
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/gary-yang-fu-chun-yang" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors duration-200">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="mailto:yanggary2388@gmail.com" aria-label="Email" className="hover:text-primary transition-colors duration-200">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
