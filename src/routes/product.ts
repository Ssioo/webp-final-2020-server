import {Router} from 'express'
import {decodeEvingJwt} from "../utils/auth";
import {ClientError, ClientErrorType, sendErr} from "../utils/response-handler";
import {userDao} from "../daos/UserDao";
import {contentsDao} from "../daos/ProductDao";

const router = Router()

router.get('/',async (req, res) => {
    try {
        const result = await contentsDao.getAllActiveContents()
        res.send({
            code: 200,
            data: result ?? []
        })
    } catch (e) {
        console.log(e)
        sendErr(res, e)
    }
})

router.post('/like', async (req, res) => {
    try {
        const { userId } = decodeEvingJwt(req)
        const isUserValid = await userDao.getActiveUserById(userId)
        if (!isUserValid) throw new ClientError(ClientErrorType.NO_DATA)
        //const result = await contentsDao.
    } catch (e) {
        console.log(e)
        sendErr(res, e)
    }
})

router.get('/ads', async (req, res) => {
    try {
        const result = await contentsDao.getAllActiveAds()
        res.send({
            code: 200,
            data: result ?? []
        })
    } catch (e) {
        console.log(e)
        sendErr(res, e)
    }
})

export = router
