'use client'

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Award, Code, GraduationCap, Languages, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GitHubCalendar } from "@/components/github-calendar"
import { GitHubProjects } from "@/components/github-projects"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Portfolio() {
  const { t } = useLanguage()

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex flex-col min-h-screen overscroll-y-none">
        <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
              </div>
              <div className="flex items-center gap-2">
                <nav className="hidden lg:flex items-center space-x-4">
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#about">About</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#education">Education</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#publications">Publications</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#languages">Languages</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#skills">Skills</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#competitions">Competitions</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#achievements">Achievements</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#inventions">Inventions</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#github-activity">Activity</a>
                  <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#projects">Projects</a>
                  <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="/notes">Notes</Link>
                </nav>
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12" id="hero">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  alt={t("profile.name1")}
                  className="w-full h-full object-cover"
                  src="/IMG_5214.JPG"
                  width={160}
                  height={160}
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t("profile.name1")}</h2>
                <p className="mt-2 text-lg text-primary font-medium">{t("profile.title")}</p>
                <div className="mt-4 flex gap-4 justify-center md:justify-start">
                  <a href="https://github.com/Gary0302" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="www.linkedin.com/in/gary-yang-fu-chun-yang" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:garyyang2388@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="mailto:fyang55@ucsc.edu" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
                
              </div>
            </section>
            <div className="mt-16 space-y-12">
              <section id="about">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">About</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("profile.bio")}
                </p>
              </section>
              <section id="education">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.education")}</h3>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("education.ucsc")}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-400">{t("education.ucsc.details")}</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("education.highschool")}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-400">{t("education.highschool.details")}</p>
                </div>
              </section>
              <section id="publications">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.publications")}</h3>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("publication.newinml.badge1")}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("publication.newinml.title")}</h4>
                  <p className="text-md text-gray-600 dark:text-gray-400 mb-3">{t("publication.newinml.details")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{t("publication.newinml.description")}</p>
                  <a href="https://arxiv.org/abs/2511.03945" className="text-sm text-primary hover:underline">{t("publication.newinml.url")}</a>
                </div>
              </section>
              <section id="languages">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.languages")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary font-bold">中</div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t("language.mandarin")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary font-bold">台</div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t("language.taiwanese")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary font-bold">EN</div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t("language.english")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary font-bold">日</div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t("language.japanese")}</p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="skills">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.skills")}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t("skills.programming")}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.python")}</span>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.javascript")}</span>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.sql")}</span>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.mongodb")}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t("skills.certifications")}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.comptia")}</span>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.apcs")}</span>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.ceh")}</span>
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{t("skills.tqc")}</span>
                    </div>
                  </div>
                </div>
              </section>
              <section id="competitions">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.competitions")}</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("competition.cruzhacks.title")}</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.cruzhacks.badge1")}</span>
                    </div>
                    <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{t("competition.cruzhacks.details")}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{t("competition.cruzhacks.description")}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{t("competition.cruzhacks.badge2")}</span>
                    </div>
                    <div className="flex gap-4">
                      <a href="https://devpost.com/software/studybuddy-6u0g5x" className="text-sm text-primary hover:underline">{t("competition.cruzhacks.url")}</a>
                      <a href="https://github.com/Gary0302/StudyBuddy" className="text-sm text-primary hover:underline">{t("competition.cruzhacks.github")}</a>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
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
                    <a href="https://www.nknu.edu.tw/var/file/0/1000/img/513/mobile/index.html" className="text-sm text-primary hover:underline">{t("competition.science.url")}</a>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
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
              <section id="achievements">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.achievements")}</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>{t("achievement.music")}</li>
                  <li>{t("achievement.leadership")}</li>
                  <li>{t("achievement.folk")}</li>
                  <li>{t("achievement.ai")}</li>
                  <li>{t("achievement.cruzhacks")}</li>
                  <li>{t("achievement.publication")}</li>
                </ul>
              </section>
              <section id="inventions">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.inventions")}</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>{t("invention.fan")}</li>
                  <li>{t("invention.mop")}</li>
                  <li>{t("invention.insulin")}</li>
                  <li>{t("invention.wifi")}</li>
                </ul>
              </section>
              <section id="github-activity">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.activity")}</h3>
                <GitHubCalendar username="Gary0302" />
              </section>
              <section id="projects">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">{t("section.projects")}</h3>
                <div className="space-y-12">
                  <GitHubProjects username="Gary0302" limit={6} />
                </div>
              </section>
              {/* <section id="contact">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Personal</p>
                      <a href="mailto:gary@garyyang.in" className="text-sm text-gray-900 dark:text-white hover:text-primary transition-colors">gary@garyyang.in</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Gmail</p>
                      <a href="mailto:yanggary2388@gmail.com" className="text-sm text-gray-900 dark:text-white hover:text-primary transition-colors">yanggary2388@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">UCSC</p>
                      <a href="mailto:fyang55@ucsc.edu" className="text-sm text-gray-900 dark:text-white hover:text-primary transition-colors">fyang55@ucsc.edu</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</p>
                      <a href="www.linkedin.com/in/gary-yang-fu-chun-yang" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-900 dark:text-white hover:text-primary transition-colors">fu-chun-yang</a>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </main>
        <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>{t("footer.copyright")}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}