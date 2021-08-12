<template>

    <div class='home'>
       
        <div id="ser" ref="disp" >
            <div id="back" ref="dis"  @click='bac' >&lt;</div>
        <van-search   @input='sousuo' v-model="value" placeholder="请输入搜索关键词" shape="round"  />       
        </div>     
            <div id="blank"></div>
            <div class="nav">
                <ul id="ul" >
                    <li v-for="(item,index) in tab" :key="item" :class="{on:currentIndex==index}"    @click="changeIndex(index)">{{item}}
                    </li>                                    
                </ul>
            </div>
            <!-- //轮播 -->
            <van-swipe class="my-swipe" :autoplay="2500" indicator-color="white">
                <van-swipe-item v-for="item in products" :key="item._id"><img  :src="
                item.coverImg" alt=""></van-swipe-item>
                <template #indicator>
    <div class="custom-indicator"></div>
  </template>
            </van-swipe>
            <ul>
                <div id="banner">
                    <div class="blan"></div>
                    <span class=" iconfont icon-xianshimiaosha" style="font-size:30px; color:red;">
                        <dd id="span">限时秒杀</dd>
                    </span>
                    <span class=" iconfont icon-duanmaqingcang" style="font-size:30px; color:orange;"><dd id="span">断码清仓</dd></span>
                    <span class=" iconfont icon-zhuanpan" style="font-size:30px; color:green;"><dd id="span">现金大转盘</dd></span>
                    <span class=" iconfont icon-shu" style="font-size:30px; color:red;"><dd id="span">免费领水果</dd></span>
                    <span class=" iconfont icon-kuai" style="font-size:30px; color:red;"><dd id="span">9块9特卖</dd></span>
                    <span class=" iconfont icon-chongzhi" style="font-size:30px; color:red;"><dd id="span">充值中心</dd></span>
                    <span class=" iconfont icon-pinhongbao-" style="font-size:30px; color:red;"><dd id="span">拼红包领钱</dd></span>
                    <span class=" iconfont icon-qiandao
" style="font-size:30px; color:orange;"><dd id="span">签到</dd></span>
                    <span class=" iconfont icon-cunqianguan-copy
" style="font-size:30px; color:pink;"><dd id="span">多多赚大钱</dd></span>
                    <span class=" iconfont icon-0yuan" style="font-size:30px; color:orange;"><dd id="span">免费领商品</dd></span>
                   
                    
                </div>
                <li  v-for="item in products" :key="item._id" @click=" goDetail(item._id)">
                    <img :src="item.coverImg" alt="">
                    <div class="wrap">
                        <span class="name">{{item.name}}</span>
                        <div class="pk">
                            <div class="p1">
                                <span>旗舰店</span>
                                <span>退货包邮费</span>
                                <span>24小时发货</span>
                            </div>
                            <div class="p2">
                            <div class="wp">
                                <span>￥{{item.price}}</span>
                                <del>￥{{item.price+200}}</del>
                                </div>
                                <!-- <span>1万+人付款</span> -->
                            </div>
                        </div>                            
                    </div>
                </li>

            </ul>
            <div id="blank"></div>
        </div>

