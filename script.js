document.getElementById('dice-button').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice').innerText = `"${data.slip.advice}"`;
            document.getElementById('advice-id').innerText = `#${data.slip.id}`;
        })
        .catch(error => console.error('Error fetching advice:', error));
});
