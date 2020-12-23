import {BaseDao} from "../utils/base-dao";
import {Ads, Product} from "../models/product";

class ProductDao extends BaseDao {
    getAllActiveContents(): Promise<Product[] | undefined> {
        const queryStr = 'SELECT C.id, C.img, C.name, C.price, C.created_at, C.status, C.created_at, C.user_id, U.name AS user_name, U.email ' +
            'FROM PRODUCT_TB AS C ' +
            'LEFT JOIN USER_TB AS U ON U.id = C.user_id ' +
            'WHERE C.deleted_at IS NULL'
        return this.getAll(queryStr)
    }
    getAllActiveAds(): Promise<Ads[] | undefined> {
        const queryStr = 'SELECT id, img, link FROM ADS_TB WHERE expired_at >= NOW() ORDER BY priority DESC'
        return this.getAll(queryStr)
    }

    createLikeOn(contentsId: number) {
        const queryStr = 'INSERT CONTENTS_LIKE_TB (contents_id, user_id) '
    }
}

export const contentsDao = new ProductDao()
