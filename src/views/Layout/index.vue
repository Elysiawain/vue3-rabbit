<script setup lang="ts">
import { ref } from 'vue'
import LayoutNav from './LayoutNav.vue';
import LayoutFooter from './LayoutFooter.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutFlex from './LayoutFlex.vue';
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