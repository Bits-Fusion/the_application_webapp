import { Loader2 } from "lucide-react"

const MinimalLoading = () => {
  return (
    <div>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="flex items-center space-x-3">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="text-sm font-medium">
            Loading....
          </span>
        </div>
      </div>
    </div>
  )
}

export default MinimalLoading
