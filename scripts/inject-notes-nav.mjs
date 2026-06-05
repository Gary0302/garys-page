#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const NOTES_DIR = path.resolve(__dirname, "../public/notes")
const SCRIPT_TAG = '<script src="/notes/notes-nav.js" defer></script>'

function inject(filePath) {
  const html = readFileSync(filePath, "utf8")
  if (!html.includes("<!DOCTYPE") && !html.includes("<!doctype")) return "skip-not-html"
  if (html.includes("notes-nav.js")) return "skip-has-nav"
  if (!html.includes("</body>")) return "skip-no-body"

  const updated = html.replace("</body>", `  ${SCRIPT_TAG}\n</body>`)
  writeFileSync(filePath, updated, "utf8")
  return "injected"
}

function main() {
  if (!existsSync(NOTES_DIR)) {
    console.error("Notes directory not found")
    process.exit(1)
  }

  const results = { injected: 0, skipped: 0 }

  for (const file of readdirSync(NOTES_DIR).filter((f) => f.endsWith(".html"))) {
    const status = inject(path.join(NOTES_DIR, file))
    if (status === "injected") {
      results.injected += 1
      console.log(`+ ${file}`)
    } else {
      results.skipped += 1
    }
  }

  console.log(`Done: ${results.injected} injected, ${results.skipped} skipped`)
}

main()
