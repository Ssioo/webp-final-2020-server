export interface ContentsRow {
    id: number
    title: string
    description: string
    video: string | null
    video_time: string
    thumbnail: string | null
    author_id: number
    created_at: string
    deleted_at: string | null
}

export interface Product {
    id: number
    name: string
    price: string
    img: string | null
    user_id: number
    created_at: string
    status: 'ACTIVE' | 'INACTIVE'
}

export interface AdsRow {
    id: number
    img: string
    link: string | null
    priority: number
    created_at: string
    expired_at: string | null
}

export interface Ads {
    id: number
    img: string
    link: string | null
}
