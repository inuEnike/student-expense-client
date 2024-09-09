document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const errorElement = document.querySelector(".error");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
       // Reference to the button and error message elements
    const btn = document.querySelector(".btn");
    const errorElement = document.querySelector(".error");

    // Start loading state
    let loading = true;
    btn.innerHTML = "Loading...";
  
      // Get form data
      const firstname = document.getElementById("firstname").value;
      const lastname = document.getElementById("lastname").value;
      const surname = document.getElementById("surname").value;
      const matno = document.getElementById("matno").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const repeatPassword = document.getElementById("repeatPassword").value;
        
      try {
        // Make POST request to your backend signup API
        const response = await axios.post(
          "https://student-expense-tracker-lewk.onrender.com/api/v1/auth/signup",
          {
            firstname,
            lastname,
            surname,
            email,
            password,
            repeatPassword,
            matno,
           
          }
        );
  
        // If signup is successful
        if (response.status === 201) {
          alert("Signup successful! Redirecting to login page.");
          window.location.href = "/login.html"; // Redirect to login page
        }
      } catch (error) {
        // Handle any errors
        errorElement.textContent = error.response?.data?.errMessage || "An error occurred. Please try again.";
      }
    });
  });
  