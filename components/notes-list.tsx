"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { getNoteUrl, type Note } from "@/lib/notes"

type NotesListProps = {
  notes: Note[]
}

export function NotesList({ notes }: NotesListProps) {
  const { language, t } = useLanguage()

  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-16">
        {t("notes.empty")}
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((note) => {
        const title = language === "zh" ? note.titleZh || note.title : note.title
        const description =
          language === "zh" ? note.descriptionZh || note.description : note.description

        return (
          <Link key={note.slug} href={getNoteUrl(note.slug)} className="group block h-full">
            <Card className="h-full border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:border-primary/50 hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                </div>
                <CardDescription className="text-xs text-gray-500 dark:text-gray-500">
                  {formatNoteDate(note.date, language)}
                </CardDescription>
              </CardHeader>
              {description ? (
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {description}
                  </p>
                  {note.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              ) : null}
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

function formatNoteDate(date: string, language: "en" | "zh"): string {
  const parsed = new Date(`${date}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return date

  return parsed.toLocaleDateString(language === "zh" ? "zh-TW" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
