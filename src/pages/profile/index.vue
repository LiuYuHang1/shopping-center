<template>
    <div class='profile'>
         <!-- <van-nav-bar  title="个人中心" /> -->
        <div class="ava">
            <ul>
                <li>
                    <van-image
                        round
                        width="2rem"
                        height="2rem"
                        :src="usersdata.avatar"
                        />
                </li>    
                <li>{{usersdata.nickName}}
                    <div class="blan" style="height:20px"></div>
                    <van-tag type="primary">点击这里可以添加个性签名。</van-tag>
                </li>
                <div class="dd">
                    <span  @click="$router.push('/register')">注册/</span>    
                    <span  @click="$router.push('/login')">登陆</span>    
                </div>  
            </ul>
            
        </div>  
        <!-- <div class="blank"></div> -->
        <div class="order">           
            <span><van-icon name="star-o" /><dd>收藏</dd></span>
            <span><van-icon name="shop-o" /><dd>订阅店铺</dd></span>
            <span><van-icon name="debit-pay" /><dd>钱包</dd></span>      
            <span><van-icon name="setting-o" @click="$router.push('/user')"/><dd>设置</dd></span>         
        </div> 
        <div class="orders">   
            <div class="sd">我的订单</div>        
            <span><van-icon name="orders-o" @click="$router.push('/order')"/><dd>全部订单</dd></span>
            <span><van-icon name="credit-pay" /><dd>待付款</dd></span>
            <span><van-icon name="logistics" /><dd>待收货</dd></span>
            <span><van-icon name="chat-o" /><dd>待评价</dd></span>
            <span><van-icon name="cash-back-record" /><dd>退款/售后</dd></span>         
        </div> 
        <div class="orders1">         
            <span><van-icon name="gem" color="#ff8714"/><dd>会员中心</dd></span>
            <span><van-icon name="point-gift" color="#ef6f6c"/><dd>淘宝省钱</dd></span>
            <span><van-icon name="goods-collect" color="#ff862b" /><dd>领券中心</dd></span>
            <span><van-icon name="hot" color="#f65656" /><dd>热门</dd></span>                 
        </div> 
       <div class="orders2">         
            <span><van-icon name="vip-card" color="#fe4c2e"/><dd>vip卡</dd></span>
            <span><van-icon name="cluster" color="#4eda84"/><dd>芭芭农场</dd></span>
            <span><van-icon name="new-arrival" color="#f5e4d0" /><dd>新品上市</dd></span>
            <span><van-icon name="goods-collect" color="#f7a539" /><dd>人气排行</dd></span>                  
        </div> 
      <div class="orders3">         
            <span><van-icon name="location-o" color="red"  @click="$router.push('/address')"/><dd>收货地址</dd></span>
            <span><van-icon name="calendar-o" color="red"/><dd>红包卡券</dd></span>
            <span><van-icon name="fire-o" color="red" /><dd>活力中心</dd></span>
            <span><van-icon name="bar-chart-o" color="red"/><dd>成就排行</dd></span>                  
        </div> 
</div>
</template>
 
<script>
import {userdata} from '../../api/user'
export default {
    
    components: {},
    data() {
        
        return {
            active:"",
            usersdata:""
        };
    },
    computed: {},
    watch: {},
    
    methods: {
    async  init(){
        let result=await userdata()
        console.log(result);
        this.usersdata=result.data
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
.profile{
    padding: 6px;
    background: #e8e4e5;
    border-radius: 3%;
}
    .ava{
        
        background: #e8e4e5;
        width: 100%;
        /* height: 120px;         */
        /* border: 1px solid; */
        border-radius: 3%;
        padding: 10px;
        box-sizing: border-box;
    }
    .ava ul{
        width: 100%;
        display: flex;  
            
    }
    .ava ul li:nth-child(2){
        margin-left: 15px;
        font-size: 18px;
    }
    .dd{
        text-align: end;
        width: 25%;
        font-size: 16px;
    }
    .dd span:nth-child(1):hover{
        color: red;
    }
    .dd span:nth-child(2):hover{
        color: red;
    }
    .blank{
        height: 10px;
        background: #e8e4e5;
    }
    .order{
        display: flex;
        justify-content: space-between;
       background: #e8e4e5;
        width: 100%;
        height: 60px;
        /* border: 1px solid; */
        /* border-radius: 6%; */
        margin-top: 10px;      
    }
    .order span{       
        display: flex;
        width: 24.8%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .order span dd{
        font-size: 14px;
    }
    .sd{
        width: 100%;
        font-size: 14px;
    }
    .orders{
        padding: 10px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
       background: #fff;
        width: 98%;
        height: 70px;
        margin-top: 15px;
       
        border-radius: 6%;  
        margin-left: -5px;  
    }
    .orders span{       
        display: flex;
        width: 19.5%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .orders span dd{
        font-size: 14px;
    }
    .orders1{
        padding: 10px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
       background: #fff;
        width: 98%;
        height: 70px;
        margin-top: 15px;
       
        border-radius: 6%;  
        margin-left: -5px;  
    }
    .orders1 span{ 
        font-size: 35px;      
        display: flex;
        width: 19.5%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .orders1 span dd{
        font-size: 14px;
    }
     .orders2{
        padding: 10px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
       background: #fff;
        width: 98%;
        height: 70px;
        margin-top: 10px;      
        border-radius: 6%;  
        margin-left: -5px;  
    }
    .orders2 span{ 
        font-size: 35px;      
        display: flex;
        width: 19.5%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .orders2 span dd{
        font-size: 14px;
    }
     .orders3{
        padding: 10px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
       background: #fff;
        width: 98%;
        height: 70px;
        margin-top: 10px;      
        border-radius: 6%;  
        margin-left: -5px;  
    }
    .orders3 span{ 
        font-size: 35px;      
        display: flex;
        width: 19.5%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .orders3 span dd{
        font-size: 14px;
    }
</style>