</template>
<script>
import instance from '../../util/requiest'
export default {   
    components: {},
    data() {
        
        return {
            value:"",
            products:[],
            newlist:[],
            result:[],
            tab:["推荐","男装","女装","百货"],
            currentIndex:0,
            tabproducts:[{
                coverImg:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1860270913/O1CN01EnJ11r1IcCHNLTbkT_!!0-item_pic.jpg_580x580Q90.jpg_.webp",
                name:"2021新款休闲短袖男简约百搭文艺风宽松男士t恤潮牌潮流夏装衣服",
                price:300,
                _id:1
            },{
                coverImg:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/196993935/O1CN01JKisyA1ewHDU8bVeL_!!196993935-0-picasso.jpg_580x580Q90.jpg_.webp",
                name:"李宁短袖女夏季2021新款休闲大码白色体恤半袖情侣装运动T恤",
                price:2100,
                _id:2
            },{
                coverImg:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/196993935/O1CN01lddq9P1ewHDSNBhtz_!!196993935-0-picasso.jpg_580x580Q90.jpg_.webp",
                name:"唐狮2021春夏新款短袖T恤男圆领半袖纯色宽松潮流衣服纯棉打底衫",
                price:3200,
                _id:3
            },{
                coverImg:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1860270913/O1CN01MKHdqO1IcCIr0t9Tr_!!0-item_pic.jpg_580x580Q90.jpg_.webp",
                name:"冰丝棉 男士短袖T恤夏季白色衣服男装纯色半袖夏装打底衫宽松体恤",
                price:3200,
                _id:4
            },{
                coverImg:"https://img.alicdn.com/imgextra/i4/30085577/O1CN01ToRtS21r4JWOtWbsr_!!0-saturn_solar.jpg_270x270.jpg",
                name:"李宁短袖女夏季2021新款休闲大码白色体恤半袖情侣装运动T恤",
                price:2100,
                _id:5
            },{
                coverImg:"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/151742759/O1CN01fm1LJX1WFfQViFlCn_!!151742759.jpg_580x580Q90.jpg_.webp",
                name:"唐狮2021春夏新款短袖T恤男圆领半袖纯色宽松潮流衣服纯棉打底衫",
                price:3200,
                _id:6
            },{
                coverImg:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/3628760030/O1CN01MZL7mZ1C5mYkfxgBn_!!0-item_pic.jpg_580x580Q90.jpg_.webp",
                name:"冰丝棉 男士短袖T恤夏季白色衣服男装纯色半袖夏装打底衫宽松体恤",
                price:3200,
                _id:7
            }
               ],
            tabproducts1:[{
                coverImg:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/196993935/O1CN013waj6v1ewHDTsxDFu_!!0-item_pic.jpg_580x580Q90.jpg_.webp",
                name:"2021新款休闲短袖男简约百搭文艺风宽松男士t恤潮牌潮流夏装衣服",
                price:700,
                _id:1
            },{
                coverImg:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/196993935/O1CN01pVcnOT1ewHDPkvsJB_!!196993935-0-picasso.jpg_580x580Q90.jpg_.webp",
                name:"壹加衣加 秋装网红款圆领豹纹印花连衣裙+纯色高级感吊带背心",
                price:500,
                _id:2
            },{
                coverImg:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2209554368177/O1CN01G71dMm2AH7JOrou18_!!2209554368177.jpg_580x580Q90.jpg_.webp",
                name:"国潮短袖2021年新款中国女t恤纯棉宽松中长款纯棉薄款夏季上衣女",
                price:3200,
                _id:3
            },
            {
                coverImg:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/105212449/O1CN01MODiTo1Txgf67m4M2_!!105212449-0-picasso.jpg_580x580Q90.jpg_.webp",
                name:"恒源祥中年妈妈夏装杭州真丝上衣女大牌桑蚕丝中老年洋气短袖T恤",
                price:3200,
                _id:4
            },{
                coverImg:"https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/650625040/O1CN01qphCmm1n6MrFEMgae_!!0-item_pic.jpg_580x580Q90.jpg_.webp",
                name:"纯棉夏装2021年新款白色短袖t恤女装夏季宽松大码上衣服女士",
                price:3200,
                _id:5
            },
            {
                coverImg:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2143459357/O1CN01hWPacr2IzYcRJwCtV_!!0-item_pic.jpg_580x580Q90.jpg_.webp",
                name:"AE6604 棕色2021新款夏季t恤女国潮高街纯棉奶甜上衣宽松情侣短袖",
                price:3200,
                _id:6
            }],
             tabproducts2:[{
                coverImg:"https://img.alicdn.com/bao/uploaded/i1/1845023737/O1CN01dXMc0r1dTad1Uxhys_!!1845023737.jpg_200x200q90.jpg_.webp",
                name:"西班牙进口 歌伦初榨橄榄油1000ml/瓶食用油煎炒烹炸煮",
                price:2500,
                _id:1
            },{
                coverImg:"https://img.alicdn.com/bao/uploaded/i1/2742382596/O1CN01qCZi8Z1V30hfX75mZ_!!2742382596.jpg_200x200q90.jpg_.webp",
                name:"洗米筛淘米盆家用洗菜篮盆塑料沥水篮洗水果盆淘米篮收纳篮洗菜盆",
                price:4200,
                _id:2
            },{
                coverImg:"https://img.alicdn.com/bao/uploaded/i2/195728501/TB2n9dgsXXXXXXzXpXXXXXXXXXX_!!195728501.jpg_200x200q90.jpg_.webp",
                name:"包邮新鲜纯水果茶包干茶果粒花果茶冷热泡12包礼盒袋装健康玻璃杯",
                price:1400,
                _id:3
            },{
                coverImg:"https://img.alicdn.com/bao/uploaded/i2/195728501/TB2n9dgsXXXXXXzXpXXXXXXXXXX_!!195728501.jpg_200x200q90.jpg_.webp",
                name:"包邮新鲜纯水果茶包干茶果粒花果茶冷热泡12包礼盒袋装健康玻璃杯",
                price:1400,
                _id:4
            },{
                coverImg:"https://img.alicdn.com/bao/uploaded/i2/195728501/TB2n9dgsXXXXXXzXpXXXXXXXXXX_!!195728501.jpg_200x200q90.jpg_.webp",
                name:"包邮新鲜纯水果茶包干茶果粒花果茶冷热泡12包礼盒袋装健康玻璃杯",
                price:1400,
                _id:5
            },{
                coverImg:"https://img.alicdn.com/imgextra/i3/2940017781/TB1faCcqStYBeNjSspaXXaOOFXa_!!0-item_pic.jpg_430x430q90.jpg",
                name:"日式玻璃小碟子调料酱料醋油蘸料碟家用餐厅创意小吃泡菜火锅碟盘",
                price:1400,
                _id:6
            }]
        };
    },
    computed: {},
    watch: {},
    
    methods: {
       
        async init(){
            const result=await instance.get('/api/v1/products',{
                per:100,
                page:1
            });
            this.products=result.data.products
            this.result=result.data.products
            console.log(result);
            console.log(this.products);
        },
        sousuo() {
            
            var newlist = [];
            this.products.forEach((item) => {              
              if (item.name.indexOf(this.value) > -1) {
                newlist.push(item);
              }
            });
            this.products = [...newlist]; 
            console.log(this.$refs.dis)
             this.$refs.dis.style.display="block"
           this.$refs.disp.style.display="flex"            
          },
          bac(){
              location.reload()
              this.$refs.dis.style.display="none"
          },
          changeIndex(idx){
              this.currentIndex=idx
              switch(idx){
                  case 0:this.products=this.result;
                      break;
                  case 1:this.products=this.tabproducts;
                  break;
                   case 2:this.products=this.tabproducts1;
                  break;
                   case 3:this.products=this.tabproducts2;
                  break;
              }
          },
          goDetail(id){
              this.$router.push('/detail/'+id)
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
#indicator{
    display: none;
}
 .my-swipe .van-swipe-item {
     margin-top: 15px;
    color: #fff;
    font-size: 100px;
    line-height: 70px;
    text-align: center;
    background-color: #fff;
  }
  .my-swipe img{
      display: block;
      margin: 0 auto;
      /* margin-top: 10px; */
   width: 100%;
    height: 150px;
}
    .home{
        position: relative;
        padding: .2rem;
    }
    .home ul li img{
        width: 2rem;
        height: 2rem;
    }
    .home ul li{
        display: flex;
        margin: .2rem 0;
    }
    .name{ 
        font-size: 15px !important;
        line-height: .4rem;       
        display: block;
        width:100%;      
    }
    .wrap{
        margin-left: .1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .p1{
        display: flex;
        width: calc(100%-38%);
        /* margin-top: 25px; */
        /* display: flex; */
    }
    .p1 span:nth-child(1){
        font-size: .14rem;
        color: rgb(230, 10, 10);
    }
     .p1 span:nth-child(2){
         /* display:inline-block;
        border: 1px solid red; */
        font-size: .14rem;
        color: rgb(128, 128, 128);
        margin: 0 0.08rem;
    }
    .p1 span:nth-child(3){
        font-size: .14rem;
        color: rgb(128, 128, 128);
        margin-left: .2rem;
    }
    .p2{
        display: flex;
         width: calc(100%-38%);
        margin-top: .1rem;
        justify-content: space-between;
    }
    .p2 .wp span:nth-child(1){
        color: red;
        font-size: .18rem;
        margin-left: -0.03rem;
    }
    .p2 .wp del:nth-child(2){
        font-size: .1rem;
        color: rgb(128, 128, 128);
       /* margin-left: 80px; */
       margin-top: 0.05rem
    }
    /* .p2 span:nth-child(2){
        display: inline-block;
        width: 114px;
        font-size: 14px;
        color: rgb(128, 128, 128);
        text-align: end; */
       /* margin-left: 20px; */
    /* } */
    #ser{
        width: 100%;
        position: fixed  !important;
        top: 0 !important;
        margin-left: -0.1rem;
       align-items: center;
    }
    #blank{
        width: 100%;
        height: 68px;
    }
    #ser #back{
        text-align: center;
        border-radius: 20%;
        width: 30px;
        height: 100%;
        /* background: rgb(8, 207, 8); */
        /* position: absolute;
        top: 10px;
        left: 10px; */
        margin-left: 10px;
        font-size: 28px; 
        display: none;
        margin-right: 30px;
    }
    .nav #ul {
        position: fixed;
        top: 50px;
        width: 94.5%;
        display: flex;
       justify-content: space-between;
        height: 50px;
        background: #fff;  
        margin-left: -3px; 
    }
    .nav #ul li{        
        height: 30px;
        font-size: 16px;
    }
    .on{
         /* height: 20px; */
        border-bottom:1px solid red ;
        color: red;
    }
    #banner{
        width: 100%;
        height: 150px;
        display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-bottom: 15px;
    }
    #banner .blan{
        width: 100%;
        /* height: 20px; */
    }
    #banner span{
        display: block;
        width: 20%;
        text-align: center;
        /* height: 30px; */
        display: flex;
        flex-direction:column ;
        justify-content: center;
        align-items: center;
       
    }
     #banner span #span{
margin-top: 5px;
 font-size: 12px;
 color: #000;
     }
</style>