<template>
    <div class='login'>
       
       <van-nav-bar
  title="登陆"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  @click-right="$router.back(1)"
/>
<div class="blank"></div>
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
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>

    </div>
</template>

<script>
import {loginApi}  from '../../api/user'
import {setToken}  from '../../util/auth'
import { Toast } from 'vant';
export default {
    
    components: {},
    data() {
        
        return {
            username: '',
            password: '',
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        async onSubmit(values) {
        const result=await loginApi({ ...values, })
        if(result.data.code=='success'){
            setToken(result.data.token)
            Toast.success('登陆成功');
            this.$router.push('/home')
        }else{
           Toast.fail('用户名或密码错误！');
        }
        // console.log(result);
        // console.log(values);
    },
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    .blank{
      height: 120px;
    }
   
    
</style>