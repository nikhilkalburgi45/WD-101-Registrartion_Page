document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;

    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (age < 18 || age > 55) {
        alert('Age must be between 18 and 55.');
        return;
    }

    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const passwordCell = newRow.insertCell(2);
    const dobCell = newRow.insertCell(3);
    const termsCell = newRow.insertCell(4);

    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob;
    termsCell.textContent = termsAccepted ? 'true' : 'false';

    const formData = {
        name,
        email,
        password,
        dob,
        termsAccepted
    };

    let formEntries = JSON.parse(localStorage.getItem('formEntries')) || [];
    formEntries.push(formData);
    localStorage.setItem('formEntries', JSON.stringify(formEntries));

    document.getElementById('registration-form').reset();
});

window.onload = function() {
    const formEntries = JSON.parse(localStorage.getItem('formEntries')) || [];
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    formEntries.forEach(entry => {
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const passwordCell = newRow.insertCell(2);
        const dobCell = newRow.insertCell(3);
        const termsCell = newRow.insertCell(4);

        nameCell.textContent = entry.name;
        emailCell.textContent = entry.email;
        passwordCell.textContent = entry.password;
        dobCell.textContent = entry.dob;
        termsCell.textContent = entry.termsAccepted ? 'true' : 'false';
    });
};
