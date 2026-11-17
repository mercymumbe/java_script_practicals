// 1. Define the expense categories
const categories = [
    { name: "Food", icon: "🍲" },
    { name: "Shopping", icon: "🛍️" },
    { name: "Medical", icon: "🩺" },
    { name: "Transport", icon: "🚌" },
    { name: "Bills", icon: "🧾" },
    { name: "Other", icon: "📋" }
];

// 2. Get the category container from HTML
const categoryGrid = document.getElementById("categoryGrid");

// 3. Sample expenses for testing
const expenses = [
    { description: "Breakfast", amount: 240, category: "Food" },
    { description: "Shoes", amount: 2000, category: "Shopping" },
    { description: "Medicine", amount: 100, category: "Medical" },
    { description: "Bus fare", amount: 150, category: "Transport" },
    { description: "Electricity", amount: 500, category: "Bills" },
    { description: "Other items", amount: 300, category: "Other" }
];

// 4. Format amounts in Kenyan shillings
function formatMoney(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 2
    }).format(amount);
}

// 5. Display category cards
function displayCategoryCards(expenses) {

    // Create a card for every category
    categoryGrid.innerHTML = categories.map(
        ({ name, icon }) => {

            // Find expenses belonging to this category
            const categoryExpenses = expenses.filter(
                expense => expense.category === name
            );

            // Calculate the total for this category
            const total = categoryExpenses.reduce(
                (sum, expense) => sum + Number(expense.amount),
                0
            );

            // Return the HTML for one card
            return `
                <button class="category-card"
                        type="button"
                        data-category="${name}">

                    <span class="category-icon">
                        ${icon}
                    </span>

                    <strong>${name}</strong>

                    <span class="amount">
                        ${formatMoney(total)}
                    </span>

                </button>
            `;
        }
    ).join("");
}

// 6. Call the function to display the cards
displayCategoryCards(expenses);