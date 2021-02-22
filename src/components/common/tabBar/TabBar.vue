<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue';
export default {
    name: 'TabBar',
    components: {
        TabBarItem
     },
    data() {
        return {
            
        };
    }
    
};
</script>

<style  scoped>
#tab-bar{
    display: flex;
    background-color:#f6f6f6;
    position: fixed;
    height: 49px;
    font-size: 14px;
    left: 0;
    right: 0;
    bottom: 0;

}
</style>