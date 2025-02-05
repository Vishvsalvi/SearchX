interface SearchingStateProps {
  type: "web" | "thinking"
}

export default function SearchingState({ type }: SearchingStateProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-24">
      <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/90 px-4 py-2 rounded-full border border-zinc-800">
        <div className="relative w-2 h-2 bg-zinc-400 rounded-full animate-ping" />
        <span className="animate-pulse font-sans">{type === "web" ? "Web searching" : "Thinking"}</span>
      </div>
    </div>
  )
}

