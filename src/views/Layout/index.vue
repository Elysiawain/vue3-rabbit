<script setup lang="ts">
import { ref } from 'vue'
import LayoutNav from './LayoutNav.vue';
import LayoutFooter from './LayoutFooter.vue';
import LayoutHeader from './LayoutHeader.vue';
</script>

<template>
    <LayoutNav /> 
    <LayoutHeader /> 
    <!-- // 二级路由出口 -->
    <RouterView /> 
    <LayoutFooter />
</template>

<style scoped></style>