<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/Category'
import GoodsItem from '@/views/Layout/Home/components/GoodsItem.vue'
const subCategoryList = ref<any>([])
const route = useRoute()
const getCategoryFilter = async () => {
    const { data: { result } } = await getCategoryFilterAPI(route.params.id)
    subCategoryList.value = result
}

// 获取分类商品列表数据
const goodsList = ref<any>([])
const goodsData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
const getSubCategory = async () => {
    const { data:{result}} = await getSubCategoryAPI(goodsData.value)
    goodsList.value = result.items
}
onMounted(() => {
    getCategoryFilter(),
        getSubCategory()
})
</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${subCategoryList.parentId}` }">{{ subCategoryList.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ subCategoryList.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs>
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body">
                <!-- 商品列表-->
                <GoodsItem v-for="item in goodsList" :key="item.id" :goodDetail="item"></GoodsItem>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>
