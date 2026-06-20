"use client"

import CartTotals from "@modules/common/components/cart-totals"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="text-2xl font-bold tracking-widest uppercase text-white drop-shadow-md">
        Order Summary
      </h2>
      
      <div className="text-gray-300">
        <DiscountCode cart={cart} />
      </div>
      
      <div className="w-full h-px bg-white/10"></div>
      
      <div className="text-gray-200">
        <CartTotals totals={cart} />
      </div>
      
      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
        className="w-full mt-2"
      >
        <button className="w-full h-14 flex items-center justify-center rounded-full font-semibold uppercase tracking-widest transition-all duration-300 bg-bruteks-accent/10 border border-bruteks-accent/50 text-bruteks-accent hover:bg-bruteks-accent hover:text-bruteks-dark shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]">
          Secure Checkout
        </button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary