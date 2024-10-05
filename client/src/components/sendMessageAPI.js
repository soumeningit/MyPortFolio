import { apiConnector } from "./apiConnector";

const BASE_URL = "http://localhost:4000/api";
const MESSAGE_SEND_URL = BASE_URL + "/sendMessage";

export const sendMessageAPI = async (data) => {
    // console.log("INSIDE SEND MESSAGE API ....", data);
    try {
        const response = await apiConnector("POST", MESSAGE_SEND_URL, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}