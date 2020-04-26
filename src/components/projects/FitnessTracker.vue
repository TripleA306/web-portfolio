<template>
    <b-container fluid style="margin: 1em">
        <b-jumbotron fluid header-level="3"  v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>

        <b-img v-bind:src="project.image[0]"></b-img>
        <b-img v-bind:src="project.image[1]"></b-img>
        <b-img v-bind:src="project.image[2]"></b-img>
        <b-img v-bind:src="project.image[3]"></b-img>
        <b-img v-bind:src="project.image[4]"></b-img>
        <b-img v-bind:src="project.image[5]"></b-img>


    </b-container>
</template>

<script>
    import Fitnessimg from "../../assets/images/fitnessImg/Fitness Tracker.png";
    import fitProfile from "../../assets/images/fitnessImg/fit profile.png";
    import fitfood from "../../assets/images/fitnessImg/fitfood.png";
    import fitSetup from "../../assets/images/fitnessImg/fitSetup.png";
    import fitupdate from "../../assets/images/fitnessImg/fitupdated.png";
    import fitworkout from "../../assets/images/fitnessImg/fitworkout.png";

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
                        image: [ Fitnessimg, fitProfile, fitfood, fitSetup, fitupdate, fitworkout]

                    }


            }
        },
    }
</script>

<style scoped>

</style>