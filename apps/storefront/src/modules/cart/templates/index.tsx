import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="py-12 md:py-24 content-container relative min-h-[70vh]">
      
      {/* Background Refraction Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bruteks-accent/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="mb-8 border-b border-white/10 pb-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-white drop-shadow-md">
          Client <span className="text-bruteks-accent">Cart</span>
        </h1>
      </div>

      {cart?.items?.length ? (
        <div className="flex flex-col large:flex-row gap-8 lg:gap-16 relative z-10">
          
          {/* LEFT: Item List */}
          <div className="flex flex-col flex-1 gap-y-8">
            {!customer && (
              <div className="glass-panel p-6">
                <SignInPrompt />
              </div>
            )}
            {/* The items list wraps natively but inherits dark theme from global */}
            <div className="text-white">
              <ItemsTemplate items={cart?.items} />
            </div>
          </div>

          {/* RIGHT: Sticky Checkout Panel */}
          <div className="flex flex-col w-full large:w-[400px] gap-y-8 z-10">
            <div className="glass-panel p-6 sm:p-8 large:sticky large:top-28 transition-all duration-300">
              <div className="text-white">
                <Summary cart={cart} />
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        /* Empty Cart State */
        <div className="relative z-10 w-full max-w-2xl mx-auto mt-12">
          <div className="glass-panel p-12 md:p-16 flex flex-col items-center text-center">
            <EmptyCartMessage />
          </div>
        </div>
      )}
    </div>
  )
}

export default CartTemplate