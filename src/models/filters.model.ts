export type Filters = {
    name: string;
    username: string;
    email: string;
    phone: string;
};

export type FilterKey = keyof Filters;
