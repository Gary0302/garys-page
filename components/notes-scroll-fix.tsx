"use client"

import { useEffect } from "react"

/** Undo global overflow locks that block wheel/trackpad scroll on notes routes. */
export function NotesScrollFix() {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    html.classList.add("notes-route-scroll")
    body.classList.add("notes-route-scroll")

    return () => {
      html.classList.remove("notes-route-scroll")
      body.classList.remove("notes-route-scroll")
    }
  }, [])

  return null
}
