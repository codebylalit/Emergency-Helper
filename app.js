// Update your makeEmergencyCall function
function makeEmergencyCall() {
    const emergencyType = document.getElementById('emergencyType').value;
    const emergencyMessage = document.getElementById('emergencyMessage').value;

    // Get the appropriate emergency number based on the selected type
    let emergencyNumber = '';

    switch (emergencyType) {
        case 'police':
            emergencyNumber = '100'; // Update with the actual police emergency number
            break;
        case 'fire':
            emergencyNumber = '101'; // Update with the actual fire emergency number
            break;
        case 'ambulance':
            emergencyNumber = '102'; // Update with the actual ambulance emergency number
            break;
        // Add more cases for other emergency types if needed
        default:
            break;
    }

    // Redirect to the phone app with the specific emergency number
    window.location.href = 'tel:' + emergencyNumber;
}
