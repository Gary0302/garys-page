import { NotesList } from "@/components/notes-list"
import { getVisibleNotes } from "@/lib/notes"
import { NotesPageIntro } from "./notes-page-intro"

export default function NotesPage() {
  const notes = getVisibleNotes()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <NotesPageIntro />
      <NotesList notes={notes} />
    </div>
  )
}
