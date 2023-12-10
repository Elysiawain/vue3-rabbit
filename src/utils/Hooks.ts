// 封装hooks
import { getBannerAPI } from '@/api/Layout'
import { getCategory } from '@/api/Category'
import { onMounted, ref,watch } from 'vue'
import { useRoute } from 'vue-router'
/**
 *  轮播图
 * @returns bannerList
 */
export const useBanner = () => {
    const bannerList = ref<any>([])
    const getBannerList = async () => {
        await getBannerAPI().then((res) => {
            bannerList.value = res.data?.result //?. 表示可选链操作符，用于在对象不存在某个属性时返回 undefined，而不是抛出错误。
        });
    }

    onMounted(() => getBannerList())
    return {
        bannerList
    }
}

/**
 * 获取category列表数据
 * @returns categoryList
 */
export const useCategory = () => {
    const categoryList = ref<any>({})
    const route = useRoute()
    const getCategoryList = async () => {
        const { data: { result } } = await getCategory(route.params.id)
        categoryList.value = result
        console.log(categoryList.value)

    }
    watch(route, () => {
        getCategoryList()
    })

    onMounted(() => getCategoryList())
    return{
        categoryList
    }
}