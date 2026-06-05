"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Check, Copy, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { GITHUB_MANIFEST_EDIT, GITHUB_NOTES_FOLDER } from "@/lib/github-notes"
import type { Note } from "@/components/notes-list"

type NotesManagePanelProps = {
  catalog: Note[]
  initialShow: string[]
}

export function NotesManagePanel({ catalog, initialShow }: NotesManagePanelProps) {
  const { t, language } = useLanguage()
  const [selected, setSelected] = useState<Set<string>>(new Set(initialShow))
  const [copied, setCopied] = useState(false)

  const manifestJson = useMemo(() => {
    const ordered = catalog.filter((note) => selected.has(note.slug)).map((note) => note.slug)
    return JSON.stringify({ show: ordered }, null, 2)
  }, [catalog, selected])

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }

  async function copyManifest() {
    await navigator.clipboard.writeText(manifestJson)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t("notes.managePickTitle")}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
          {t("notes.managePickHint")}
        </p>
      </section>

      <div className="grid gap-2">
        {catalog.map((note) => {
          const checked = selected.has(note.slug)
          return (
            <label
              key={note.slug}
              className={`flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                checked
                  ? "border-primary/40 bg-primary/5"
                  : "border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(note.slug)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-gray-900 dark:text-white">{note.title}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  {note.slug}
                  {" · "}
                  {formatNoteDate(note.date, language)}
                </span>
              </span>
            </label>
          )
        })}
      </div>

      <section>
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {t("notes.manageManifestTitle")}
          </h3>
          <button
            type="button"
            onClick={copyManifest}
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? t("notes.manageCopied") : t("notes.manageCopy")}
          </button>
        </div>
        <pre className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 p-4 text-xs text-gray-800 dark:text-gray-200">
          {manifestJson}
        </pre>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          {t("notes.manageSavePath")}
        </p>
      </section>

      <section className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {t("notes.githubSection")}
        </h3>
        <a
          href={GITHUB_MANIFEST_EDIT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          {t("notes.githubManifest")}
        </a>
        <a
          href={GITHUB_NOTES_FOLDER}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          {t("notes.githubNotes")}
        </a>
      </section>

      <Link href="/notes" className="inline-flex text-sm text-primary hover:underline">
        {t("notes.manageBack")}
      </Link>
    </div>
  )
}

function formatNoteDate(date: string, language: "en" | "zh"): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date

  return parsed.toLocaleDateString(language === "zh" ? "zh-TW" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
