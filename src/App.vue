<template >
  <b-container class="cool" >
      <b-navbar class="cool">
          <b-navbar-brand tag="h1"  >Aaron Atkinson</b-navbar-brand>
          <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/resume">Resume</b-nav-item>
              <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          </b-navbar-nav>
      </b-navbar>
      <transition name="fade" mode="out-in">
            <router-view class="routerView"/>
      </transition>

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
      openHomePage: function(){
        this.$router.push('home');
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
</style>
