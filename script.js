// Farmers data (can be dynamically generated from a server)
const farmers = [
    { id: 1, name: 'John Doe', location: 'California', contact: '123-456-7890', bio: 'John has been farming for over 20 years...', images: ['harvest1.jpg', 'harvest2.jpg'] },
    { id: 2, name: 'Emily Smith', location: 'Texas', contact: '987-654-3210', bio: 'Emily specializes in organic farming...', images: ['harvest3.jpg', 'harvest4.jpg'] },
    { id: 3, name: 'Michael Johnson', location: 'Florida', contact: '456-789-1230', bio: 'Michael runs a family-owned farm...', images: ['harvest5.jpg', 'harvest6.jpg'] }
];


document.querySelectorAll('.view-farmer').forEach(button => {
    button.addEventListener('click', function() {
        const farmerId = this.parentElement.getAttribute('data-id');
        const selectedFarmer = farmers.find(farmer => farmer.id == farmerId);

        const queryParams = new URLSearchParams();
        queryParams.set('id', selectedFarmer.id);
        queryParams.set('name', selectedFarmer.name);
        queryParams.set('location', selectedFarmer.location);
        queryParams.set('contact', selectedFarmer.contact);
        queryParams.set('bio', selectedFarmer.bio);
        queryParams.set('images', selectedFarmer.images.join(','));

        window.location.href = `farmer.html?${queryParams.toString()}`;
    });
});
