<template>
    <div class='detail'>
       <van-nav-bar
  title="商品详情"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  @click-right="$router.back(1)"
/>
        <ul>
            <li v-if="product">
              
                <h1><img :src="product.coverImg" alt=""></h1>
                <div class="wrap">
                    <div class="price">                 
                        <span> ￥{{product.price}}  </span>
                        价格￥<del>{{product.price*1.2}}</del> <van-tag style="margin-left:70%; font-size:14px;" color="#fff" text-color="#ccc">已售{{ parseInt(product.price*1.5)}}+</van-tag>
                          
                   
                    </div>
                   <van-tag plain type="primary">优惠</van-tag>：
                    <span id="pp">领卷立减{{ parseInt(product.price*0.01)}}元</span>
                  
                    <p class="ppp"     @click="change(index)">{{product.name}}<van-tag type="success">退货包运费</van-tag>
                    
                    </p>
                    
                    <div class="hao" style="margin-top:10px;">
                        <van-tag color="#fff" text-color="#ccc">全场包邮</van-tag>·
                        <van-tag color="#fff" text-color="#ccc">7天无理由退货</van-tag>·
                        <van-tag color="#fff" text-color="#ccc">48小时发货</van-tag>
                    </div>
                </div>
            </li>
        </ul>
        <div class="footer">
           
            <van-goods-action route >
        <van-goods-action-icon icon="shop-o" text="店铺" to="/shop" dot badge="" />
  <van-goods-action-icon icon="chat-o" to="/chat" text="客服" dot badge=""/>
    <van-goods-action-icon @click="chg" :class="[flag?'pp':'po']"  icon="star-o" :text="text" ref="color"  :color="color " />
  <van-goods-action-button @click="addCart, drawer = true" type="warning" text="加入购物车"  />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
            
    </div>
        <!-- <el-radio-group v-model="direction"> -->
            <!-- <el-radio label="btt"></el-radio> -->
        <!-- </el-radio-group> -->
 <el-drawer
 size="85%"
  
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <van-card
  :num="quantity"
  :price="product.price"
  :title="product.name"
  :thumb="product.coverImg"
  :origin-price="product.price*1.2"
>
 <template #tags>
    <van-tag plain type="danger">领卷立减{{ parseInt(product.price*0.01)}}元</van-tag>
  </template> 
 </van-card>
 <ul class="uu">
     <span>颜色分类：</span>
            <div class="bk"></div>
            <div class="tg"  >
                <li  ref="li" v-for="(item ,index) in menus" @click="changeIndex(index)" :class="{active:index===currentIndex}" :key="index">
                    {{item}}
                </li>
                
           </div>
          
 </ul>
 <div class="bk"></div>
 <div class="gou">
        <span>购买数量:</span> 
        <el-input-number v-model="quantity " @click="updatePro(iid,1) " @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
 </div>
 <div class="add">
     <van-goods-action>
  
  <van-goods-action-button
    type="danger"
    text="确认"
    @click="onClickButton(product._id)  "
  />
</van-goods-action>
 </div>
</el-drawer>
 
    </div>
</template>

<script>
import {get,post} from '../../util/requiest'
import { Toast } from 'vant';
import {addToCart} from '../../api/cart'
import { loadCartlist} from '../../api/cart'
// import {isLogined} from '../../util/auth'
// let pagenum = 1;

