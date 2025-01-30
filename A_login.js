document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const signupName = document.getElementById("signupName");
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modalMessage");
    const closeModalBtn = document.querySelector(".close-btn");
  
    // Function to show modal
    function showModal(message) {
      modal.style.display = "block";
      modalMessage.textContent = message;
    }
  
    // Close modal
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Form validation
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    }
  
    function validatePassword(password) {
      return password.length >= 6;
    }
  
    // Login form submit
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();
  
      if (!validateEmail(email)) {
        showModal("Please enter a valid email address.");
        return;
      }
  
      if (!validatePassword(password)) {
        showModal("Password must be at least 6 characters.");
        return;
      }
  
      // Simulate successful login
      showModal("Login successful! Redirecting...");
      setTimeout(function () {
        window.location.href = "dashboard.html"; // Redirect to dashboard
      }, 2000);
    });
  
    // Signup form submit
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = signupName.value.trim();
      const email = signupEmail.value.trim();
      const password = signupPassword.value.trim();
  
      if (!validateEmail(email)) {
        showModal("Please enter a valid email address.");
        return;
      }
  
      if (!validatePassword(password)) {
        showModal("Password must be at least 6 characters.");
        return;
      }
  
      // Simulate successful signup
      showModal("Signup successful! Please login.");
      setTimeout(function () {
        document.getElementById("flip").checked = false; // Switch to login form
      }, 2000);
    });
  
    // Forgot password link click
    forgotPasswordLink.addEventListener("click", function (event) {
      event.preventDefault();
      // Simulate sending a password reset link
      showModal("Password reset link sent! Please check your email.");
    });
  });