import { Filters } from "../models/filters.model";
import { User } from "../models/user.model";

export const filterUsers = (users: User[], filters: Filters): User[] => {
    return users.filter((user: User) => {
        return (
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            user.username
                .toLowerCase()
                .includes(filters.username.toLowerCase()) &&
            user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
            user.phone.toLowerCase().includes(filters.phone.toLowerCase())
        );
    });
};
