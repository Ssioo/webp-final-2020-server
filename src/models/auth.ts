export interface JwtCustomPayload {
    userId: number
}

export interface JwtPayload extends JwtCustomPayload {
    iat: number
    exp: number
}
