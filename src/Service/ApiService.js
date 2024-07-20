import axios from 'axios';

const API_URL = "https://banzon-sb.yeems214.xyz/";

export const login = async ({ username, password }) => {
    try {
        console.log('Sending login request with username and password:', username, password);
        
        const response = await axios.post(`${API_URL}/login`, {
            username: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (accountDetails) => {
    try {
        const response = await axios.post(`${API_URL}/register`, accountDetails);
        return response.data;
    } catch (error) {
        console.error('Error creating account', error);
        throw error;
    }
};

export const getAllMusic = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/music/getAllMusic`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Music', error);
        throw error;
    }

}

export const addingMusic = async (musicDetails) => {
    try {
        const response = await axios.post(`${API_URL}/api/music/addingMusic`, musicDetails);
        return response.data;
    } catch (error) {
        console.error('Error creating Music', error);
        throw error;
    }
};