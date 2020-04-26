<template>
    <b-container fluid >
        <b-jumbotron fluid header-level="3"  v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
        <b-row style="margin-top: 1rem">
            <b-col class="col-md-6 col-sm-12 col-12" style="width: 50%">
                <b-carousel
                        id="carousel-1"
                        :interval="4000"
                        controls
                        indicators
                        img-width="35%"
                        style="text-shadow: 1px 1px 2px #333;"

                >
                    <b-carousel-slide v-for="img in project.image" v-bind:key="img.id">
                        <template v-slot:img>
                            <img    fluid
                                    class="d-block img-fluid w-100"
                                    width="1024"
                                    height="480"
                                    v-bind:src=img.img
                                    alt="image slot"
                            >
                        </template>
                        <h1>{{img.caption}}</h1>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col>
                <b-card>
                    <h1 class="cardFont">Details</h1>
                    <p class="cardFont">This project was created in Android Studio.</p>
                    <p class="cardFont">This simple fitness tracker would help users manage their caloric intake and log their daily workout amounts.</p>
                    <p class="cardFont">A profile was required to calculate the users BMI that would be used to estimate their daily calorie intake.</p>
                    <p class="cardFont">The food tab would deduct your daily calorie amount.</p>
                    <p class="cardFont">The workout section allowed you to select from basic workouts (walking, running, biking).
                        The app would take the duration and using MET values calculated by University Of South Carolina Of Public Health to determine calories burned.</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Fitnessimg from "../../assets/images/fitnessImg/Fitness Tracker.png";
    import fitProfile from "../../assets/images/fitnessImg/fit profile.png";
    import fitfood from "../../assets/images/fitnessImg/fitfood.png";
    import fitworkout from "../../assets/images/fitnessImg/fitworkout.png";

    export default {
        name: "FitnessTracker",
        data:function()
        {
            return {
                project:
                    {
                        id: 3,
                        name: "Fitness Tracker",
                        image: [
                            {
                                id: 1,
                                caption: "Home Screen",
                                img: Fitnessimg
                            },
                            {
                                id: 2,
                                caption: "Food Entry Screen",
                                img: fitfood
                            },
                            {
                                id: 3,
                                caption: "Workout Screen",
                                img: fitworkout
                            },
                            {
                                id: 4,
                                caption: "Profile Screen",
                                img: fitProfile
                            }]

                    }
            }
        },
    }
</script>

<style scoped>

</style>