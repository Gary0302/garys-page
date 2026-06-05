"use client"

import Link from "next/link"
import { GitHubNotesButton } from "@/components/github-notes-button"
import { useLanguage } from "@/contexts/language-context"

export function NotesPageIntro() {
  const { t } = useLanguage()

  return (
    <section className="mb-10">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t("notes.title")}</h1>
        <GitHubNotesButton />
      </div>
      <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">{t("notes.subtitle")}</p>
      <Link href="/notes/manage" className="mt-3 inline-block text-sm text-primary hover:underline">
        {t("notes.manageLink")}
      </Link>
    </section>
  )
}