export default {

    components: {},
    data() {
        return { 
            quantity:0,
            iid:'',
            menus: ["红色", "黑色", "白色", "灰色","蓝色","紫色"],
          currentIndex: -1, 
            num: 1,
            id:"",
            product:[],
            active: 0,
            flag:true,
            color:"",
            text:"收藏",
             drawer: false,
            direction: 'btt',
            showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
        }
    },
    computed: {},
    watch: {},
    
    methods: {
         async  updatePro(id,num){
        await addToCart(id,num)
        //改变件数 要更新数据库,添加完数据后，把list数据进行更新
       
        //   if(this.product._id==id){
              
            this.product.quantity+=num
            // console.log(this.product.quantity);
            // console.log(num);
        //   }
        
        },
        async getcartlist(){
         this.num=localStorage.getItem("num")
            const result=await loadCartlist()
            console.log(result.data);
            this.list=result.data
            this.id1={...result.data}

            // console.log(this.id1[0]._id);
            // this.id=this.id1[0]._id
            // this.num=result.data.quantity
        },
        //添加购物车
        //  getaddnum(){
        //      console.log(this.quantity);
        //      localStorage.setItem("num",this.quantity)
        //  },
    async   onClickButton(id) {
        const isLogined = await localStorage.getItem("token") || "";
        if(!isLogined){
            Toast.success('请先登陆')
            this.$router.push({               
                path:"/login",
            })
        }else{
            // console.log(id);
              const result=await addToCart(id)       
            if(result.data.code==='success'){
                Toast.success('添加成功，在购物车等亲~')
                this.$router.push('/cart')           
                }
        }
      
     
      
    //   console.log(result);
    },
    //选项卡
        changeIndex(idx) {
            this.currentIndex = idx;
          },
        // },
        // select(o){
        //     console.log(o);
        // },
     handleChange() {
        // console.log(value);
      },
        handleClose(done) {
    //   Toast('添加购物车成功')
      done()
      },
   
        chg(){
            this.flag=!this.flag
            // console.log(this.$refs.color.color);
            // this.$refs.color.color="red"
            if(this.color=="red"){
                this.color="#000"
                this.text="收藏"
            }else{
                this.color="red"
                this.text="已收藏"
            }
          
        },
        async init(id){
        const result=await  get('/api/v1/products/'+id)
        console.log(result.data);
        this.product=result.data
        this.quantity=result.data.quantity
        this.iid=result.data._id
        },
        chenge(){
            // console.log(idx);
        },
       async addCart(){
           //添加到购物车
            const result=await post('/api/v1/shop_carts',{
                product:"this.id",
                quantity:this.quantity
            })
            console.log(result);
        },
        
},
    created() {
       
        // this. addCart()
        //获取传过来得id
        this.id=this.$route.params.id
        this.init(this.id)
        // this.getaddnum()
        this.getcartlist()
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
.ppp{
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
}
.uu .tg li{
    width: 20%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid;
    border-radius: 10%;
    float: left;
    margin: 10px 5px;
    font-size: 16px;
}
.uu span{
    font-size: 20px;
}
.active{
    color: #fff;
    background: orange;

}
.gou{
    width: 100%;
    padding: 15px;
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.gou span{
    font-size: 16px;
}

.uu {
    width: 100%;
    padding: 15px;  
}
 .bk{
    height: 20px;
    width: 20px;
}

.pp{
      color: #000;
    }
    .po {
      color: red;
    }
#back{
    font-size: 35px;
    position: absolute;
    top:0;
    left: 0;
}
    .detail ul li img{
        width: 100%;
        height:67% ;
    }
 .detail ul li .price{
    height: 40px;
    line-height: 40px;
     margin-top: 10px;
     font-size: 14px;
      color: #ccc;
     
 }
 .detail ul li .price span{
    
        font-size: 25PX;
        color: red;
 }
 .detail ul li .price del{
    
     font-size: 14px;
     color: #ccc;
     margin-left: 5px;
 }
 .wrap{
     padding: 15px;
 }
 #pp{
     margin-top: .3rem;
     display: inline-block;
     background: #FFAC2F;
     
 }
 .detail ul li  p{
     font-size: 20px;
     margin-top: 15px;
 }
 .footer {
     display: flex;
     position: fixed;
     bottom: 0;
     height: 40px;
     width: 100%;
     background: #fff;
     justify-content: space-between;
 }
 .footer li{
     font-size: 14px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
 }
 .footer  .btn{
     width: 60%;
     height: 100%;
     display: flex;
    align-items: center;
     justify-content: center;
 }
 .footer   input{
     width: 50%;
     height: 80%;
     border: none;
 }
 .footer input:nth-child(1){
     border-radius: 16px 0 0 16px;
     background: orange;
 }
 .footer input:nth-child(2){
     border-radius: 0 16px 16px 0 ;
     background: red;
 }
</style>