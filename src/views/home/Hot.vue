<template>
<div id="hot">
  <div class="concent-left">
    <v-carousel
        :show-arrows="false"
        cycle
        height="150"
    >
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
  <div class="concent-mid">
    <div class="hotCenterAds" v-for="(item,index) in hotCenterAds" :key="index">
      <img :src=item.cover>
      <div class="text"><img :src=item.icon><span>{{item.title}}</span></div>
    </div>
  </div>
  <div class="concent-right">333</div>
</div>
</template>

<script>
import {getBannersData} from '@/network/home'
export default {
  name: "Hot",
  data(){
    return{
      items: [],
      hotCenterAds:[]
    }
  },
  created() {
    this.loadBannerData()
  },
  methods: {
    loadBannerData(){
      //轮播图数据
      getBannersData().then(res => {
      console.log(res.data.hotCenterAds)
        const imgList = res.data.banners.map(item=>{
          const imgUrl=item.imgUri
          return {
            src:imgUrl
          }
        })
        // console.log(imgList)
        this.items=imgList
        this.hotCenterAds = res.data.hotCenterAds
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
#hot{
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -6px;
}
.concent-left{
  display: flex;
  /*flex: 2;*/
  height: 22vh;
  width: 100vw;
}
.concent-mid{
  display: flex;
  /*flex: 1;*/
}
.concent-right{
  display: flex;
  /*flex: 6;*/
  border: 1px solid blueviolet;
 }
/*>>> .v-image__image--cover{
  height: 22vh!important;
}
>>> .v-window{
  height: 22vh!important;
}
>>> .theme--light.v-image{
  height: 22vh!important;
}*/

.hotCenterAds{
  margin: 10px 6px;
  display: flex;
  flex: 1;
  height: 8vh;
  border-radius: 4px;
  position: relative;
  justify-content: center;
  align-items: center;
}
.hotCenterAds img{
  width: 100%;
  height: 100%;
}
.text{
  position: absolute;
}
.hotCenterAds .text img{
  width: 30%;
  vertical-align: middle;
}
</style>