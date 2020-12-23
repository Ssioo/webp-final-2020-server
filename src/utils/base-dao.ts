import { query } from "./query-builder"

export class BaseDao {

    protected getOne (queryString: string, args: any[] = []) {
        return query(async (conn: any) => {
            const [rows] = await conn.query(queryString, args)
            return rows[0]
        })
    }

    protected getAll (queryString: string, args: any[] = []) {
        return query(async (conn: any) => {
            const [rows] = await conn.query(queryString, args)
            return rows
        })
    }

    protected insert (queryString: string, args: any[] = []) {
        return query(async (conn: any) => {
            const [obj] = await conn.query(queryString, args)
            return obj.insertId
        })
    }

    protected update (queryString: string, args: any[] = []) {
        return query(async (conn: any) => {
            await conn.query(queryString, args)
        })
    }

    protected delete (queryString: string, args: any[] = []) {
        return query(async (conn: any) => {
            await conn.query(queryString, args)
        })
    }
}
