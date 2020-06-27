<template>
    <b-container fluid style="width: 100%">
        <b-jumbotron fluid header-level="3" header="Portfolio" class="shadow-sm "/>
        <b-container align="center">
        <b-card style=" margin-top: 1rem; max-width: 100%; min-width: 100%; " class="shadow">
            <b-media >
                    <b-img rounded="left" fluid-grow style="max-width: 10em" :src="clientProject.image"></b-img>
                <b-card-title>{{clientProject.name}}</b-card-title>
                <b-card-text>{{clientProject.description}}</b-card-text>
                <b-button v-bind:to="clientProject.title" variant="dark">More details</b-button>
            </b-media>
        </b-card>
        </b-container>
        <b-row class="mb-2" align-h="around" align="center"  >
        <b-card style="min-width: 20em; max-width: 20rem; margin-top: 1rem; margin-left: 0.5rem; margin-right: 0.5rem;"  v-for="pj in projects" v-bind:key="pj.id" class="shadow" >
            <b-media>
<!--                <template v-slot:aside >-->
                    <b-img rounded="left" fluid-grow style="max-width: 10em" :src="pj.image"></b-img>
<!--                </template>-->
                <b-card-title style="min-width: 10em;" >{{pj.name}}</b-card-title>
                <b-card-text>{{pj.description}}</b-card-text>
                <b-button v-bind:to="pj.title" variant="dark">More details</b-button>
            </b-media>
        </b-card>
        </b-row>
    </b-container>
</template>



<script>
    import CADCAMimg from '../assets/images/CADCAM Invaders.png'
    import Cans4Cosmo from '../assets/images/cans4cosmo_logo.png'
    import Fitnessimg from '../assets/images/fitnessImg/fitnessIcon.png'
    import Oppimg from '../assets/images/oppImg/matcherIcon.png'
    import battleImg from '../assets/images/battleshipImg/commandIcon.png'
    import nhlAddImg from '../assets/images/nhlAddin/nhlAddLogo.png'

    export default {
        name: "Portfolio",
        data:function()
        {
            return {

                clientProject: {
                    id: 1,
                    title: "portfolio/cans4cosmoproject",
                    name: "Cans4Cosmo Project",
                    description: "An efficient way for residents of Saskatoon to donate their deposit containers",
                    image: Cans4Cosmo,

                },
                projects: [
                    {
                        id: 6,
                        title: "portfolio/nhladdin",
                        name : "NHL Stats add-in",
                        description: "An Excel add-in for the hockey nuts!",
                        image: nhlAddImg
                    },
                    {
                        id: 2,
                        title: "portfolio/cadcaminvaders",
                        name: "CADCAM Invaders",
                        description: "A 2D shooter!",
                        image: CADCAMimg,

                    },
                    {
                        id: 3,
                        title: "portfolio/fitnesstracker",
                        name: "Fitness Tracker",
                        description: "An android app that tracks your workouts and calories!",
                        image: Fitnessimg,

                    },
                    {
                        id: 4,
                        title: "portfolio/opponentmatcher",
                        name: "Opponent Matcher",
                        description: "An multiplatform app that records your game matches!",
                        image: Oppimg,

                    },
                    {
                        id: 5,
                        title: "portfolio/battleship",
                        name: "Command Line Battleship",
                        description: "Sink all the ships, with a command line take on a classic game!",
                        image: battleImg
                    }


                ]

            }
        },
        methods:{
            testLK : function () {
                alert("WOW THIS WORKED! FROM LINKEDIN");
            },
            testGT : function () {
                alert("WOW THIS WORKED! FROM GITHUB");
            },

        }
    }
</script>

<style scoped>


</style>