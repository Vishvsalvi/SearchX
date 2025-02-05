"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchForm() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2 max-w-2xl mx-auto">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
          className="flex-grow bg-accent text-accent-foreground placeholder:text-accent-foreground/50"
        />
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  )
}

