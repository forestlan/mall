<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {  },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style  scoped>
.navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
}
.left , .right{
    width: 60px;
}
.center{
    flex: 1 1 auto;
    text-align: center;
}
</style>