import { existsSync, readdirSync, readFileSync, statSync } from "fs"
import path from "path"

const NOTES_DIR = path.join(process.cwd(), "public/notes")
const MANIFEST_PATH = path.join(process.cwd(), "notes-manifest.json")
const HIDDEN_MARKERS = ["<!-- draft -->", "<!-- hidden -->"]

export type Note = {
  slug: string
  title: string
  date: string
}

type ScannedNote = Note & {
  html: string
  hidden: boolean
}

export function extractTitleFromHtml(html: string, fallback: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (match?.[1]?.trim()) return match[1].trim()

  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (h1?.[1]?.trim()) return h1[1].replace(/<[^>]+>/g, "").trim()

  return fallback
}

export function isDraftNote(html: string): boolean {
  return HIDDEN_MARKERS.some((marker) => html.includes(marker))
}

function isReservedEmptySlot(html: string, slug: string): boolean {
  return isDraftNote(html) && /Draft slot \d+/i.test(html) && slug.startsWith("slot-")
}

function scanAllNotes(): ScannedNote[] {
  if (!existsSync(NOTES_DIR)) return []

  return readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith(".html") && file !== "portfolio-draft.html")
    .map((file) => {
      const filePath = path.join(NOTES_DIR, file)
      const html = readFileSync(filePath, "utf8")
      const slug = file.replace(/\.html$/, "")
      return {
        slug,
        html,
        hidden: isDraftNote(html),
        date: statSync(filePath).mtime.toISOString(),
        title: extractTitleFromHtml(html, slug),
      }
    })
    .filter((note) => !isReservedEmptySlot(note.html, note.slug))
}

export function getManifestSlugs(): string[] | null {
  if (!existsSync(MANIFEST_PATH)) return null

  try {
    const data = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as { show?: string[] }
    if (!Array.isArray(data.show) || data.show.length === 0) return null
    return data.show
  } catch {
    return null
  }
}

/** All real note files (for the manage page), including hidden ones. */
export function getCatalogNotes(): Note[] {
  return scanAllNotes()
    .map(({ slug, title, date }) => ({ slug, title, date }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Notes eligible for the public list before manifest filtering. */
export function getPublishedNotes(): Note[] {
  return scanAllNotes()
    .filter((note) => !note.hidden)
    .map(({ slug, title, date }) => ({ slug, title, date }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Notes shown on /notes — uses notes-manifest.json when present. */
export function getDisplayedNotes(): Note[] {
  const published = scanAllNotes().filter((note) => !note.hidden)
  const bySlug = new Map(published.map((note) => [note.slug, note]))
  const manifest = getManifestSlugs()

  if (manifest) {
    return manifest
      .map((slug) => bySlug.get(slug))
      .filter((note): note is ScannedNote => note !== undefined)
      .map(({ slug, title, date }) => ({ slug, title, date }))
  }

  return published
    .map(({ slug, title, date }) => ({ slug, title, date }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getNoteUrl(slug: string): string {
  return `/notes/${slug}`
}

export function getNoteDownloadUrl(slug: string): string {
  return `/notes/${slug}.html`
}
