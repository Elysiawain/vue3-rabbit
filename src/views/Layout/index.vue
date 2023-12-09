<script setup lang="ts">
import { ref,onMounted } from 'vue'
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFlex from './components/LayoutFlex.vue';
import { useCategoryStore } from '@/stores/CategoryStore';
const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategoryList()
})
</script>

<template>
    <LayoutFlex/>
    <LayoutNav /> 
    <LayoutHeader /> 
    <!-- // 二级路由出口 -->
    <RouterView /> 
    <LayoutFooter />
</template>

<style scoped></style>