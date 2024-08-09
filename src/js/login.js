document.addEventListener("DOMContentLoaded", () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reference to the button and error message elements
    const btn = document.querySelector(".btn");
    const errorElement = document.querySelector(".error");

    // Start loading state
    let loading = true;
    btn.innerHTML = "Loading...";

    // Get input values
    const matno = document.querySelector(".matno").value;
    const password = document.querySelector(".password").value;

    if (!matno || !password) {
      alert("Please fill in the fields");
      loading = false;
      btn.innerHTML = "Submit";
      return;
    }

    try {
      // Make the API call
      const response = await axios.post(
        "https://student-expense-tracker-lewk.onrender.com/api/v1/auth/signin",
        {
          matno: matno,
          password: password,
        }
      );

      console.log(response);

      // Handle successful login
      if (response.status === 200) {
        localStorage.setItem("auth", response.data.token);
        window.location.href = "/"; // Redirect after successful login
      } else {
        // Display server error message
        errorElement.innerHTML = response?.data?.errMessage || "Login failed";
        setTimeout(() => {
          errorElement.innerHTML = ""; // Clear error message after 7 seconds
        }, 7000);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      errorElement.innerHTML =
        error.response?.data?.errMessage || "An error occurred";
      setTimeout(() => {
        errorElement.innerHTML = ""; // Clear error message after 7 seconds
      }, 7500);
    } finally {
      // Reset loading state
      loading = false;
      btn.innerHTML = "Submit";
    }
  };

  // Attach event listener to the form
  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
});
