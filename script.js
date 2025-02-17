function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;
    
    // For testing purposes, we'll store data in localStorage
    const formData = {
        name,
        email,
        phone,
        comments,
        timestamp: new Date().toISOString()
    };
    
    // Get existing submissions or initialize empty array
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(formData);
    localStorage.setItem('submissions', JSON.stringify(submissions));
    
    // Display success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Form submitted successfully!';
    
    // Reset form
    document.getElementById('infoForm').reset();
    
    // Log submissions to console for testing
    console.log('Current submissions:', submissions);
}
