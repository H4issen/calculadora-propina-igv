import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type orderTotalsProps = {
    order: OrderItem[]
} 

export default function OrderTotals({order} : orderTotalsProps) {

const TotalAmount = useMemo(() => order.reduce((total, item) => total + ((item.quantity * item.price) + item.quantity * (item.price*0.18)), 0), [order])

	return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-3xl">Precio Total</h2>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(TotalAmount)}</span>
                </p>
            </div>

            <button>
            </button>
        </>
    )
}
