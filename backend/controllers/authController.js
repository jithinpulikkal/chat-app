import bcrypt from "bcryptjs";

import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { name, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords does not match." });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists." });
        }
        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 12);

        // https://avatar-placeholder.iran.liara.run/

        const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${name}`;
        const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${name}`;

        const newUser = new User({
            name,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyAvatar : girlAvatar,
        });
        if (newUser) {
            //GENERATE JWT
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "Invalid User data" });
        }
    } catch (error) {
        console.log("Error in signup", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const passwordCheck = await bcrypt.compare(password, user?.password || "");
        
        if (!user || !passwordCheck){
             return res.status(400).json({ error: "Invalid credentials" });
        }
        //GENERATE JWT
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            profilePic: user.profilePic,
            });
    } catch (error) {
        console.log("Error in login", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "",{maxAge:0})
        res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        console.log("Error in logout", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
 