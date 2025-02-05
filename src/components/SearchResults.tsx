"use client"
import { Globe } from "lucide-react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import ResultLoading from "@/components/ResultLoading"
interface exa_result {
  answer: string,
  citations: [
    {
      id: string,
      url: string,
      favicon: string,
      title: string,
      author: string,
      publishedDate: string,
    }
  ]
}


export default function SearchResults({ results, isLoading }: { results: exa_result[], isLoading: boolean }) {



  return (
    <div>
      {results.map((result, index) => {
        return (
          <div className="my-10" key={index}>
            <div className="space-y-6 font-sans">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Globe className="w-5 h-5" />
                  <h1 className="text-lg font-medium">Web Search</h1>
                </div>
              </div>

              <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4 min-w-max scrollbar-hide">
                  {result.citations.map((element, index) => (
                    <div key={index} className="p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm w-80">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6">
                          {element.favicon ? (
                            <img
                              src={element.favicon || "/placeholder.svg"}
                              alt="favicon"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <ExternalLink className="w-full h-full text-white" />
                          )}
                        </div>
                        <div>
                          <Link
                            href={element.url}
                            className="tracking-tight block text-md font-semibold text-white hover:underline"
                          >
                            {element.title}
                          </Link>
                          <div className="text-xs text-zinc-400 mt-0.5">{element.url}</div>
                        </div>
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-6">
                <div className="space-y-4">
                  <p className="text-zinc-300 leading-relaxed">{result.answer}</p>
                </div>
              </div>
            </div> {
                    isLoading && <ResultLoading />
                  }
          </div>
        );
      })}
    </div>
  )
}

