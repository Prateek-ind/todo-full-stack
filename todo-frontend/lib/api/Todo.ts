import { todoType } from "@/types/todoType";

export const getTodos = async () => {
    try {
        const token = localStorage.getItem("token");
        console.log("Fetching todos from:", process.env.NEXT_PUBLIC_BASE_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log("Todos response status:", response.status);
        
        if(!response.ok) {
            const errorData = await response.json();
            console.error("Get todos error:", errorData);
            throw new Error(errorData.message || "Failed to fetch todos");
        }
        const data = await response.json();
        return data.todos;
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;
    }
}

export const createTodo = async (todo: todoType) => {    
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, 
                     },
            body: JSON.stringify(todo),
        });
        if(!response.ok) {
            throw new Error("Failed to create todo");
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Error creating todo:", error);
        throw error;
    }
}

export const updateTodo = async (id: string, todo: todoType) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(todo),
           
        });
        if(!response.ok) {
            throw new Error("Failed to update todo");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    }
}

export const deleteTodo = async (id: string) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if(!response.ok) {
            throw new Error("Failed to delete todo");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error;
    }
}
