export interface User {
    name: string,
    last_name?: string,
    email: string,
    role_id: number,
    password: string,
    tax_address?: string,
    phone?: string,
}