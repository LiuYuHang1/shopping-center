<template>
    <div class='fenlei'>
        
         
        <div class="side_bar_box">
      <van-sidebar v-model="activeKey" @change="getindex"  style="position:fixed;top:0;z-index:0;" >
        <van-sidebar-item
         v-for="item in menus"
          :title="item.name"       
          :key="item._id"
        />
      </van-sidebar>
      <div class="content">
          <ul  v-for="v in data" :key="v._id" >
              <div class="blank"></div>
            <li  @click=" goDetail(v._id)">                
                <img :src="v.coverImg" alt="">
                <span>{{v.name}}</span>
            </li>
          </ul>
      </div>
    </div>
    </div>
</template>

<script>
import {get} from '../../util/requiest'
export default {   
    components: {},
    data() {      
        return {
            activeKey: 0,
            menus: [],
            data:""
        }
    },
    computed: {},
    watch: {},
    
    methods: {
        //  getmenus(){
        //     console.log(res);
        // this.menus = res.data.categories;
        //  },
          async init(){
            const res=await  get('/api/v1/product_categories')
            console.log(res.data.categories);
            const unique = (arr)=>{
                for(let i = 0; i < arr.length; i++){
                    for(let j = i + 1; j < arr.length; j++){
                        if(arr[i].name === arr[j].name){
                            arr.splice(j, 1); // 移除重复元素
                            j--; // 修正下标
                        }
                    }
                }
                    return arr;
                };

            this.menus=unique(res.data.categories)
            
            // let set = new Set(res.data.categories);
            // this.menus = set;
        },
    
   
    // 获取索引
   async  getindex() {
      // 上面已经 获取到menus了，这里可以直接使用
    //   console.log(this.menus[this.activeKey].name);
    //   let a=this.menus[this.activeKey].name
      // 获取参数的值，然后调用http://localhost:3009/api/v1/products?name=上面获取的值
            const res=await  get("/api/v1/products?name="+this.menus[this.activeKey].name)
            this.data=res.data.products
            console.log(res.data);
        },
         async dd(){
        const res=await get("/api/v1/products?name=耳机")
            this.data=res.data.products
    },
    goDetail(id){
              this.$router.push('/detail/'+id)
          }
    },
   
    created() {
        this.init(); // 在这个里面menus已经获取了
        this.dd();
    },
    mounted() {    
    },
    }
</script>
<style scoped>
 .side_bar_box {
        display: flex;   
    } 
 .content {      
        /* border: 1px solid red; */
        justify-content: flex-end;
    } 
     .blank{
         width: 20%;
    }
    .content li img{
        margin-right: 10px;
        width: 120px;
        height: 100px;
    }
    .content li{
        padding: 10px;
        display: flex;
        margin-left: 100px;
        width: 70%;
        font-size: 16px;
    }
</style>