<template>
    <div class='updateuser'>
        <van-nav-bar
        title="编辑资料"
        left-text="返回"
        left-arrow
        @click-left="$router.back(-1)"
        @click-right="$router.back(1)"
        />
        <div class="blank">
        <div class="bb"></div>
      <van-uploader v-model="fileList" 
      :deletable="false"
      :max-count="1"
      :after-read="afterRead" 
      upload-text=修改头像
      />
    </div>
      
       <!-- <input type="file" @change="update" /> <br /> -->
        <!-- <img :src="imgUrl" width="50%" alt=""> -->
        <van-form @submit="onSubmit">
  <!-- <van-field
    v-model="username"
    name="userName"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  /> -->
  <van-field
    v-model="oldPassword"
    type="password"
    name="oldPassword"
    label="原始密码"
    placeholder="原始密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="新密码"
    placeholder="新密码"
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
    <van-button round block type="info" native-type="submit">确定</van-button>
  </div>
</van-form>
    </div>
</template>

<script>
import {updatepassword,updateinfo} from '../../api/user'
import {post} from '../../util/requiest'
// import {regApi} from '../../api/user'
export default {   
    components: {},
    data() {      
        return {
            fileList: [],
            username: '',
            password:"",
            oldPassword: '',
            nickname:'',
            imgUrl:""
        };
    },
    computed: {},
    watch: {},
    
    methods: {
       async onSubmit(values) {
         
      let passwod = {
        // nickName: object.nickName,
        oldPassword: values.oldPassword,
        password: values.password,
      };      
      //修改密码
     await  updatepassword(passwod)

     let info=values.nickName
     
      console.log('submit', values);
      //收集数据 发送请求
      if(this.imgUrl){
          
        const result=await updateinfo({nickName:info,avatar: this.imgUrl})
        console.log(result);
        if(result.data.code=='success'){
            this.$toast('修改用户信息成功')
            this.$router.push('/profile')
            // this.$router.push('/login')
        }else{
            this.$toast('修改用户信息失败')
        }
      }else{
          this.$toast.fail('请上传头像');
      }    
    },
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
    // onSubmit(values) {
    //   console.log('submit', values);
    // },
    },
    created() {
        
    },
    mounted() {
        
    },
    }
//<style scoped src=''>
</script>
<style scoped>
    .blank{
      margin-top: 40px;
      display: flex;
      margin-bottom: 20px;
    }
    .blank .bb{
      width: 40%;
    }
</style>