"use client"

import { TrendingUp } from "lucide-react"

const trendingTopics = [
  { id: 1, name: "Artificial Intelligence", count: "2.5M searches" },
  { id: 2, name: "Machine Learning", count: "1.8M searches" },
  { id: 3, name: "Neural Networks", count: "1.2M searches" },
  { id: 4, name: "Deep Learning", count: "980K searches" },
  { id: 5, name: "Data Science", count: "850K searches" },
]

export default function TrendingTopics() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex space-x-3">
        {trendingTopics.map((topic) => (
          <button
            key={topic.id}
            className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/90 rounded-lg
                       border border-zinc-800 backdrop-blur-sm
                       transition-all duration-300
                       hover:bg-zinc-800 hover:border-zinc-700
                       focus:outline-none focus:ring-2 focus:ring-zinc-600
                       whitespace-nowrap"
          >
            <TrendingUp className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-col items-start">
              <span className="text-sm text-white">{topic.name}</span>
              <span className="text-xs text-zinc-400">{topic.count}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

