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
    <div > <span style="font-size:14px;margin-right:8px;" left-arrow @click="$router.push('/home')"><van-icon size="26px" name="wap-home-o" /></span>
       </div>
  </template>
  <template #action>
    <div  >搜索</div>
  </template>
</van-search>


  <ul   v-for="item in orders " :key="item._id" >
      <li >
     <van-checkbox v-model="item.checked" @click="dde"></van-checkbox>
        <div>
        <h1>
          <span>id:{{item._id|format}}</span>
          <span>{{item.createdAt|formatTime}}</span>
        </h1>
        <h2>
          <span>总价：￥{{item.price}}</span>
          <button @click="goDetail(item._id)">订单详情</button>
          <button @click="del(item._id)">删除订单</button>
         
        </h2>
        </div>

     </li>
     <div class="grey"></div>
</ul>
<div class="bk"></div>
  <div class="footer">
    <div class="kl">
      <van-checkbox v-model="checked" @click="check" ></van-checkbox> <span>全选</span>
    </div>
   <div class="blank"></div>
   <button  @click="dels(ids)">删除</button>
  </div>
    </div>
</template>

<script>

import {getOrders,getOrderdetail,delorders} from '../../api/order'
// import { Toast } from 'vant';
export default {   
    components: {},
    data() {
        
        return {
            value:"",
            orders:[],  
            keywords: "",
            orderss:[] ,          
            ids:[], 
                 
        }
    },
    computed: {
       checked:{
        set(flag){
          //全选 如果flag为true 则按钮全为true否则亦然/有个bug 这个item.checked刚开始是没有的 如果先点击全选的话 会出bug
          // return  this.list.forEach(item =>(item.checked=flag));
          //动态添加属性，这个是直接添加好的，不是点击触发才添加的
          return this.orders.map((item)=>this.$set(item,"checked",flag))
        },
        get(){
          // 如果购物车的总长度等于已选的总长度的话       
          return this.orders.length===this.orders.filter(item=>item.checked==true).length 
        },              
      },      
    },
    watch: {
     
    },
    
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
      //生成ids
        check(){
           this.ids= this.orders.filter(item=>item.checked==true)         
        },
        dde(){
           this.ids= this.orders.filter(item=>item.checked==true) 
        },
        //删除多个订单
         async dels(ids){       
          console.log(ids);
          await delorders(ids)
          await this.init()
        },
        goDetail(id){
              this.$router.push('/orderDetail/'+id)
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

.order{
  background: #fff;
}
  ul{
    padding:.1rem;
    box-sizing: content-box;
  }
  ul .grey{
    width: 100%;
    height: .1rem;
    background: #ccc;
  }
    ul li{
     
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .1rem;
      width: 100%;
      /* height: 1.4rem; */
      padding: .1rem;
      /* border: 0.001rem solid; */
      box-sizing: border-box;
    background: #fff;
 /* background: #FFF8E1; */
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
    .footer{
      width: 100%;
      height: .8rem;
      position: fixed;
      bottom: 10px;
      display: flex;
      
      background: #fff;
    }
    .footer .blank{
     width: 57%;
      height: .8rem;
    }
    .footer .kl{
      margin-left: 10px;
      width: 16%;
      display: flex;
      font-size: 16px;
      align-items: center;
      justify-content: space-between;
    }
    .footer button{
      width: 20%;
      height: 30px;
      font-size: 16px;
      text-align: center;
      line-height: 30px;
    }
    .bk{      
      height: 2rem;
      }
      ul li h2 button{
        width: 90px;
        height: 26px;
        font-size: .14rem;
        margin-left: .2rem;
      }
      ul li h2 span{
        display: inline-block;
        width: 2.5rem;
        font-size: .14rem;
      }
      ul li h1{
         font-size: .14rem;
      }
</style>