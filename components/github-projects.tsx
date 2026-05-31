"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  fork: boolean
}

interface GitHubProjectsProps {
  username: string
  limit?: number
}

export function GitHubProjects({ username, limit = 3 }: GitHubProjectsProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`)

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories")
        }

        const data = await response.json()
        setRepos(data.filter((repo: GitHubRepo) => !repo.fork).slice(0, limit))
        setLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err)
        setError("Could not load GitHub projects")
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username, limit])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(limit)].map((_, i) => (
          <Skeleton key={i} className="h-48 bg-gray-800" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">{error}</p>
      </div>
    )
  }

  if (repos.length === 0) {
    return (
      <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">No public repositories found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <div key={repo.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 flex flex-col h-full border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-lg mb-2 text-gray-900 dark:text-white">{repo.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">{repo.description || "No description available"}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              {repo.language && (
                <span className="text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {repo.language}
                </span>
              )}
              <span className="text-xs flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stargazers_count}
              </span>
              <span className="text-xs flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {repo.forks_count}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="p-0 text-primary hover:text-primary/80" asChild>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
