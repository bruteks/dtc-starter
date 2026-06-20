import { HttpTypes } from "@medusajs/types"
import { clx } from "@modules/common/components/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  // Extract unique option values
  const filteredOptions = Array.from(new Set((option.values ?? []).map((v) => v.value)))

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
        {title}
      </span>
      <div
        className="flex flex-wrap gap-3"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          const isSelected = v === current;

          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              className={clx(
                "h-11 rounded-xl px-5 flex-1 min-w-[70px] font-medium tracking-wide transition-all duration-300 ease-out border backdrop-blur-md",
                {
                  // 1. Selected State: Locked in with the Bruteks Accent Glow
                  "bg-bruteks-accent/10 border-bruteks-accent text-bruteks-accent shadow-[0_0_15px_rgba(0,212,255,0.15)]": isSelected,
                  
                  // 2. Unselected State: Subtle Glass Panel
                  "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-bruteks-accent/40 hover:text-white": !isSelected && !disabled,
                  
                  // 3. Disabled State: Dimmed out when inventory is low
                  "opacity-40 cursor-not-allowed bg-transparent border-white/5 text-gray-600": disabled,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect