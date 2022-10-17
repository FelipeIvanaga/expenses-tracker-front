import { Expense, IExpense } from "./Expense";

const firstExpense: IExpense = {
	title: "Test Expense",
	date: "17/10/2022",
	value: 22
}

export function ExpensesList() {
	return (
		<div className="mx-auto max-w-2xl p-4 space-y-4">
			<h1 className="text-2xl font-bold">Last expenses</h1>
			<div className="space-y-2">
				<Expense expense={firstExpense} />
				<Expense expense={firstExpense} />
				<Expense expense={firstExpense} />
			</div>
		</div>
	);
}

