<template>
    <div class='addresslist'>      
    <van-nav-bar
      title="收货地址列表"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/profile')"
      @click-right="$router.back(1)"
    />
 <ul   v-for="item in orders " :key="item._id"   >
      <li>    
        <div>
        <h1>
          <span>id:{{item._id|format}}</span>
          <span>{{item.createdAt|formatTime}}</span>
        </h1>
        <h2>
          
          <button @click="goDetail(item._id)">地址详情</button>
          <button @click="del(item._id)">删除地址</button>
         <button @click="updatedetail(item._id)">修改地址</button>
        </h2>
        </div>

     </li>
     <div class="grey"></div>
</ul>
<div class="bk"></div> 
<van-address-list
  
  :list="list"
  
  
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
  <!-- <div class="footer">
    <div class="kl">
      <van-checkbox v-model="checked" @click="check" ></van-checkbox> <span>全选</span>
    </div>
   <div class="blank"></div> -->
   <!-- <button  @click="dels(ids)">删除</button> -->
  <!-- </div> -->
    </div>
</template>

<script>

import { getaddresslist ,deladdress} from '../../api/area'
import { Toast } from 'vant';
export default {   
    components: {},
    data() {
        
        return {
            list: [],
           orders:[]
                                                         
        }
    },
    computed: {},
    watch: {},
    
    methods: {
         onAdd() {
     this.$router.push('/address')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  
       async init() {
        const result = await getaddresslist({
          per: 10,
          page: 1,
        });
        console.log(result.data.addresses);
        this.orders=result.data.addresses
      },
           async del(id){
           const  result=await deladdress(id)
            console.log(result);
            this.init()
        },        
      goDetail(id){
              this.$router.push('/addressdetail/'+id)
        },
     updatedetail(id){
            this.$router.push('/updateaddress/'+id)
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

.addresslist{
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
      justify-content: flex-end;
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
      ul li div{
          width: 100%;
          }
</style>