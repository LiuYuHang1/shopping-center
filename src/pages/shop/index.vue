<template>
    <div class='shop'>
         <van-nav-bar
  title="店铺"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  @click-right="$router.back(1)"
/>
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