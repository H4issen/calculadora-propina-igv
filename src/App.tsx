import MenuItem from "./components/menuItem";
import OrderContents from "./components/orderContents";
import OrderTotals from "./components/orderTotals";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
	const { order, addItem, removeItem} = useOrder();

	return (
		<>
			<header className="bg-teal-400 py-5">
				<h1 className="text-center text-4xl font-bold">
					Calculadora de Precio y Consumo
				</h1>
			</header>

			<main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
				<div>
					<h2 className="text-4xl font-bold">Menu</h2>

					<div className="mt-4">
						{menuItems.map((item) => (
							<MenuItem 
							key={item.id} 
							item={item} 
							addItem={addItem}
							/>
						))}
					</div>
				</div>

				<div className="border border-dashed ml-5 border-slate-300 p-5 rounded-lg space-y-10">
					<OrderContents
						order={order}
						removeItem={removeItem}
					/>

					<OrderTotals
						order={order}
					/>
				</div>
			</main>
		</>
	);
}

export default App;
