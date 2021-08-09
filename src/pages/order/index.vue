<template>
    <div class='order'>
        <button >按钮</button>
    </div>
</template>

<script>
import {getOrders} from '../../api/order'
export default {   
    components: {},
    data() {
        
        return {
            
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        async init(){
            const result=await getOrders()
            console.log(result);
            // this.list=result.data
        }
    },
    created() {
        this.init()
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    
</style>