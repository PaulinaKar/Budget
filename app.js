// budget Cobtroller
let budgetController = () => {
    let Expense = (id, description, value) => {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let income = (id, description, value) => {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    let calculateTotal = (type) => {
        let sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;;
    };
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,

    };

}

//UI controller
const UIController = () => {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list',
            budgetLabel: '.budget__value',
            incomeLabel: '.budget__income--value',
            expenseLabel: '.budget__expenses--value',
            percentageLabel: '.budget__expenses--percentage',
            container: '.container',
            expensesPercLabel: '.item__percentage',
            dateLabel: '.budget__title--month'

        };


        // Global app controller

        let controller = (budgetController, UIController) => {

        };