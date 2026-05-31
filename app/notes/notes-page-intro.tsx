"use client"

import { useLanguage } from "@/contexts/language-context"

export function NotesPageIntro() {
  const { t } = useLanguage()

  return (
    <section className="mb-10">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t("notes.title")}</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">{t("notes.subtitle")}</p>
    </section>
  )
}
