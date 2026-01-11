import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-card p-6 rounded-xl border">
            <div className="flex items-center gap-3 mb-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-8 w-12" />
          </div>
        ))}
      </div>

      {/* Projects Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="bg-card p-6 rounded-xl border">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-8" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
    </div>
  )
}