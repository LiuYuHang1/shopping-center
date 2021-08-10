<template>
    <div class='profile'>
         <van-nav-bar
            title="个人中心"
            left-text="返回"
            left-arrow
            @click-left="$router.back(-1)"
            @click-right="$router.back(1)"
            />
        <van-cell title="修改用户信息" is-link value="内容" />
        <van-cell title="查看积分" is-link arrow-direction="down" value="内容" />
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
    
</style>