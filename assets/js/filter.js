const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");

function filterHotels() {

    const keyword = searchInput.value.toLowerCase();

    const price = priceFilter.value;

    const rating = Number(ratingFilter.value);

    const filtered = hotels.filter(hotel => {

        const searchMatch =
            hotel.name.toLowerCase().includes(keyword) ||
            hotel.city.toLowerCase().includes(keyword);

        const priceMatch =
            price === "all" ||
            hotel.price <= Number(price);

        const ratingMatch =
            hotel.rating >= rating;

        return searchMatch && priceMatch && ratingMatch;

    });

    renderHotels(filtered);

}

if (searchInput) {
    searchInput.addEventListener("input", filterHotels);
}

if (priceFilter) {
    priceFilter.addEventListener("change", filterHotels);
}

if (ratingFilter) {
    ratingFilter.addEventListener("change", filterHotels);
}