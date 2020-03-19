<template>
    <b-container class="">
        <b-jumbotron header="Portfolio"/>
        <p>Here is all of the stuff i worked on</p>
        <b-card style="max-width: 20rem"  v-for="pj in projects" v-bind:key="pj.id" >
            <b-card-img style="max-width: 10em" :src="pj.image"></b-card-img>
            <b-card-title>{{pj.name}}</b-card-title>
            <b-card-text>{{pj.description}}</b-card-text>
        </b-card>
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
                        name: "Cans4Cosmo Project",
                        description: "I made this",
                        image: Cans4Cosmo,

                    },
                    {
                        id: 2,
                        name: "CADCAM Invaders",
                        description: "I made this",
                        image: CADCAMimg,

                    },
                    {
                        id: 3,
                        name: "Fitness Tracker",
                        description: "I made this",
                        image: Fitnessimg,

                    },
                    {
                        id: 4,
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