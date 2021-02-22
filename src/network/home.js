import request from "./request";
// 请求home轮播图数据
export const reqHomeMultidata = () => {
    return request({
        url: '/home/multidata'
    })
}
// 请求home列表数据
export const reqHomeList = (type, page) => {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
// 请求详情页数据
export const reqDetail = (iid) => {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
// 请求详情页推荐数据
export const reqRecommend = () => {
    return request({
        url: '/recommend'
    })
}

