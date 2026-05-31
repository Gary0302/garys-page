"use client"

import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export type Note = {
  slug: string
  title: string
  date: string
}

type NotesListProps = {
  notes: Note[]
}

export function NotesList({ notes }: NotesListProps) {
  const { t, language } = useLanguage()

  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-16">
        {t("notes.empty")}
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((note) => (
        <Card
          key={note.slug}
          className="h-full border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50"
        >
          <CardHeader className="pb-3">
            <Link href={`/notes/${note.slug}`} className="group block">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {note.title}
                </CardTitle>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary shrink-0 mt-1 transition-colors" />
              </div>
              <CardDescription className="text-xs text-gray-500 dark:text-gray-500">
                {formatNoteDate(note.date, language)}
              </CardDescription>
            </Link>
          </CardHeader>
          <CardContent className="pt-0">
            <a
              href={`/notes/${note.slug}.html`}
              download={`${note.slug}.html`}
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              {t("notes.download")}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function formatNoteDate(date: string, language: "en" | "zh"): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date

  return parsed.toLocaleDateString(language === "zh" ? "zh-TW" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
