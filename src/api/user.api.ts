import axios from "axios";
import { User } from "../models/user.model";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersFromApi = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(USERS_API_URL);
    return response.data;
};
