import {UserRow} from "../models/user";
import {BaseDao} from "../utils/base-dao";

class UserDao extends BaseDao {
    insertUser(email: string, pwd: string, name: string, role: string = 'buyer') {
        const queryStr = 'INSERT INTO USER_TB (email, pwd, name, role) VALUES (?, ?, ?, ?)'
        return this.insert(queryStr, [email, pwd, name, role])
    }

    getAllUser(): Promise<UserRow[]> {
        const queryStr = 'SELECT * FROM USER_TB'
        return this.getAll(queryStr)
    }

    getUserById(userId: number): Promise<UserRow> {
        const queryStr = 'SELECT * FROM USER_TB WHERE id = ? AND deleted_at IS NULL'
        return this.getOne(queryStr, [userId])
    }

    getActiveUserById(userId: number): Promise<UserRow | undefined> {
        const queryStr = 'SELECT * FROM USER_TB WHERE id = ? AND status = ?'
        return this.getOne(queryStr, [userId, 'ACTIVE'])
    }

    getActiveUserByEmailPwd(email: string, pwd: string): Promise<UserRow | undefined> {
        const queryStr = 'SELECT * FROM USER_TB WHERE email = ? AND pwd = ? AND status = ?'
        return this.getOne(queryStr, [email, pwd, 'ACTIVE'])
    }

    getActiveUserByEmail(email: string): Promise<UserRow | undefined> {
        const queryStr = 'SELECT * FROM USER_TB WHERE email = ? AND status = ?'
        return this.getOne(queryStr, [email, 'ACTIVE'])
    }

    setUserInactive(userId: number) {
        const queryStr = 'UPDATE USER_TB SET status = "INACTIVE", deleted_at = NOW() ' +
            'WHERE id = ? AND deleted_at IS NULL'
        return this.update(queryStr, [userId])
    }

    setUserStatus(userId: number, status: 'ACTIVE' | 'INACTIVE') {
        let queryStr
        if (status === 'INACTIVE') {
            queryStr = 'UPDATE USER_TB SET status = ?, deleted_at = NOW() WHERE id = ?'
        } else {
            queryStr = 'UPDATE USER_TB SET status = ?, deleted_at = null WHERE id = ?'
        }
        return this.update(queryStr, [status, userId])
    }
}

export const userDao = new UserDao()
