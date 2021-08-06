<template>
    <div class='cart'>
        <van-nav-bar
  title="购物车"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-2)"
  @click-right="$router.back(1)"
/>
<ul v-for="(item,index ) in list" :key="item._id+index">
    <!-- item.checcked是自己添加的 -->
  <van-checkbox v-model="item.checked" ></van-checkbox>
    <li >
      
        <van-card
  :num="item.quantity"
  :price="item.product.price"
  :desc="item.product.name"
  :thumb="item.product.coverImg"
>
  
  <template #footer>
      <el-input-number size="small" v-model=" item.quantity " @click="updatePro(item.product._id,1)" :min="1" :max="100" label="描述文字"></el-input-number>
      <van-button size="small" v-show="item.checked" @click="del(item._id)">删除</van-button>
   
  </template>
</van-card>
    </li>
</ul>
<van-submit-bar :price="sumPrice*100" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked" @click="check">全选</van-checkbox>  
   <van-button size="small" v-show="checked" @click="dels(ids)">删除</van-button>
</van-submit-bar>
    </div>
</template>

<script>
import { loadCartlist,addToCart,delpro,delspro} from '../../api/cart'
export default {
    
    components: {},
    data() {
        
        return {
            ids:[],
            list:[],

        };
    },
    computed: {
      checked:{
        set(flag){
          //全选 如果flag为true 则按钮全为true否则亦然/有个bug 这个item.checked刚开始是没有的 如果先点击全选的话 会出bug
          // return  this.list.forEach(item =>(item.checked=flag));
          //动态添加属性，这个是直接添加好的，不是点击触发才添加的
          return this.list.map((item)=>this.$set(item,"checked",flag))&& (this.ids.length!=0)
        },
        get(){
          // 如果购物车的总长度等于已选的总长度的话
         
          return this.list.length===this.list.filter(item=>item.checked==true).length 
        },
       
        
      },
      sumPrice(){
        return this.list.filter((item)=>{
          return item.checked
        }).reduce(function(per,cur){
          return per+cur.product.price*cur.quantity//商品价格*购物车该商品的数量
        },0)
      }
    },
    watch: {
     
    },
    
    methods: {
        //获取购物车列表
        async getcartlist(){
            const result=await loadCartlist()
            console.log(result);
            this.list=result.data
            // this.num=result.data.quantity
        },
        //+++
      async  updatePro(id,num){
        await addToCart(id,num)
        //改变件数 要更新数据库,添加完数据后，把list数据进行更新
        this.list.forEach(item => {
          if(item.product._id==id){
            item.quantity=item.quantity+num
          }
        });
        },
        onSubmit(){},
        async del(id){
          const result=await delpro(id)
          console.log(result);
          //删除成功 重新调用一下购物车列表
          await this.getcartlist()
        },
        check(){
           this.ids= this.list.filter(item=>item.checked==true)
        },
         async dels(ids){
        
          console.log(ids);
          await delspro(ids)
          await this.getcartlist()
        }
       
    },
    created() {
        this.getcartlist()
        // this.num=this.list.quantity
        
         
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    ul li{
       width: 90%;
    float: right;
    }
    ul{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
</style>