#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, writeFileSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const NOTES_DIR = path.resolve(__dirname, "../public/notes")

function parseArgs(argv) {
  const options = {
    count: 10,
    start: null,
    pad: 2,
    force: false,
    dryRun: false,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === "--count" || arg === "-n") {
      options.count = Number(argv[++i])
    } else if (arg === "--start" || arg === "-s") {
      options.start = Number(argv[++i])
    } else if (arg === "--pad" || arg === "-p") {
      options.pad = Number(argv[++i])
    } else if (arg === "--force" || arg === "-f") {
      options.force = true
    } else if (arg === "--dry-run") {
      options.dryRun = true
    } else if (arg === "--help" || arg === "-h") {
      options.help = true
    }
  }

  return options
}

function printHelp() {
  console.log(`
Generate draft note slots in public/notes/

Usage:
  pnpm generate-slots [options]

Options:
  -n, --count <number>   How many slots to create (default: 10)
  -s, --start <number>   Starting slot number (default: auto, max existing + 1)
  -p, --pad <number>     Zero-padding width (default: 2 → slot-01)
  -f, --force            Overwrite existing slot files
      --dry-run          Show what would be created without writing files
  -h, --help             Show this help

Examples:
  pnpm generate-slots                  # create slot-101 .. slot-110
  pnpm generate-slots --count 50         # create 50 new slots after the latest
  pnpm generate-slots -n 20 -s 201 -p 3  # create slot-201 .. slot-220
`)
}

function getExistingSlotNumbers() {
  if (!existsSync(NOTES_DIR)) return []

  return readdirSync(NOTES_DIR)
    .map((file) => {
      const match = file.match(/^slot-(\d+)\.html$/)
      return match ? Number(match[1]) : null
    })
    .filter((value) => value !== null)
}

function buildSlotHtml(num, pad) {
  const label = String(num).padStart(pad, "0")
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Slot ${label}</title>
</head>
<body>
  <!-- draft -->
  <p>Draft slot ${label} — replace this entire file on GitHub to publish.</p>
</body>
</html>
`
}

function main() {
  const options = parseArgs(process.argv.slice(2))

  if (options.help) {
    printHelp()
    return
  }

  if (!Number.isInteger(options.count) || options.count <= 0) {
    console.error("Error: --count must be a positive integer")
    process.exit(1)
  }

  if (options.pad <= 0) {
    console.error("Error: --pad must be greater than 0")
    process.exit(1)
  }

  mkdirSync(path.join(NOTES_DIR, "assets"), { recursive: true })

  const existing = getExistingSlotNumbers()
  const start =
    options.start ?? (existing.length > 0 ? Math.max(...existing) + 1 : 1)

  if (!Number.isInteger(start) || start <= 0) {
    console.error("Error: --start must be a positive integer")
    process.exit(1)
  }

  const created = []
  const skipped = []

  for (let i = 0; i < options.count; i += 1) {
    const num = start + i
    const label = String(num).padStart(options.pad, "0")
    const slug = `slot-${label}`
    const filePath = path.join(NOTES_DIR, `${slug}.html`)

    if (existsSync(filePath) && !options.force) {
      skipped.push(slug)
      continue
    }

    if (!options.dryRun) {
      writeFileSync(filePath, buildSlotHtml(num, options.pad), "utf8")
    }

    created.push(slug)
  }

  if (options.dryRun) {
    console.log(`Dry run: would create ${created.length} slot(s)`)
  } else {
    console.log(`Created ${created.length} slot(s)`)
  }

  if (created.length > 0) {
    console.log(`Range: ${created[0]} .. ${created[created.length - 1]}`)
  }

  if (skipped.length > 0) {
    console.log(`Skipped ${skipped.length} existing slot(s). Use --force to overwrite.`)
  }
}

main()
