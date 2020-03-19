<template>
  <b-container>
      <h1>Welcome to Aarons Home Page</h1>
      <p>This looks fairly empty....</p>
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
#logoHeaderDiv
{
    flex-direction: column;
    display: inline-flex;
    align-items: center;
}

#logo_Cans4Cosmo
{
    flex: 2;
    width: 20%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.networkError
{
    color: red;
    font-size: 1.5rem;
}

#btnShowAll
{

    background-color: white;
    color: black;
}

#btnShowAll.active
{
    background-color: dodgerblue;
    color: white;
}

</style>
