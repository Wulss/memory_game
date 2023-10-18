import axios from "axios";

const apiURL =
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20";

export const fetchImages = async () => {
    try {
        const response = await axios.get(apiURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
