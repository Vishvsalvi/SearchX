import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-6 w-6 rounded-full bg-gray-800" />
        <Skeleton className="h-6 w-32 bg-gray-800" />
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Result Card */}
        <div className="p-6 rounded-lg bg-[#111111]">
          <div className="flex items-start gap-3 mb-3">
            <Skeleton className="h-5 w-5 bg-gray-800" />
            <Skeleton className="h-6 w-3/4 bg-gray-800" />
          </div>
          <Skeleton className="h-4 w-2/3 bg-gray-800/50" />
        </div>

        {/* Second Result Card */}
        <div className="p-6 rounded-lg bg-[#111111]">
          <div className="flex items-start gap-3 mb-3">
            <Skeleton className="h-5 w-5 bg-gray-800" />
            <Skeleton className="h-6 w-2/3 bg-gray-800" />
          </div>
          <Skeleton className="h-4 w-3/4 bg-gray-800/50" />
        </div>

        {/* Third Result Card */}
        <div className="p-6 rounded-lg bg-[#111111]">
          <div className="flex items-start gap-3 mb-3">
            <Skeleton className="h-5 w-5 bg-gray-800" />
            <Skeleton className="h-6 w-1/2 bg-gray-800" />
          </div>
          <Skeleton className="h-4 w-1/2 bg-gray-800/50" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 space-y-2">
        <Skeleton className="h-5 w-11/12 bg-gray-800" />
        <Skeleton className="h-5 w-3/4 bg-gray-800" />
      </div>
    </div>
  )
}

