<template>
    <div class='list'>
        <van-nav-bar
      title="收货地址列表"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
      @click-right="$router.back(1)"
    />
        <div class="ll" v-for="v in orders" :key="v._id">
             <van-address-list
        v-model="chosenAddressId"
        :list="list"  
       add-button-text="新增地址"
        default-tag-text="新增"
        @add="onAdd"
        @edit="onEdit"
        />
       <van-button type="info" size="medium" @click="del(v._id)">删除</van-button>
        </div>
       
    </div>
</template>

<script>
import { Toast } from 'vant';
import { getaddresslist ,deladdress, getaddressid} from '../../api/area'
export default {
    
    components: {},
    data() {
        
        return {
            orders:[],
             chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        }
       
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
        };
    },
    computed: {},
    watch: {},
    
    methods: {
    onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
     async init() {
        const result = await getaddresslist({
          per: 10,
          page: 1,
        });
        // console.log(result.data.addresses);
        this.orders=result.data.addresses
        this.orders.forEach(async(v) => {
           const result= await getaddressid(v._id)
           console.log(result);
        });
      },
           async del(id){
           const  result=await deladdress(id)
            console.log(result);
            this.init()
        },
  },
    
    created() {
        this.init()
    },
    mounted() {
        
    },
    }
//<style scoped src=''>
</script>
<style scoped>
    .ll{
        padding: 10px;
        height: 80px;
        display: flex;
        align-items: center;
    }
</style>