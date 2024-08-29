import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const signup = async ({ name, username, gender, password, confirmPassword }) => {
        const success = handleErrors({ name, username, gender, password, confirmPassword });
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, username, gender, password, confirmPassword }),
            });
            const data = await res.json();
            console.log(data);

            if (data.success) {
                toast.success("Signup Successfull");
                setLoading(false);
                return data;
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup };
};

export default useSignup;

function handleErrors({ name, username, gender, password, confirmPassword }) {
    if (!name || !username || !gender || !password || !confirmPassword) {
        toast.error("Please fill all fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return false;
    }
    return true;
}
