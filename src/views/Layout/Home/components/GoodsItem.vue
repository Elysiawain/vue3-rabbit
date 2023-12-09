<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
    goodsDetail: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div class="box">
        <ul class="goods-list">
            <li v-for="good in goodsDetail.goods" :key="good.id">
                <RouterLink to="/" class="goods-item">
                    <el-image :key=good.id :src="good.picture" lazy class="goodImg" />
                    <p class="name ellipsis">{{ good.name }}</p>
                    <p class="desc ellipsis">{{ good.desc }}</p>
                    <p class="price">¥{{ good.price }}</p>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.box {
    display: flex;
    .goods-list {
        width: 990px;
        display: flex;
        flex-wrap: wrap;

        li {
            width: 240px;
            height: 300px;
            margin-right: 10px;
            margin-bottom: 10px;

            &:nth-last-child(-n + 4) {
                margin-bottom: 0;
            }

            &:nth-child(4n) {
                margin-right: 0;
            }
        }
    }

    .goods-item {
        display: block;
        width: 220px;
        padding: 20px 30px;
        text-align: center;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img,
        .goodImg {
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
}
</style>