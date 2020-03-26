<template>
    <b-container fluid class="">
        <b-jumbotron header="Portfolio" class="shadow-sm "/>
        <p>Here is all of the stuff i worked on</p>
        <b-row class="mb-2" align-h="between" >
        <b-card style="max-width: 20rem"  v-for="pj in projects" v-bind:key="pj.id" class="shadow" >
            <b-media>
                <template v-slot:aside>
                    <b-img rounded="left" fluid-grow style="max-width: 10em" :src="pj.image"></b-img>
                </template>
                <b-card-title>{{pj.name}}</b-card-title>
                <b-card-text>{{pj.description}}</b-card-text>
                <b-button v-bind:to="pj.title" variant="primary">Details</b-button>
            </b-media>
        </b-card>
        </b-row>
    </b-container>

</template>



<script>
    import CADCAMimg from '../assets/images/CADCAM Invaders.png'
    import Cans4Cosmo from '../assets/images/cans4cosmo_logo.png'
    import Fitnessimg from '../assets/images/Fitness Tracker.png'
    import Oppimg from '../assets/images/OppPage.png'

    export default {
        name: "Portfolio",
        data:function()
        {
            return {
                projects: [
                    {
                        id: 1,
                        title: "portfolio/cans4cosmoproject",
                        name: "Cans4Cosmo Project",
                        description: "I made this",
                        image: Cans4Cosmo,

                    },
                    {
                        id: 2,
                        title: "portfolio/cadcaminvaders",
                        name: "CADCAM Invaders",
                        description: "I made this",
                        image: CADCAMimg,

                    },
                    {
                        id: 3,
                        title: "portfolio/fitnesstracker",
                        name: "Fitness Tracker",
                        description: "I made this",
                        image: Fitnessimg,

                    },
                    {
                        id: 4,
                        title: "portfolio/opponentmatcher",
                        name: "Opponent Matcher",
                        description: "I made this",
                        image: Oppimg,

                    },
                ]

            }
        },
        methods:{

        }
    }
</script>

<style scoped>


</style>