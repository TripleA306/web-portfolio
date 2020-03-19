<template>
    <b-container>
        <b-jumbotron header="Portfolio"/>
        <p>Here is all of the stuff i worked on</p>
        <b-card v-for="pj in projects" v-bind:key="pj.id" :img-src="getImgUrl(pj)">
            <b-card-title>{{pj.name}}</b-card-title>
            <b-card-text>{{pj.description}}</b-card-text>
        </b-card>
    </b-container>

</template>

<script>
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
                        image: "url('../assets/images/cans4cosmo_logo.png')",

                    },
                    {
                        id: 2,
                        name: "CADCAM Invaders",
                        description: "I made this",
                        image: 'CADCAM Invaders.png',

                    },
                    {
                        id: 3,
                        name: "Fitness Tracker",
                        description: "I made this",
                        image: 'Fitness Tracker',

                    },
                    {
                        id: 4,
                        name: "Opponent Matcher",
                        description: "I made this",
                        image: 'OppPage',

                    },
                ]

            }
        },
        methods:{
            getImgUrl(project) {
                require('../assets/images/' + project.image + '.png');
                return  '../assets/images/' + project.image + '.png'
            }
        }
    }
</script>

<style scoped>

</style>