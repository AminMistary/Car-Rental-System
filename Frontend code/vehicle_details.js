document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleType = urlParams.get('type');
    const vehicleDetails = document.getElementById('vehicleDetails');

    const vehicles = {
        bike: [
            { name: 'Bike 1', img: 'img/bike1.jpg' },
            { name: 'Bike 2', img: 'img/bike2.jpg' },
            { name: 'Bike 3', img: 'img/bike3.jpg' },
            { name: 'Bike 4', img: 'img/bike4.jpg' },
            { name: 'Bike 5', img: 'img/bike5.jpg' }
        ],
        car: [
            { name: 'Car 1', img: 'img/car1.jpg' },
            { name: 'Car 2', img: 'img/car2.jpg' },
            { name: 'Car 3', img: 'img/car3.jpg' },
            { name: 'Car 4', img: 'img/car4.jpg' },
            { name: 'Car 5', img: 'img/car5.jpg' }
        ],
        bicycle: [
            { name: 'Bicycle 1', img: 'img/bicycle1.jpg' },
            { name: 'Bicycle 2', img: 'img/bicycle2.jpg' },
            { name: 'Bicycle 3', img: 'img/bicycle3.jpg' },
            { name: 'Bicycle 4', img: 'img/bicycle4.jpg' },
            { name: 'Bicycle 5', img: 'img/bicycle5.jpg' }
        ]
    };

    if (vehicles[vehicleType]) {
        vehicles[vehicleType].forEach(vehicle => {
            const vehicleDiv = document.createElement('div');
            vehicleDiv.classList.add('vehicle');
            vehicleDiv.innerHTML = `
                <img src="${vehicle.img}" alt="${vehicle.name}">
                <span>${vehicle.name}</span>
            `;
            vehicleDetails.appendChild(vehicleDiv);
        });
    } else {
        vehicleDetails.innerHTML = '<p>No vehicles found for this type.</p>';
    }

    // Store the state of the modal in session storage
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function () {
        sessionStorage.setItem('modalOpen', 'true');
    });
});