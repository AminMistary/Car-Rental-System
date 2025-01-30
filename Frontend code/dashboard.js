document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profileButton");
    const settingsButton = document.getElementById("settingsButton");
    const vehiclesButton = document.getElementById("vehiclesButton");
    const logoutButton = document.getElementById("logoutButton");
    const profileModal = document.getElementById("profileModal");
    const settingsModal = document.getElementById("settingsModal");
    const vehicleOptionsModal = document.getElementById("vehicleOptionsModal");
    const closeProfileModal = document.getElementById("closeProfileModal");
    const closeSettingsModal = document.getElementById("closeSettingsModal");
    const closeVehicleOptionsModal = document.getElementById("closeVehicleOptionsModal");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const userNameElement = document.querySelector(".user-name");
    const userImageElement = document.querySelector(".user-img");
    const headerProfilePic = document.getElementById("headerProfilePic");
    const profilePicModal = document.getElementById("profilePicModal");
    const profilePicInModal = document.getElementById("profilePicInModal");
    const closeProfilePicModal = document.getElementById("closeProfilePicModal");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.value = savedTheme;
    }

    // Load saved profile data
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
        document.getElementById("username").value = savedProfile.username;
        document.getElementById("email").value = savedProfile.email;
        document.getElementById("password").value = savedProfile.password;
        document.getElementById("history").value = savedProfile.history;
        userNameElement.textContent = savedProfile.username;
        userImageElement.src = savedProfile.profilePic || 'img/profile.jpg';
    } else {
        userImageElement.src = 'img/profile.jpg';
    }

    // Check if the modal was previously open
    if (sessionStorage.getItem('modalOpen') === 'true') {
        vehicleOptionsModal.style.display = 'block';
        sessionStorage.removeItem('modalOpen');
    }

    profileButton.addEventListener("click", function (event) {
        event.preventDefault();
        profileModal.style.display = "block";
    });

    settingsButton.addEventListener("click", function (event) {
        event.preventDefault();
        settingsModal.style.display = "block";
    });

    vehiclesButton.addEventListener("click", function (event) {
        event.preventDefault();
        vehicleOptionsModal.style.display = "block";
    });

    headerProfilePic.addEventListener("click", function () {
        profilePicInModal.src = userImageElement.src;
        profilePicModal.style.display = "block";
    });

    closeProfileModal.addEventListener("click", function () {
        profileModal.style.display = "none";
    });

    closeSettingsModal.addEventListener("click", function () {
        settingsModal.style.display = "none";
    });

    closeVehicleOptionsModal.addEventListener("click", function () {
        vehicleOptionsModal.style.display = "none";
    });

    closeProfilePicModal.addEventListener("click", function () {
        profilePicModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === profileModal) {
            profileModal.style.display = "none";
        }
        if (event.target === settingsModal) {
            settingsModal.style.display = "none";
        }
        if (event.target === vehicleOptionsModal) {
            vehicleOptionsModal.style.display = "none";
        }
        if (event.target === profilePicModal) {
            profilePicModal.style.display = "none";
        }
    });

    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "first_page.html";
    });

    themeToggle.addEventListener("change", function () {
        if (themeToggle.value === "light") {
            body.classList.add("light-theme");
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light-theme");
        } else {
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark-theme");
        }
    });

    document.getElementById("profileForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const profilePicInput = document.getElementById("profilePic");
        const profilePic = profilePicInput.files[0] ? URL.createObjectURL(profilePicInput.files[0]) : userImageElement.src;
        const profileData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            history: document.getElementById("history").value,
            profilePic: profilePic
        };
        localStorage.setItem("profile", JSON.stringify(profileData));
        userNameElement.textContent = profileData.username;
        userImageElement.src = profileData.profilePic;
        alert("Profile updated successfully!");
    });
});

function showDetails(vehicle) {
    alert("Showing details for " + vehicle);
}