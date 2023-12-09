import request from "@/utils/request";
// 获取分类数据
export const getCategory = (id: string) => {
    return request({
        url: "/category",
        method: "get",
        params: {
            id
        }
    })
}
export const getBannerAPI = (distributionSite: number) => {
    // 默认为1 商品为2
    distributionSite = distributionSite || 1;
    return request({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}