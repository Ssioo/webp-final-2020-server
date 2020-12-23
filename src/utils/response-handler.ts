import { Response } from 'express'

export enum ClientErrorType {
    MISSING_PARAMS = 'There are some missing parameters',
    INVALID_DATA = 'There are some invalid data in query/params/body',
    NO_DATA = 'There are no such data in DB',
    DUPLICATE = 'There are same data in DB',
    TOKEN_EXPIRED = 'Token is Expired',
}

export class ClientError extends Error {
    constructor(type: ClientErrorType | string) {
        super(type);
    }

    public static toCode(err: ClientError | Error) {
        switch (err.message) {
            case ClientErrorType.MISSING_PARAMS:
                return 4010
            case ClientErrorType.NO_DATA:
                return 4011
            case ClientErrorType.DUPLICATE:
                return 4012
            case ClientErrorType.INVALID_DATA:
                return 4013
            case ClientErrorType.TOKEN_EXPIRED:
                return 4050
            default:
                return 500
        }
    }
}

export const sendRes = (res: Response, code, message?, data?) => {
    res.send({
        code: code,
        msg: message ?? undefined,
        data: data ?? undefined
    })
}

export const sendErr = (res: Response, err: ClientError | Error) => {
    res.send({
        code: ClientError.toCode(err),
        msg: err?.message ?? 'Internal Server Error',
    })
}
