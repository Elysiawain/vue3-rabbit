import request from "@/utils/request";


export const getCategoryAPI:object = () => {
    return request({
        url: "/home/category/head",
        method: "get"
    });
}