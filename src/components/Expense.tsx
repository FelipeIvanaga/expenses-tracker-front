export type IExpense = {
	title: string
	date: string
	value: number
}

export function Expense({expense}: { expense: IExpense}) {
	return (
		<div className="border shadow-sm p-4 flex flex-row justify-between">
			<div>
				<h2 className="font-bold text-xl">{expense.title}</h2>
				<span>{expense.date}</span>
			</div>
			<div className="flex items-center">
				<span className="text-xl font-bold align-middle">$ {expense.value.toFixed(2)}</span>
			</div>
		</div>
	);
}
