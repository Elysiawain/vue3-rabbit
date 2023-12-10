import request from "@/utils/Request"
export const getDetail=(id:string|string[])=>{
    return request({
        url:'goods',
        params:{
            id
        }
    })
}