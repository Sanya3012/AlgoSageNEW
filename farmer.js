// Function to retrieve query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display farmer's info and harvested images
window.onload = function() {
    const farmerName = getQueryParam('name');
    const farmerLocation = getQueryParam('location');
    const farmerContact = getQueryParam('contact');
    const farmerBio = getQueryParam('bio');
    const farmerImages = getQueryParam('images').split(',');

    document.getElementById('farmerName').textContent = farmerName;
    document.getElementById('farmerLocation').textContent = `Location: ${farmerLocation}`;
    document.getElementById('farmerContact').textContent = `Contact: ${farmerContact}`;
    document.getElementById('farmerBio').textContent = farmerBio;

    const gallery = document.getElementById('gallery');
    farmerImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${farmerName}'s Harvest`;
        gallery.appendChild(img);
    });
};
