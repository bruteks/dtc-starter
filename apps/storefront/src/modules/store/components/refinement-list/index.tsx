"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  'data-testid'?: string
}

const RefinementList = ({
  sortBy,
  'data-testid': dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="flex flex-col gap-6" data-testid={dataTestId}>
      {/* Sidebar Header */}
      <div>
        <h3 className="text-lg font-semibold text-white tracking-wide uppercase mb-2">
          Refine Search
        </h3>
        <div className="w-12 h-1 bg-bruteks-accent rounded-full mb-4"></div>
      </div>
      
      {/* Sorting Component Wrapper */}
      <div className="text-gray-300 hover:text-white transition-colors duration-200">
        <SortProducts
          sortBy={sortBy}
          setQueryParams={setQueryParams}
          data-testid={dataTestId}
        />
      </div>
    </div>
  )
}

export default RefinementList