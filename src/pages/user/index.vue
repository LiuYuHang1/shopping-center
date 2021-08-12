<template>
    <div class='user'>
         <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="$router.back(-1)"
        @click-right="$router.back(1)"
        />
        <div class="ava">
            <van-image
                round
                width="2.5rem"
                height="2.5rem"
                :src="usersdata.avatar"
                />
                <div class="zz">
                     <span @click="$router.push('/updateuser')">编辑资料<van-icon name="edit" /></span>
                </div>
           
        </div>      
        <van-collapse v-model="activeNames" >
            <van-collapse-item title="昵称" name="1">
                <div class="bk" >
                    {{usersdata.nickName}}
                    <!-- <van-button type="info" size="mini"  @click="$router.push('/updateuser')">修改</van-button> -->
                </div>
            </van-collapse-item>
            <van-collapse-item title="用户名" name="2">
                <div class="bk" >
                    {{usersdata.userName}}
                    <!-- <van-button type="info" size="mini"  @click="$router.push('/updateuser')">修改</van-button> -->
                 </div>
            </van-collapse-item>
            <van-collapse-item title="密码" name="3">
                 <div class="bk" >   
                    {{usersdata.nickName}}
                    <!-- <van-button type="info" size="mini"  @click="$router.push('/updateuser')">修改</van-button> -->
                 </div>
            </van-collapse-item>
            <van-collapse-item title="创建时间" name="4">{{usersdata.createdAt}}</van-collapse-item>
            <van-collapse-item title="更新时间" name="5">{{usersdata.updatedAt}}</van-collapse-item>
            <van-collapse-item title="用户编号" name="6">{{usersdata._id}}</van-collapse-item>
        </van-collapse> 
       
    </div>
</template>
<script>
import {userdata} from '../../api/user'
export default {
    
    components: {},
    data() {
        
        return {
             usersdata:"",
            activeNames: ['1'],
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
    .ava{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 15px;
    }  
    .bk{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .ava span{
        font-size: 16px;
    }

</style>