// catagory数据仓库
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/api/Layout";
import { ref } from "vue";


export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref<any>([])
    // 获取数据
    const getCategoryList = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.data.result
        
    }

    return {
        categoryList,
        getCategoryList
    }
})