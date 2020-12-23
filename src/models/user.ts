export enum Role {
    BUYER = 'buyer',
    SELLER = 'seller',
    ADMIN = 'admin',
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface User {
    id: number
    email: string
    pwd: string
    name: string
    role: Role
    status: UserStatus
    created_at: string
}

export interface UserRow extends User {
    deleted_at: string | null
}
