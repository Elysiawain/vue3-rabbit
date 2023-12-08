import request from "@/utils/request";


export const getCategoryAPI = () => {
    return request({
        url: "/home/category/head",
        method: "get"
    });
}