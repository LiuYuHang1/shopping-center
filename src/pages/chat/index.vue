<template>
    <div class='chat'>
      <van-nav-bar
  title="聊天"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  @click-right="$router.back(1)"
/>
    <div class="wrap">
        <ul @click="not">
            <li>
                <el-avatar size="large" src="https://img2.baidu.com/it/u=2607252484,3927017729&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
                <div class="div">
                     <div class="wk">
                        <h2>物流助手</h2>
                        <span>21/07/04</span>
                    </div>
                    <span>即将确认收货通知</span>
                </div>
            </li>
            <van-divider  />
            <li>
                 <el-avatar size="large" src="https://img2.baidu.com/it/u=273571381,1899785326&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
                 <div class="div">
                      <div class="wk">
                        <h2>喜喜科技分店</h2>
                        <span>21/06/05</span>
                    </div>
                    <span>亲，在的哦，请问有什么需要效劳呢？</span>
                </div>
            </li>
            <van-divider />
            <li>
                 <el-avatar size="large" src="https://img0.baidu.com/it/u=1548273312,2433727464&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
                 <div class="div">
                     <div class="wk">
                        <h2>圣斗卡男装旗舰店</h2>
                        <span>21/04/04</span>
                    </div>
                    <span>【常见问题列表】</span>
                </div>
            </li>
            <van-divider />
            <li>
                 <el-avatar size="large" src="https://img0.baidu.com/it/u=375946963,1886431955&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
                 <div class="div">
                    <div class="wk">
                        <h2>胖哥职业装</h2>
                        <span>21/02/24</span>
                    </div>
                    <span>在的亲</span>
                </div>
            </li>
            <van-divider />
            <li>
                 <el-avatar size="large" src="https://img0.baidu.com/it/u=3862317414,1829685745&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
                 <div class="div">
                     <div class="wk">
                        <h2>阿西世家旗舰店</h2>
                        <span>21/05/23</span>
                    </div>
                    <span>亲，欢迎光临阿西世家旗舰店！</span>
                </div>
            </li>
            <van-divider />
            <li>
                 <el-avatar size="large" src="https://img0.baidu.com/it/u=2813554911,2068092937&fm=26&fmt=auto&gp=0.jpg"></el-avatar>
                 <div class="div">
                    <div class="wk">
                        <h2>快快乐乐虚拟店</h2>
                        <span>21/02/08</span>
                    </div>
                    <span>你好</span>
                </div>
            </li>
            <van-empty style="margin-bottom:25px;" description="没有更多了" />
            
        </ul>
    </div>
    </div>
    
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        not(){
            this.$router.push('/notfound')
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
.chat{
padding-bottom: 40px;
}
    .chat .wrap ul{
        
        padding: 10px;
       
    }
    .chat .wrap ul li .div{
        margin-left: 15px;
        display: flex;
        width: 80%;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-end;
    }
    .chat .wrap ul li{
         display: flex;
    }
    .chat .wrap ul li .div span{
        font-size: 14px;
        color: #ccc;
    }
    .wk{
        width: 100%;
        display: flex;
     
        justify-content: space-between;
        /* flex-wrap: wrap; */
    }
  
</style>