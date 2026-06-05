"use client"

import { Plus } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { GITHUB_NOTES_FOLDER } from "@/lib/github-notes"

type GitHubNotesButtonProps = {
  className?: string
}

export function GitHubNotesButton({ className = "" }: GitHubNotesButtonProps) {
  const { t } = useLanguage()

  return (
    <a
      href={GITHUB_NOTES_FOLDER}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("notes.githubAdd")}
      title={t("notes.githubAdd")}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-colors shrink-0 ${className}`}
    >
      <Plus className="w-5 h-5" />
    </a>
  )
}
