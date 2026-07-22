"use strict";

const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersPath = path.join(__dirname, "../data/users.json");

function getUsers() {
    return JSON.parse(fs.readFileSync(usersPath, "utf8"));
}

function saveUsers(users) {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

exports.register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const users = getUsers();

    const exists = users.find(user => user.email === email);

    if (exists) {
        return res.status(400).json({
            success: false,
            message: "Email already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword
    };

    users.push(newUser);

    saveUsers(users);

    res.status(201).json({
        success: true,
        message: "Registration successful"
    });

};

exports.login = async (req, res) => {

    const { email, password } = req.body;

    const users = getUsers();

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Email not found"
        });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(400).json({
            success: false,
            message: "Incorrect password"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    res.json({
        success: true,
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });

};