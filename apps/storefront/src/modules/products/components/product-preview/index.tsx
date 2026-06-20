import { Text } from "@modules/common/components/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink 
      href={`/products/${product.handle}`} 
      className="group glass-panel-interactive block h-full overflow-hidden"
    >
      <div data-testid="product-wrapper" className="flex flex-col h-full p-4">
        
        {/* Image Container with inner rounded corners to sit securely inside the glass card */}
        <div className="relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/5 mb-5 group-hover:border-bruteks-accent/30 transition-colors duration-300">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
        </div>

        {/* Typography & Price layout */}
        <div className="flex flex-col flex-1 justify-between px-1 pb-1">
          <Text 
            className="text-white font-semibold text-base sm:text-lg tracking-wide truncate mb-2 group-hover:text-bruteks-accent transition-colors duration-300" 
            data-testid="product-title"
          >
            {product.title}
          </Text>
          
          <div className="flex items-center text-bruteks-accent font-medium tracking-wider drop-shadow-[0_0_8px_rgba(0,212,255,0.2)]">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>

      </div>
    </LocalizedClientLink>
  )
}