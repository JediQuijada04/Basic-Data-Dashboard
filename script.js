
const totalUsers = document.getElementById('totalUsersBar');
const totalSales = document.getElementById('totalSalesBar');


const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', () => {
    const users = totalUsers.textContent;
    const sales = totalSales.textContent;
    alert(`Total Users: ${users}, Total Sales: ${sales}`);
});
