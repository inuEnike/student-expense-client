document.addEventListener("DOMContentLoaded", () => {
  const protectedRoutes = ["/", "/index.html", "/dashboard.html", "/send-coin.html", "/search.html", "/about.html", "transaction-history.html", "/settings.html", "/buy-coin.html"];

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


const invalidRoute = () => {
  const currentPath = window.location.pathname;

  // Check if the current path is in the list of protected routes
  const isProtectedRoute = protectedRoutes.includes(currentPath);

  if (!isProtectedRoute) {
    window.location.href = "/login.html"; // Redirect to login page if not a protected route
  }
};

// Call the invalidRoute function on page load
invalidRoute();

});

const logout = () => {
  if (window.confirm("Do you want to logout?")) {
    const token = window.localStorage.removeItem("auth")
    let removeToken;
    removeToken = token
    window.location.href = "/login.html";
  } else {
    return null
  }

  return removeToken
}

