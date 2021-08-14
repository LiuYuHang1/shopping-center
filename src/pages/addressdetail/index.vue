<template>
    <div class='addressdetail'>
        <van-nav-bar
      title="地址详情"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
      @click-right="$router.back(1)"
    />
    
    <van-cell-group >
        <van-cell title="创建时间" :value="addresses.createdAt" />
        <van-cell title="更新时间" :value="addresses.updatedAt" />
        <van-cell title="用户id" :value="addresses.user" />
        <van-cell title="地址id" :value="addresses._id" />
        <van-cell title="_V" :value="addresses.__v" />
    </van-cell-group>

    </div>
</template>

<script>
import { getaddressid} from '../../api/area'
export default {
    
    components: {},
    data() {
        
        return {
            addresses:[]
        };
    },
    computed: {},
    watch: {},
    
    methods: {
         async init(id){
            // this.details=JSON.parse(localStorage.getItem("orders"))
            const result=await getaddressid(id)         
            // this.orders=result.data.orders
            // this.orderss=result.data.orders
           console.log(result.data);
           this.addresses=result.data
        },
    },
    created() {
        this.id=this.$route.params.id
        this.init(this.id)
    },
    mounted() {
        
    },
    }
//<style scoped src=''>
</script>
<style scoped>
    
</style>