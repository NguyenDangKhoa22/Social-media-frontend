import axios from "axios";

export const registerUser = async (userData) =>{
    try {
        const response = await axios.post("http://localhost:4000/api/auth/register",userData);
        return { success: true, message: response.data.message};
    }
    catch (error){
        return {
            success: false,
            message: error.message?.data?.message || "Lỗi không xác định",
        };
    }
};