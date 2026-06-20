import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    // Added a relative wrapper and expanded top padding to clear the floating navbar
    <div className="flex flex-col small:flex-row small:items-start py-12 md:py-24 content-container gap-8 relative min-h-screen">
      
      {/* The Sticky Glass Sidebar for Filtering */}
      <div className="small:sticky small:top-28 w-full small:w-[280px] glass-panel p-6 shrink-0 z-10 transition-all duration-300">
        <RefinementList sortBy={sortBy || "created_at"} data-testid="sort-by-container" />
      </div>

      {/* Main Product Grid Area */}
      <div className="w-full flex-1">
        
        {/* Enterprise Grade Page Header */}
        <div className="mb-8 pb-4 border-b border-white/10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-white drop-shadow-md" data-testid="store-page-title">
            Digital <span className="text-bruteks-accent">&</span> Hardware Assets
          </h1>
        </div>

        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>

      </div>
    </div>
  )
}

export default StoreTemplate