"use client"

import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import type { Note } from "@/components/notes-list"

type NotesPickerProps = {
  notes: Note[]
}

export function NotesPicker({ notes }: NotesPickerProps) {
  const router = useRouter()
  const { t } = useLanguage()

  if (notes.length === 0) return null

  return (
    <div className="mb-8">
      <label htmlFor="notes-picker" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {t("notes.pickNote")}
      </label>
      <select
        id="notes-picker"
        defaultValue=""
        onChange={(e) => {
          if (e.target.value) router.push(`/notes/${e.target.value}`)
        }}
        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 px-3 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <option value="" disabled>
          {t("notes.pickPlaceholder")}
        </option>
        {notes.map((note) => (
          <option key={note.slug} value={note.slug}>
            {note.title}
          </option>
        ))}
      </select>
    </div>
  )
}
