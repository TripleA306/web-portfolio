<template>
    <b-container fluid >
        <b-jumbotron fluid header-level="4"  v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
        <b-row style="margin-top: 1rem">
            <b-col class="col-md-6 col-sm-12 col-12" style="width: 50%">
                <b-carousel
                        id="carousel-1"
                        :interval="4000"
                        controls
                        indicators
                        img-width="50%"
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
                    <p class="cardFont">This project was build with a ASP .Net Core back-end and using Vue.js as the front-end.</p>
                    <p class="cardFont"></p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Cans4Cosmo from "../../assets/images/cans4cosmo_logo.png";
    export default {
        name: "Cans4CosmoProject",
        data:function()
        {
            return {
                project:
                    {
                        id: 1,
                        title: "Cans4CosmoProject",
                        name: "Cans4Cosmo Project",
                        description: "I made this",
                        image: [
                            {
                                id: 1,
                                caption: "Home Screen",
                                img: Cans4Cosmo
                            }]

                    }


            }
        },
    }
</script>

<style scoped>

</style>