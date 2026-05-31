"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  if (!mounted) {
    return <Button variant="outline" size="sm" className="rounded-full text-sm font-medium" disabled />
  }

  return (
    <Button onClick={toggleLanguage} variant="outline" size="sm" className="rounded-full text-sm font-medium">
      {t("language.toggle")}
    </Button>
  )
}
