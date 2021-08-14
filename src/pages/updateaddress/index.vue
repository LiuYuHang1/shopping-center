<template>
    <div class='address'>
        <van-nav-bar
  title="修改收货地址"
  left-text="返回"
  left-arrow
  @click-left="$router.back(-1)"
  @click-right="$router.back(1)"
/>
    <van-address-edit
    :area-list="areaList"
    show-postal
   
    :show-set-default='true'
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />
    </div>
</template>

<script >
import area from '../../api/area'
import {updateaddress} from '../../api/area'

// console.log(area);
import { Toast } from 'vant';
export default {  
    components: {},
    data() {      
        return {
            areaList:area,
       
            
            searchResult:[],
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        
       async onSave(content) {
            console.log(content);
           const result= await updateaddress(this.id,content)
            console.log(result.data);
             Toast.success("地址修改成功");
            this.$router.push('/addresslist')
          
      
    },
    onDelete() {
    //   Toast('delete');
    },
    onChangeDetail() {
    //   if (val) {
    //     this.searchResult = [
    //       {
    //         name: '黄龙万科中心',
    //         address: '杭州市西湖区',
    //       },
    //     ];
    //   } else {
    //     this.searchResult = [];
    //   }
    },
  
    },
    created() {
      this.id=this.$route.params.id
    },
    mounted() {
        
    },
    }
//<style scoped src=''>
</script>
<style scoped>
    
</style>