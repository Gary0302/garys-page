import { existsSync, readdirSync, readFileSync, statSync } from "fs"
import path from "path"

const NOTES_DIR = path.join(process.cwd(), "public/notes")
const DRAFT_MARKER = "<!-- draft -->"

export type Note = {
  slug: string
  title: string
  date: string
}

export function extractTitleFromHtml(html: string, fallback: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (match?.[1]?.trim()) return match[1].trim()

  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (h1?.[1]?.trim()) return h1[1].replace(/<[^>]+>/g, "").trim()

  return fallback
}

export function isDraftNote(html: string): boolean {
  return html.includes(DRAFT_MARKER)
}

export function getPublishedNotes(): Note[] {
  if (!existsSync(NOTES_DIR)) return []

  return readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith(".html"))
    .map((file) => {
      const filePath = path.join(NOTES_DIR, file)
      const html = readFileSync(filePath, "utf8")
      const slug = file.replace(/\.html$/, "")
      return {
        slug,
        html,
        date: statSync(filePath).mtime.toISOString(),
        title: extractTitleFromHtml(html, slug),
      }
    })
    .filter((note) => !isDraftNote(note.html))
    .map(({ slug, title, date }) => ({ slug, title, date }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getNoteUrl(slug: string): string {
  return `/notes/${slug}`
}

export function getNoteDownloadUrl(slug: string): string {
  return `/notes/${slug}.html`
}
