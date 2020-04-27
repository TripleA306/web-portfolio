<template>
    <b-container fluid >
        <b-jumbotron fluid header-level="4"  header="Hi! I'm Aaron Atkinson" class="shadow-sm">A computer programmer.</b-jumbotron>
        <div v-for="s in section" v-bind:key="s.id">
            <b-card v-if="s.id === 2" style="background-color: #e9ecef; border-radius: 0.5em; border-color: #e9ecef" >
                <b-media >
                    <b-card-title style="font-size: xx-large" class="cardFont">{{s.title}}</b-card-title>
                    <b-img :src="s.picture"></b-img>
                </b-media>
            </b-card>
            <b-container fluid>
            <b-row>
                <b-col class=" col-lg-6 col-mb-12 col-sm-12 col-12">
                    <b-card v-if="s.id === 1"  style="border-color: white">
                        <b-media>
                            <b-card-title class="cardFont"  style="font-size: xx-large">{{s.title}}</b-card-title>
                            <b-card-text class="cardFont"  style="font-size: larger">{{s.content}}</b-card-text>
                        </b-media>
                     </b-card>
                </b-col>
                <b-col class="text-center">
                    <b-img style="max-width: 75%; margin-bottom: 1rem" rounded="circle" fluid class=" img-responsive " :src="s.picture"></b-img>
                </b-col>
            </b-row>
            </b-container>
        </div>
            <b-row align-h="around" align="center"  >
                <b-card style="min-width: 20em; max-width: 20rem; margin-top: 0.5rem; margin-left: 0.5rem; margin-right: 0.5rem;" v-for="i in interest" v-bind:key="i.id" class="shadow" >
                    <b-media>
                        <!--                <template v-slot:aside >-->
                        <b-img rounded="left" fluid-grow style="max-width: 10em" :src="i.picture"></b-img>
                        <!--                </template>-->
                        <b-card-title style="min-width: 10em;" >{{i.title}}</b-card-title>
                        <b-card-text>{{i.content}}</b-card-text>
                    </b-media>
                </b-card>
            </b-row>


    </b-container>
</template>

<script>
    import aaronPic from "../assets/images/aaroncrop.jpg"
    import computer from "../assets/images/homeImgs/computer.png"
    import controller from "../assets/images/homeImgs/controller.png"
    import football from "../assets/images/homeImgs/football.png"

    export default {
        name: "Home",
        data: function(){
          return{
                section:[
                    {
                        id:1,
                        title: "About me",
                        content: "I'm a life-long computer enthusiast since Windows 3.1, now a 2nd year Computer Systems Technology " +
                            "student at Saskatchewan Polytechnic. Diverse job history from service to the trade industry, exhibiting dedication and perseverance for any task required. " +
                            "Skilled in Agile Methodologies, C#, and Full-Stack Development.",
                        picture: aaronPic,

                    },
                    {
                        id:2,
                        title: "Interests",

                    },
                ],
              interest: [
                  {
                      id:1,
                      title: "Computers",
                      picture: computer
                  },
                  {
                      id: 2,
                      title: "Video Games",
                      picture: controller

                  },
                  {
                      id: 3,
                      title: "Football",
                      picture: football
                  }
              ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .cardFont{
        font-family: 'Avenir', Helvetica, Arial, sans-serif
    }



</style>