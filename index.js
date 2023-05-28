document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
    // Perform any necessary validation or processing here
    
    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    
    // Display a success message or redirect to a thank you page
    alert("Your message has been sent successfully!");
  });
  
  // Update the displayed email and phone number
  document.getElementById("email-display").innerText = "yadavshravankumar1925@gmail.com";
  document.getElementById("phone-display").innerText = "+919525404382";
  
