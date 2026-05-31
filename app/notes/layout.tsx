import type { Metadata } from "next"
import { NotesHeader } from "@/components/notes-header"

export const metadata: Metadata = {
  title: "Notes | Gary Yang",
  description: "A collection of notes and standalone pages by Gary Yang.",
}

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <NotesHeader />
      <main className="flex-grow">{children}</main>
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 Gary Yang</p>
        </div>
      </footer>
    </div>
  )
}
