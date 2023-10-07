// Function to add a recommendation
function addRecommendation() {
    // Get values from input fields
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Check if either name or message is not empty
    if (name.trim() !== '' || message.trim() !== '') {
        // Get the element to display the latest recommendation
        var recommendationElement = document.getElementById('nRecommendation');

        // Display the recommendation in the designated element
        recommendationElement.style.display = 'block';
        recommendationElement.innerHTML = name + "<br>"+ '"'  + message + '"';

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';

        // Show the "Thanks for leaving a recommendation" popup
        document.getElementById('recommend').style.display = 'flex';

    } else {
        // Display an alert if required fields are not filled
        alert('Please fill in the required fields.');
    }
}

// Function to close the popup
function closePopup() {
    // Hide the "Thanks for leaving a recommendation" popup
    document.getElementById('recommend').style.display = 'none';
    
}
