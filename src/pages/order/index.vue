<template>
    <div class='order'>
        <!-- <van-nav-bar  left-arrow @click-left="$router.back(-1)"
       >
 
</van-nav-bar> -->
<van-search
  v-model=" keywords"
  show-action
  show-left
  shape="round"
  placeholder="搜索订单，根据id"
  @input="onSearch"
  
>
 <template #left>
    <div > <span style="font-size:14px;margin-right:8px;" left-arrow @click="$router.push('/home')">&lt;返回</span>
       </div>
 

  </template>
  <template #action>
    <div  >搜索</div>
  </template>
</van-search>
  <ul  v-for="item in orders " :key="item._id" >
      <li >
        <h1>
          <span>id:{{item._id|format}}</span>
          <span>{{item.createdAt|formatTime}}</span>
        </h1>
        <h2>
          <span>总价：￥{{item.price}}</span>
          <button>订单详情</button>
          <button @click="del(item._id)">删除订单</button>
         
        </h2>

     </li>
</ul>
    </div>
</template>

<script>

import {getOrders,getOrderdetail} from '../../api/order'
// import { Toast } from 'vant';
export default {   
    components: {},
    data() {
        
        return {
            value:"",
            orders:[],  
            keywords: "",
            orderss:[]          
        }
    },
    computed: {},
    watch: {},
    
    methods: {
        async init(){
            // this.details=JSON.parse(localStorage.getItem("orders"))
            const result=await getOrders()         
            this.orders=result.data.orders
            this.orderss=result.data.orders
           console.log(result.data.orders);
        },
          onSearch() {
            var newlist = [];
            this.orders.forEach((item) => {
              if(this.keywords===" "){
                this.orders=this.orderss
              }
              if (item._id.indexOf(this.keywords) > -1) {
                newlist.push(item);
              } 
            });
            this.orders = [...newlist];
        },
       async del(id){
           const  result=await getOrderdetail(id)
            console.log(result);
            this.init()
        },
       
        
    },
    created() {
      
       
        this.init()
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    ul li{
      /* margin-bottom: .1rem; */
      width: 97%;
      height: 1.4rem;
      padding: .1rem;
      border: 0.01rem solid;

    }
    ul li h1{
      width: 95%;
      display: flex;
      justify-content: space-between;
    }
    ul li h2{
      margin-top:.6rem;
      width: 95%;
      display: flex;
      justify-content: space-between;
    }
</style>