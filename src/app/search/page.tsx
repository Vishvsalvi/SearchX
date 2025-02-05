"use client"
import { Suspense } from "react"
import SearchResults from "@/components/SearchResults"
import SearchBar from "@/components/SearchBar"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

interface exa_result {
  answer: string,
  citations: [
   { id: string,
    url: string,
    favicon: string,
    title: string,
    author: string,
    publishedDate: string,
  }
  ]
}

interface SearchState {
  result: exa_result[];
  resultLoading: boolean;
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const router = useRouter();
  const search_results = useSelector((state: SearchState) => state)
  const results = search_results.result
  const isLoading = search_results.resultLoading

  if(results.length === 0){
    router.push("/")
    return;
  }

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto p-4">
          <Suspense fallback={<div className="text-zinc-400">Loading...</div>}>
            <SearchResults results={results} isLoading={isLoading} />
          </Suspense>
        </div>
      </div>
      <div className="sticky bottom-0 border-t border-zinc-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto p-4">
          <SearchBar />
        </div>
      </div>
    </main>
  )
}
