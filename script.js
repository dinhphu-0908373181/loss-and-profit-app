function calculateProfit() {
    // Get input values
    const importPriceA = parseFloat(document.getElementById('importPriceA').value);
    const profitMarginA = parseFloat(document.getElementById('profitMarginA').value) / 100;
    const importPriceB = parseFloat(document.getElementById('importPriceB').value);
    const profitMarginB = parseFloat(document.getElementById('profitMarginB').value) / 100;
    const importPriceC = parseFloat(document.getElementById('importPriceC').value);
    const profitMarginC = parseFloat(document.getElementById('profitMarginC').value) / 100;

    // Calculate sale prices and final profits
    const salePriceA = importPriceA * (1 + profitMarginA);
    const finalProfitA = salePriceA - importPriceA;

    const salePriceB = importPriceB * (1 + profitMarginB);
    const finalProfitB = salePriceB - importPriceB;

    const salePriceC = importPriceC * (1 + profitMarginC);
    const finalProfitC = salePriceC - importPriceC;

    // Update the table with calculated values
    document.getElementById('salePriceA').innerText = salePriceA.toFixed(2);
    document.getElementById('finalProfitA').innerText = finalProfitA.toFixed(2);
    
    document.getElementById('salePriceB').innerText = salePriceB.toFixed(2);
    document.getElementById('finalProfitB').innerText = finalProfitB.toFixed(2);
    
    document.getElementById('salePriceC').innerText = salePriceC.toFixed(2);
    document.getElementById('finalProfitC').innerText = finalProfitC.toFixed(2);

    // Calculate and update the total profit
    const totalProfit = finalProfitA + finalProfitB + finalProfitC;
    document.getElementById('totalProfit').innerText = totalProfit.toFixed(2);
}
