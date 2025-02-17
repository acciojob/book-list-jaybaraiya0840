//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function () {
    // Get input values
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new row
    let table = document.getElementById('book-list');
    let row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    table.appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Event delegation to handle delete button clicks
document.getElementById('book-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
