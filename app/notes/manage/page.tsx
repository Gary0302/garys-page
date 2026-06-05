import { NotesManagePanel } from "@/components/notes-manage-panel"
import { getCatalogNotes, getDisplayedNotes } from "@/lib/notes"

export default function NotesManagePage() {
  const catalog = getCatalogNotes()
  const displayed = getDisplayedNotes()

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Notes display</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Choose which notes appear on <code className="text-primary">/notes</code>.
      </p>
      <NotesManagePanel
        catalog={catalog}
        initialShow={displayed.map((note) => note.slug)}
      />
    </div>
  )
}
