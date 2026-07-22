"use strict";

const fs = require("fs");
const path = require("path");

const hotelsFile = path.join(__dirname, "../data/hotels.json");

function getHotels() {
    return JSON.parse(fs.readFileSync(hotelsFile, "utf8"));
}

function saveHotels(hotels) {
    fs.writeFileSync(hotelsFile, JSON.stringify(hotels, null, 2));
}

// GET ALL
exports.getAllHotels = (req, res) => {

    let hotels = getHotels();

    const { search, city, rating, maxPrice } = req.query;

    if (search) {
        hotels = hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (city) {
        hotels = hotels.filter(hotel =>
            hotel.city.toLowerCase() === city.toLowerCase()
        );
    }

    if (rating) {
        hotels = hotels.filter(hotel =>
            hotel.rating >= Number(rating)
        );
    }

    if (maxPrice) {
        hotels = hotels.filter(hotel =>
            hotel.price <= Number(maxPrice)
        );
    }

    res.json(hotels);
};

// GET BY ID
exports.getHotelById = (req, res) => {

    const hotels = getHotels();

    const hotel = hotels.find(h => h.id == req.params.id);

    if (!hotel) {
        return res.status(404).json({
            success: false,
            message: "Hotel not found"
        });
    }

    res.json(hotel);
};

// CREATE
exports.createHotel = (req, res) => {

    const hotels = getHotels();

    const newHotel = {
        id: Date.now(),
        ...req.body
    };

    hotels.push(newHotel);

    saveHotels(hotels);

    res.status(201).json({
        success: true,
        hotel: newHotel
    });
};

// DELETE
exports.deleteHotel = (req, res) => {

    let hotels = getHotels();

    const oldLength = hotels.length;

    hotels = hotels.filter(h => h.id != req.params.id);

    if (hotels.length === oldLength) {
        return res.status(404).json({
            success: false,
            message: "Hotel not found"
        });
    }

    saveHotels(hotels);

    res.json({
        success: true,
        message: "Hotel deleted"
    });
};

// UPDATE
exports.updateHotel = (req, res) => {

    const hotels = getHotels();

    const index = hotels.findIndex(h => h.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Hotel not found"
        });
    }

    hotels[index] = {
        ...hotels[index],
        ...req.body
    };

    saveHotels(hotels);

    res.json({
        success: true,
        hotel: hotels[index]
    });

};