import React, { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ name, username, gender, password, confirmPassword }) => {
        const success = handleErrors({ name, username, gender, password, confirmPassword });
        console.log("Validation success:", success);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({ name, username, gender, password, confirmPassword }),
            });
            const data = await res.json();
            console.log(data);

            if (data.error) {
                throw new Error(data.error);
            } else {
                toast.success("Signup Successfull");
                setLoading(false);

                //local storage
                localStorage.setItem("chat-user", JSON.stringify(data));
                setAuthUser(data);

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
