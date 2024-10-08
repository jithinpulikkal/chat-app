import React, { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleErrors(username, password);
        console.log("Validation success:", success);
        if (!success) return;
        setLoading(true);
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Login successful");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, login };
};

export default useLogin;

function handleErrors(username, password) {
    if (!username || !password) {
        toast.error("Please fill all fields");
        return false;
    }
    return true;
}
