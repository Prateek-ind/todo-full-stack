export const login = async (  email: string, password: string ) => {
    const payload = { email, password };
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {   
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        });
        
        if(!response.ok) {
            throw new Error("Failed to login");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (  username: string, email: string, password: string ) => {
     
    const payload = { username, email, password };
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
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

