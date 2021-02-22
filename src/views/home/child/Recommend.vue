<template>
    <div class="recommend">
        <div  class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="image">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommend',
    components: {  },
    props:{
        recommend:Array
    },
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
.recommend{
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 14px;
    border-bottom: 5px solid #d1c7c9;
}
.recommend-item{
    flex: 1;
    text-align: center;
}
.recommend-item img{
    width: 65px;
    
}
</style>