import { useState } from 'react';

const budgetlines = [
    "Food",
    "Entertainment",
    "Family",
    "Transportation",
    "Bills"
];

function useBudgetList() {
    const [budget, _] = useState(budgetlines.map((budgetline, i) =>
        ({ id: i, title: budgetline })))

    return { budget };
}

export default useBudgetList;