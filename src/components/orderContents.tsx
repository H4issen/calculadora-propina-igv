import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type orderContentsProps = {
	order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: orderContentsProps) {
	return (
		<div>
			<h2 className="font-black text-4xl">Consumo</h2>

			<div className="space-y-3 mt-5">
				{order.length === 0 ? (
					<p className="text-center">La orden esta vacia</p>
				) : (
					order.map((item) => (
						<div key={item.id} className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b">
							<div>
								<p>
									{item.name} - {formatCurrency((item.price*0.18) + item.price)}
								</p>
								<p className="font-black">
									Cantidad: {item.quantity} -{" "}
									{formatCurrency((item.price*item.quantity) + (item.price *0.18)*item.quantity)}
								</p>
							</div>

							<button className="bg-red-400 hover:bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}
                            >
								X
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
}
