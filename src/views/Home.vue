<template>
<div id="home">
 <div class="home-tabs">
 <keep-alive>
   <v-card>
     <v-tabs
         center-active
         dark
     >
       <v-tab v-for="(item,index) in this.navigationArr" :key="index"
              @click="currentItem(item.title)"
       >{{item.title}}</v-tab>
     </v-tabs>
   </v-card>
 </keep-alive>
 </div>
 <div class="home-concent">
   <keep-alive>
     <div :is="currentTab"></div>
   </keep-alive>
 </div>
</div>
</template>

<script>
import {getHomeData} from '@/network/home'
import Attention from "@/views/home/Attention";
import Hot from '@/views/home/Hot'
import Delicious from "@/views/home/Delicious";
import Wallpaper from '@/views/home/Wallpaper'
export default {
  name: "Home",
  components:{
    Attention,
    Hot,
    Delicious,
    Wallpaper
    },
  data(){
    return{
      navigation:[],
      newNavigationArr:[],
      navigationArr:[
        {id:10,title:'关注',isHot:0,type:0},
        {title:'热门'}
      ],
      currentTab: 'Attention',
      // Attention:'关注',
      // Hot:'热门'
    }
  },
  watch: {

  },
  created() {
    this.loadData()
  },
  methods:{
    loadData() {
      getHomeData().then(res => {
        this.navigation = res.data
        this.navigationArr.push(...this.navigation )
        console.log(this.navigationArr)
        // this.isShow = true;
      })

    },
    currentItem(e){
      console.log(e)
      switch (e) {
        case '关注':
          this.currentTab=Attention
          break;
        case '热门':
          this.currentTab=Hot
          break;
        case '美食':
          this.currentTab=Delicious
          break;
        case '人像':
          this.currentTab=Delicious
          break;
        case '活动':
          this.currentTab=Delicious
          break;
        case '建筑':
          this.currentTab=Delicious
          break;
        case '动物':
          this.currentTab=Delicious
          break;
        case '纪实':
          this.currentTab=Delicious
          break;
        case '航拍':
          this.currentTab=Delicious
          break;
        case '设计':
          this.currentTab=Delicious
          break;
        case '旅游':
          this.currentTab=Delicious
          break;
        case '风光':
          this.currentTab=Delicious
          break;
        case '壁纸':
          this.currentTab=Wallpaper
          break;
        default:
      }
    }
    }

}
</script>

<style scoped>
#home{
  display: flex;
  flex: 1;
  flex-direction: column;
}
.home-tabs{
  display: flex;
  height: 48px;
  /*border: 1px solid red;*/
}
.home-concent{
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 6px;
  /*border: 1px solid blueviolet;*/
}
>>> .theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled, .theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active), .theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn, .theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{
  color: #ccc !important;
}
>>> .v-tab.v-tab{
  color: black;
}
>>> .theme--dark.v-tabs>.v-tabs-bar{
  background-color: inherit;
}
/*>>> .theme--dark.v-tabs>.v-tabs-bar{*/
/*  border-bottom: 1px solid red !important;*/
/*  background-color: inherit !important;*/
/*}*/
>>>.v-tab:before, .v-tabs-slider{
  background-color: inherit!important;
}


>>> .v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next, .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{
  display: none !important;
}
</style>