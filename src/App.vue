<template>
  <div id="app">
  <v-app>
    <div class="app-body">
      <div class="nav-bar">
        暂时未做搜索栏
      </div>
      <div class="concent">
        <router-view></router-view>
      </div>
      <div class="tab-bar">
        <v-bottom-navigation
            :value="value"
            color="primary"
            grow
        >
          <v-btn @click="changeLouter(home)">
            <span>首页</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn @click="changeLouter(search)">
            <span>发现</span>

            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn @click="changeLouter(social)">
            <span>圈子</span>

            <v-icon>mdi-map-marker</v-icon>
          </v-btn>

          <v-btn>
            <span @click="changeLouter(profile)">我的</span>

            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </div>
  </v-app>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return{
      value:0,
      home:'Home',
      search:'Search',
      profile:'Profile',
      social:'Social'
    }
  },
  watch: {

  },
  mounted() {
    this.$router.replace({name:'Home', replace: true})
    },
  methods:{
    changeLouter(home){
      this.$router.replace({name:home, replace: true})
      // console.log(111)
    },
  }
}
</script>

<style>
@import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app-body{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.nav-bar{
  display: flex;
  flex-direction: column;
  height: 6vh;
  /*border: 1px solid red;*/
}

.tab-bar{
  display: flex;
  flex-direction: column;
  height: 56px;
  /*border: 1px solid red;*/
}
.concent{
  display: flex;
  flex-direction: column;
  flex: 1;
  /*border: 1px solid blue;*/
}
</style>

<style scoped>
>>> .v-application .primary--text{
  caret-color: #27e0e0 !important;
  color:#27e0e0 !important;
}
</style>