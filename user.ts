export type UserDetails = {
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    phone?: number;
    address?:{
        street?: string;
        city?: string;
        state?: string;
        zipCode?: number
    }
}