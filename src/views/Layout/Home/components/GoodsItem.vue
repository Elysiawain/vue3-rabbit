<script setup lang="ts">
defineProps({
    goodDetail: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div class="box">
        <RouterLink to="/" class="goods-item">
            <el-image :key=goodDetail.id :src="goodDetail.picture" lazy class="goodImg" />
            <p class="name ellipsis">{{ goodDetail.name }}</p>
            <p class="desc ellipsis">{{ goodDetail.desc }}</p>
            <p class="price">¥{{ goodDetail.price }}</p>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
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
</style>