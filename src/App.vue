<template >
  <b-container class="cool" style="width: 100%" >

      <b-navbar toggleable="lg" >
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand fluid  tag="h1" style="font-size: xx-large">Aaron Atkinson</b-navbar-brand>
          <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item style="font-size: x-large" to="/">Home</b-nav-item>
              <b-nav-item style="font-size: x-large" to="/resume">Resume</b-nav-item>
              <b-nav-item style="font-size: x-large" to="/portfolio">Portfolio</b-nav-item>
          </b-navbar-nav>
          </b-collapse>
      </b-navbar>
      <transition name="fade" mode="out-in">
            <router-view class="routerView"/>
      </transition>


      <b-container style="margin-top: 2em;  display: flex; flex-direction: row; align-items: center; text-align: center">
          <font-awesome-icon  class="pointer"  @click="testLK" size="4x" :icon="['fab', 'linkedin']"/>
          <font-awesome-icon  class="pointer" @click="testGT" size="4x" :icon="['fab', 'github']"/>
          <p style="padding-left: 2em">Created by Aaron Atkinson (2020)</p>
      </b-container>
  </b-container>
</template>

<script>
//import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import {BootstrapVue} from 'bootstrap-vue'

export default {
  name: 'app',
    data:function()
    {
        return {
            currentPage: "Aaron's Home", //Current page's title

        }
    },
    methods:{
        testLK : function () {
            window.location.assign("https://www.linkedin.com/in/aaron-atkinson2292/");
        },
        testGT : function () {
            window.location.assign("https://github.com/TripleA306/");
        },

    },
    computed:{

    },
    watch:
        {
            currentPage: function()
            {
                document.title = this.currentPage;  //Updates document title whenever currentPage changes
            }
        },
    mounted()
    {
        document.title = "Aaron's Home";

    }
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    overflow: hidden;
    width: 100vw;
}

.fancyFont{
    font-family: 'Fira Sans', sans-serif;
}

.routerView{
    margin-right: 80px;
    margin-left: 80px;
}
.cool{

    border-radius: 4px ;
}



.fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.pointer{
    cursor: pointer;
}
</style>
