import SearchBar from "../components/SearchBar"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-white text-center font-serif mb-6">
          Search for anything with <span className="italic">super search</span>
        </h1>
        <SearchBar />
      </div>
    </main>
  )
}

