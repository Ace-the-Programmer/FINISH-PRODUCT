function contactForm(event) {
    event.preventDefault();  

    var confirmation = confirm("Are you sure you want to submit?");
    
    if (confirmation) {
        alert("Successfully Submitted"); 
        
        event.target.submit(); 
    } else {
        return false;  
    }
}

document.getElementById('contactForm').addEventListener('submit', contactForm);