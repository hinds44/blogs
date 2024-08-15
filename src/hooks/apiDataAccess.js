function POST(url) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        // Handle the response data here
    }).catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

export default POST