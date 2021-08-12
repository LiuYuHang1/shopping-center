<template>
    <div class='footer'>
        <ul>
            <li>
                <router-link to="/home">
                <span class="iconfont icon-home_icon"></span>
                <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="/fenlei">
                <span class="iconfont icon-leimupinleifenleileibie"></span>
                <span>分类</span>           
                </router-link>
            </li>
            <li>
                <router-link to="/chat">
                <span class="iconfont icon-kefu"></span>
                <span>消息</span>                           
                </router-link>
            </li>
           
            <li>
                <router-link to="/cart">
                <span class="iconfont icon-gouwuche"></span>
                <span>购物车</span>                     
                </router-link>
            </li>

            <li>
                <router-link to="/profile">
                <span class="iconfont icon-wode"></span>
                <span>我的</span>                           
                </router-link>
            </li>
           
        </ul>
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
        
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    .footer{
        width: 100%;
        position: fixed;
        background: #fff;
        bottom: 0;
        height: 50px;
    }
    .footer ul{
        display: flex;
        justify-content: space-around;
    }
    .footer ul li{
        width: 25%;
    }
    .footer ul li a{ 
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;      
        width: 100%;
        height: 50px;
        /* line-height: 50px;
        text-align: center;
         display: block; */
    }
    .footer ul li  .active{
    color: red;
    /* color: #fff; */
}
.footer ul li a span:nth-child(1){
    font-size: 25px;
    font-weight: 600;
}
.footer ul li a span:nth-child(2){
    font-size: 14px;
    font-weight: 600;
}

</style>