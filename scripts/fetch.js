// Example: Fetch data from an API
function fetchData() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            // Example: Process fetched data
            renderData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            showError('Failed to fetch data. Please try again.');
        });
}

// Example: Render fetched data on the page
function renderData(data) {
    const dataList = document.querySelector('.data-list');
    dataList.innerHTML = ''; // Clear previous content

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        dataList.appendChild(listItem);
    });
}
