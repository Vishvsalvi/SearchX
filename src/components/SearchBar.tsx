"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { useDispatch } from "react-redux"
import { addResult } from "@/app/redux/slices/resultSlice"
import { setResultLoading } from "@/app/redux/slices/resultLoadingSlice"
import axios from "axios"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"



export default function SearchBar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("")
  const dispatch = useDispatch();
  const searchLoading = useSelector(state => state)
  const router = useRouter()
  
  const result = useSelector(state => state)

  const handleSubmit = async (e: React.FormEvent) => {
  try {
      e.preventDefault()
      dispatch(setResultLoading(true));
      console.log(searchLoading)
      if (!query.trim()) return
      const response = await axios.post("/api/exa_search", { query });
      setQuery("")
      console.log(response.data);
      dispatch(addResult(response.data));
      dispatch(setResultLoading(false));
      
      console.log(result)
      if(pathname !== "/search"){
        router.push(`/search`)
      }
      return;
  } catch (error) {
    return new Error(error);
  }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="w-full bg-zinc-900/90 text-white pl-5 pr-12 h-12 rounded-lg 
                     border border-zinc-800 focus:border-zinc-600
                     placeholder:text-zinc-400 text-base font-sans
                     transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg
                     text-zinc-400 hover:text-white
                     transition-colors duration-200"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* {isSearching && searchType && <SearchingState type={searchType} />} */}
    </>
  )
}

