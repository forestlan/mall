
import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'
export default {
    // 购物车信息
    addShopCart(context, payload) {
        return new Promise((res, rej) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct)
                res('数量加1')
            } else {
                payload.count = 1;
                context.commit(ADD_TO_CART, payload)
                res('添加新商品')

            }
        })
    }
}
