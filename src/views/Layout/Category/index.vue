<script setup lang="ts">
import { getCategory } from '@/api/Category'
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { getBannerAPI } from '@/api/Category';
import GoodsItem from '../Home/components/GoodsItem.vue';
const categoryList = ref<any>({})
const route = useRoute()
const getCategoryList = async () => {
    const { data: { result } } = await getCategory(route.params.id.toString())
    categoryList.value = result
    console.log(categoryList.value)

}
watch(route, () => {
    getCategoryList()
})

onMounted(() => getCategoryList())

const bannerList = ref<any>([])
const getBannerList = async () => {
    await getBannerAPI(2).then((res) => {
        bannerList.value = res.data?.result //?. 表示可选链操作符，用于在对象不存在某个属性时返回 undefined，而不是抛出错误。
    });
}
onMounted(() => getBannerList())
</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <!-- banner -->
        <div class="home-banner">
            <el-carousel height="500px">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img :src=item.imgUrl alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 分类列表 -->
        <div class="sub-list">
            <h3>全部分类</h3>
            <ul>
                <li v-for="i in categoryList.children" :key="i.id">
                    <RouterLink to="/">
                        <img :src="i.picture" />
                        <p>{{ i.name }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="ref-goods" v-for="item in categoryList.children" :key="item.id">
            <div class="head">
                <h3>- {{ item.name }}-</h3>
            </div>
            <div class="body">
                <GoodsItem v-for="good in item.goods" :goodDetail="good" :key="good.id" />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }

    .home-banner {
        width: 1240px;
        height: 500px;
        margin: 0 auto;
        left: 0;
        top: 0;
        z-index: 98;

        img {
            width: 100%;
            height: 500px;
        }
    }
}
</style>
