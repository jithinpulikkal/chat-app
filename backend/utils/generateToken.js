import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "5d" });
    res.cookie("jwt", token, {
        maxAge: 5 * 24 * 60 * 60 * 1000, //5D IN MS
        httpOnly: true, //PREVENT CROSS-SITE SCRIPTING ATTACKS
        sameSite:"strict" //CSRF ATTACKS CROSS-SITE REQUEST FORGERY
    });
};

export default generateToken;