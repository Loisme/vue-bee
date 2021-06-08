<template>
<div id="attention">
<div class="top-bar">
  <p>推荐用户</p>
  <a @click="refresh(lastAccount)">换一批</a>
</div>
  <div class="concent">
    <div class="concent-card" v-for="(item,index) in userList" :key="index">
    <div class="card-flex">
      <div class="card-left"><img :src=item.avatar alt=""></div>
      <div class="card-center">
        <div class="userName card-text concent-card">{{item.nickname}}</div>
        <div class="userName card-text">{{item.brief}}</div>
        <div class="userName card-text">作品：<span>{{item.postCount}}</span> &nbsp;粉丝数：<span>{{item.followCount}}</span></div>
      </div>
      <div class="card-right"><button>关注</button></div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import {getAttention, getAttentionRefresh} from '@/network/home'
export default {
  name: "Attention",
  data(){
    return{
      userList: [],
      userName: '',
      userMes: '',
      followCount: '',
      postCount: '',
      lastAccount: ''
    }
  },
  created() {
    this.getAttentionData()
  },
  methods: {
    test(){
      alert(111)
    },
    //更新数据
    refresh(lastAccount) {
      getAttentionRefresh(lastAccount)
          .then(res => {
            this.dataparse(res)
          })
          .catch(err => {
            console.log(err)
          })
    },

    //获取列表数据
    getAttentionData() {
      getAttention().then(res => {
        /* // map转换用户信息
         const users = res.data.map(d => {
           return JSON.parse(d.json_metadata).account;
         })
         this.userList = users;
         const lastElement = users[users.length - 1]
         this.lastAccount = lastElement.name
         console.log(this.userList)
         console.log(lastElement)
         console.log(this.lastAccount)*/
        //调用方法
        this.dataparse(res)
      }).catch(err => {
        console.log(err)
      })
    },

    dataparse(res){
      // map转换用户信息
      const users = res.data.map(d => {
        return JSON.parse(d.json_metadata).account;
      })
      this.userList = users;
      const lastElement = users[users.length - 1]
      this.lastAccount = lastElement.name
      console.log(this.userList)
      console.log(lastElement)
      console.log(this.lastAccount)
    }
  }
}
</script>

<style scoped>
#attention{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 78vh;
}
.top-bar{
  display: flex;
  flex-direction: row;
  /*border: 1px solid red;*/
  align-items: center;
  height: 6vh;
  /*padding: 0 20px;*/
  position: relative;
  background-color: #ffffff;
  margin-left: 18px;
  margin-right: 20px;
  text-align: left;
}
.top-bar a {
  position: absolute;
  right: 0px;
}
.concent{
  display: flex;
  flex-direction: column;
  flex: 1;
  /*border: 1px solid blueviolet;*/
  overflow-y: scroll;
  font-size: 12px;
}
.concent::-webkit-scrollbar { width: 0 !important }
.pageCard{
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 12vh;
  border-bottom: 1px solid #c8cdcd;
}
.card-left{
  display: flex;
  /*flex: 1;*/
  height: 100%;
  line-height: 12vh;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /*border: 1px solid red;*/
}
.card-left img{
  width: 50%;
  max-width: 50%;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.card-center{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.card-right{
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-right button{
  background-color: #eeb747;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 10px;
}
.v-application p{
  margin-bottom: 0px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width:80%;
}
.cardConcent{
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-flex{
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 12vh;
  border-bottom: 1px solid #c8cdcd;;
}
.userName{
  flex: 1;
  -ms-flex-item-align: start;
  align-self: flex-start;
  font-size: 10pt;
  color: black;
}
.card-text{
  width: 62vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-swipper{
  text-align: left;
}
.concent-card{
  padding-top: 6px;
}
</style>