const lines = ['Joao', '500.00', '1230.30'];

const [sellerName, salary, sales] = lines;

const salaryWithBonus = (percentage, salary, saleString)=>{
    const percent = parseFloat(percentage) / 100;
    const sales = parseFloat(saleString);
    const bonus = percent * sales;

    return parseFloat(salary) + bonus;
}

const total = salaryWithBonus(15, salary, sales);
console.log(`TOTAL = R$ ${total.toFixed(2)}`);