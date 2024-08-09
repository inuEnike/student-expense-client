document.addEventListener("DOMContentLoaded", () => {
    const protectedRoutes = ["/", "/index.html", "/dashboard.html", "/send-coin.html", "/buy-coin.html"];
  
    const isAuthenticated = () => {
      return !!localStorage.getItem("auth"); // Return true if 'auth' exists, false otherwise
    };
  
    const userNotAuthenticated = () => {
      const currentPath = window.location.pathname;
      console.log("====================================");
      console.log("Current Path:", currentPath);
      console.log("Protected Routes Includes Current Path:", protectedRoutes.includes(currentPath));
      console.log("====================================");
      if (protectedRoutes.includes(currentPath) && !isAuthenticated()) {
        window.location.href = "/login.html"; // Redirect to login page
      }
    };
  
    userNotAuthenticated();
  });
  