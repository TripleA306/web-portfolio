<template>
    <b-container>
        <b-jumbotron v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
    </b-container>
</template>

<script>
    import Fitnessimg from "../../assets/images/Fitness Tracker.png";

    export default {
        name: "FitnessTracker",
        data:function()
        {
            return {
                project:
                    {
                        id: 3,
                        title: "fitnesstracker",
                        name: "Fitness Tracker",
                        description: "I made this",
                        image: Fitnessimg,

                    }


            }
        },
    }
</script>

<style scoped>

</style>