import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Table } from "@modules/common/components/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-6 mb-6 border-b border-white/10 flex items-center">
        <h2 className="text-xl font-semibold text-white tracking-wide uppercase">
          Selected Assets
        </h2>
      </div>
      <Table>
        <Table.Header className="border-t-0 border-b border-white/10">
          <Table.Row className="text-gray-400 text-xs tracking-widest uppercase bg-transparent hover:bg-transparent">
            <Table.HeaderCell className="!pl-0 bg-transparent">Item</Table.HeaderCell>
            <Table.HeaderCell className="bg-transparent"></Table.HeaderCell>
            <Table.HeaderCell className="bg-transparent">Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell bg-transparent">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right bg-transparent">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      currencyCode={cart?.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate