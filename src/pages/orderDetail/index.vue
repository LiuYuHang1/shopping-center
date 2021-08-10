<template>
    <div class='orderDetail'>
         <van-nav-bar
  title="订单详情"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  
/>
<van-cell-group  v-if="detail">
  <van-cell title="收货人" :value="detail.receiver" />
  <van-cell title="地址" :value="detail.address" />
  <van-cell title="详细地区" :value="detail.regions" />
 
  <van-cell title="交易号" :value="detail.user" />
  <van-cell title="订单编号" :value="detail._id" />
  <van-cell title="交易价格" :value="detail.price" />
  <van-cell title="创建时间" :value="detail.createdAt" />
  <van-cell title="成交时间" :value="detail.updatedAt" />
  
</van-cell-group>
    </div>
</template>

<script>
import {getDetail} from '../../api/order'
export default {
    
    components: {},
    data() {
        
        return {
            id:"",
            detail:""
        };
    },
    computed: {},
    watch: {},
    
    methods: {
         async init(id){
            // this.details=JSON.parse(localStorage.getItem("orders"))
            const result=await getDetail(id)         
            // this.orders=result.data.orders
            // this.orderss=result.data.orders
           console.log(result.data);
           this.detail=result.data.order
        },
    },
    created() {
        //获取传过来得id
        this.id=this.$route.params.id
        this.init(this.id)
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    
</style>