<template>
    <div class='register'>
      <van-uploader v-model="fileList" 
      :deletable="false"
      :max-count="1"
      :after-read="afterRead" 
      />

      
       <!-- <input type="file" @change="update" /> <br /> -->
        <!-- <img :src="imgUrl" width="50%" alt=""> -->
        <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="userName"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
   <van-field
    v-model="nickname"
    type="nickname"
    name="nickName"
    label="昵称"
    placeholder="昵称"
    :rules="[{ required: true, message: '请填写昵称' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
    </div>
</template>

<script>

// import { Toast } from 'vant';//是个方法不是组件
import {post} from '../../util/requiest'
import {regApi} from '../../api/user'
export default {
    
    components: {},
    data() {
        
        return {
          fileList: [],
            username: '',
            password: '',
            nickname:'',
            imgUrl:""
    
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        //表单提交
    async onSubmit(values) {
      console.log('submit', values);
      //收集数据 发送请求
      if(this.imgUrl){
        const result=await regApi({...values,avatar: this.imgUrl})
        console.log(result);
        if(result.data.code=='success'){
            this.$toast('注册成功')
            this.$router.push('/login')
        }else{
            this.$toast('用户名已存在')
        }
      }else{
          this.$toast.fail('请上传头像');
      }    
    },
    // update(){

    // },
     async afterRead(e) {
        let params = new FormData(); //创建formdata对象
      params.append("file", e.file);
         let config = {
        headers: {
          "Content-Type": "multipart/form-data", //指明图片上传格式
        },
      };
      // let params=e.file
      // 此时可以自行将文件上传至服务器
      console.log(e);
    this.imgUrl=e.content
     const result = await post("/api/v1/common/file_upload", params, config);
      console.log(result);
      if (result.data.code === "success") {
        this.imgUrl = "http://localhost:3009" + result.data.info;
        this.fileList.push(this.imgUrl)
        if(this.fileList.length>1){
          this.fileList.pop()
        }
      }
    },

     
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    
</style>