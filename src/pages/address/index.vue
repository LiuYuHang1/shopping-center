<template>
    <div class='address'>
        <van-nav-bar
  title="添加收货地址"
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
import {addaddress} from '../../api/area'
import {Toast} from 'vant';
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
           const result= await addaddress(content)
            console.log(result.data);
            if(result.data.code=='success'){
                Toast.success(result.data.message);
                this.$router.back(-1)
            }else{
                Toast.fail('地址保存失败');
            }
    //   Toast('save');
    },
    onDelete() {
    //   Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  
    },
    created() {
       
    },
    mounted() {
        
    },
    }
//<style scoped src=''>
</script>
<style scoped>
    
</style>