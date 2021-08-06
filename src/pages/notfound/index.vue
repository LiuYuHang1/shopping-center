<template>
    <div class='notFound'>
         <van-nav-bar
  
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  @click-right="$router.back(1)"
/>
        <span>404 页面找不到</span>
    </div>
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    span{
         width: 190px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        line-height: 50px;
        font-size: 25px;
        
    }
</style>