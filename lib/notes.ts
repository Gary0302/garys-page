import notesData from "@/notes.json"

export type Note = {
  slug: string
  title: string
  titleZh: string
  description: string
  descriptionZh: string
  date: string
  visible: boolean
  tags: string[]
}

export function getAllNotes(): Note[] {
  return notesData.notes
}

export function getVisibleNotes(): Note[] {
  return getAllNotes()
    .filter((note) => note.visible)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getNoteUrl(slug: string): string {
  return `/notes/${slug}`
}
