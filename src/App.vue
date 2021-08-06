<template>
  <div id="app">
    <transition mode="out-in">
   <router-view ></router-view>
    </transition>
   <Footer v-show="$route.meta.footShow"></Footer>
   
  </div>
</template>

<script>

import Footer from './components/footer'
export default {
  name: 'App',
  components: {
   Footer
    
  }
}
</script>

<style>
.v-enter,
    .v-leave-to {
      transform: translateX(100%);
    }
    .v-enter-active,
    .v-leave-active {
      transition: all 0.4s linear;
    }
</style>
