import { todoType } from "@/types/todoType";

// Helper function to get auth headers


export const getTodos = async () => {
    try {
        console.log("Fetching todos from:", process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST);
        const response = await fetch(`/api/todos`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
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
        const response = await fetch(`/api/todos/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
            credentials: "include"
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
        const response = await fetch(`/api/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo),
            credentials: "include"
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
        const response = await fetch(`/api/todos/${id}`, {
            method: "DELETE",
            credentials: "include"
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
