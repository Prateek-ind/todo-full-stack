export const login = async (  email: string, password: string ) => {
    const payload = { email, password };
    try {
        console.log("Logging in with:", email);
        const response = await fetch(`/api/auth/login`, {   
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        });
        
        console.log("Login response status:", response.status);
        
        if(!response.ok) {
            const errorData = await response.json();
            console.error("Login error:", errorData);
            throw new Error(errorData.message || "Failed to login");
        }
        const data = await response.json();
        console.log("Login successful:", data);
        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (  username: string, email: string, password: string ) => {
     
    const payload = { username, email, password };
    try {
        const response = await fetch(`/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        });
        if(!response.ok) {
            throw new Error("Failed to register");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
}

export const logout = async () => {
    try {
        const response = await fetch(`/api/auth/logout`, {
            method: "POST",
        });
        if (!response.ok) {
            throw new Error("Failed to logout");
        }
        const data = await response.json();
        localStorage.removeItem("token");
        return data;
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
}

