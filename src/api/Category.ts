import request from "@/utils/Request";
// 获取分类数据
export const getCategory = (id: string | string[]) => {
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
// 获取二级分类
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id: string | string[]) => {
    return request({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
* @description: 获取导航数据
* @data { 
   categoryId: 1005000 ,
   page: 1,
   pageSize: 20,
   sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 } 
* @return {*}
*/
export const getSubCategoryAPI = (data:object) => {
    return request({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}


