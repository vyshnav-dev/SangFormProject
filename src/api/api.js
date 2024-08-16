// api.js
import axios from 'axios';


import { BASE_URL } from "../config"; 



//GetSummery
export const GetSummery = async () => {
    try {
        
        const config = {
            headers: { "Content-Type": "application/json" },
        };

       
            const response = await axios.get(
                `${BASE_URL}Ray/GetHSESummary?UserId=12345`,
                config
              );
            return response; 
        
        
        // or whatever you need from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
}
}

//GetHSEDetails
export const GetHSEDetails = async (id) => {
    try {
        
        const config = {
            headers: { "Content-Type": "application/json" },
        };

       
            const response = await axios.get(
                `${BASE_URL}Ray/GetHSEDetails?iTransId=${id}`,
                config
              );
            return response; 
        
        
        // or whatever you need from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
}
}
//GetDescription
export const GetDescription = async (id) => {
    try {
        
        const config = {
            headers: { "Content-Type": "application/json" },
        };

       
            const response = await axios.get(
                `${BASE_URL}Ray/GetProjectDescription?iProject=${id}`,
                config
              );
            return response; 
        
        
        // or whatever you need from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
}
}
//GetDescription
export const GetEmployee = async () => {
    try {
        
        const config = {
            headers: { "Content-Type": "application/json" },
        };

       
            const response = await axios.get(
                `${BASE_URL}Ray/GetEmployee`,
                config
              );
            return response; 
        
        
        // or whatever you need from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
}
}



//PostData
export const PostData = async (data) => {
    const formDataToSubmit = new FormData()
    formDataToSubmit.append('data', JSON.stringify(data))
    formDataToSubmit.append("Signature" ,"Signature.jpg")
    try {
        
        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

       
            const response = await axios.post(
                `${BASE_URL}Ray/PostHSE`,formDataToSubmit,
                config
              );
            return response; 
        
        
        // or whatever you need from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
}
}