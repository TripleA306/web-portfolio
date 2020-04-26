<template>
    <b-container fluid >
        <b-jumbotron fluid header-level="4"  header="Hi! I'm Aaron Atkinson" class="shadow-sm">A computer programmer.</b-jumbotron>
        <div v-for="s in section" v-bind:key="s.id">
            <b-card v-if="s.id % 2 === 0" style="background-color: #e9ecef; border-radius: 0.5em; border-color: #e9ecef" >
                <b-media v-if="s.content.length >= 1">
                    <b-card-title >{{s.title}}</b-card-title>
                    <b-img :src="s.picture"></b-img>
                        <b-card-text class="cardFont" style="font-size: larger">{{s.content}}</b-card-text>
                </b-media>
                <b-media v-else >
                    <b-card-title style="font-size: xx-large" class="cardFont">{{s.title}}</b-card-title>
                    <b-img :src="s.picture"></b-img>
                </b-media>
            </b-card>
            <b-row class="justify-content-between">
                <b-col class=" col-lg-6 col-mb-12 col-sm-12 col-12">
                    <b-card v-if="s.id % 2 !== 0"  style="border-color: white">
                        <b-media>
                            <b-card-title  style="font-size: xx-large">{{s.title}}</b-card-title>
                            <b-card-text  style="font-size: larger;">{{s.content}}</b-card-text>
                        </b-media>
                     </b-card>
                </b-col>
                <b-col class="text-center">
                    <b-img style="max-width: 75%; margin-bottom: 1rem" rounded="circle" fluid class=" img-responsive " :src="s.picture"></b-img>
                </b-col>
            </b-row>

        </div>
    </b-container>
</template>

<script>
    import aaronPic from "../assets/images/aaroncrop.jpg"
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
                        content: ""
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>




</style>