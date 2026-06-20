import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      {/* Main Product Section with Top Padding to clear the floating Navbar */}
      <div
        className="content-container flex flex-col large:flex-row py-12 md:py-24 gap-8 lg:gap-16 relative"
        data-testid="product-container"
      >
        {/* Subtle Background Glow for Glass Refraction */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-bruteks-accent/10 rounded-full mix-blend-screen filter blur-[128px] opacity-40 pointer-events-none"></div>

        {/* LEFT: Immersive Image Gallery (Takes up 60% of the screen on desktop) */}
        <div className="block w-full large:w-[60%] relative z-10">
          <ImageGallery images={images} />
        </div>

        {/* RIGHT: The Unified Sticky Checkout Glass Panel (Takes up 40%) */}
        <div className="flex flex-col w-full large:w-[40%] gap-y-8 z-10">
          <div className="glass-panel p-6 sm:p-8 large:sticky large:top-28 transition-all duration-300">
            
            <ProductOnboardingCta />
            
            {/* Product Title, Brand, and Price */}
            <div className="mb-6">
              <ProductInfo product={product} />
            </div>

            <div className="w-full h-px bg-white/10 mb-6"></div>

            {/* Variant Selectors and Add to Cart Button */}
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>

            <div className="w-full h-px bg-white/10 my-6"></div>

            {/* Expandable Tabs (Description, Shipping, Specs) */}
            <ProductTabs product={product} />
            
          </div>
        </div>
      </div>

      {/* Related Products Section at the bottom */}
      <div
        className="content-container my-16 small:my-32 border-t border-white/5 pt-16"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate