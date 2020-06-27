<template>
    <b-container fluid style="width: 100%">
        <b-jumbotron fluid header-level="4"  v-bind:header="project.name" />
        <b-button to="/portfolio" variant="dark">Go back</b-button>
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
                <b-card class="shadow">
                    <h1 class="cardFont">Details</h1>
                    <p class="cardFont">This project was build with a ASP .Net Core back-end and using Vue.js as the front-end.</p>
                    <p class="cardFont">Upon visiting the website for the first time, the user would login with their google account to sign up for deposits.</p>
                    <p class="cardFont">The user will be directed to their own home page where they can view their next collection dates and their completed collections.</p>
                    <p class="cardFont">An administrator site was made for displaying the regions, routes, and subscribers that were stored on the database.</p>
                    <p class="cardFont">From there you were able to create, edit, and delete each object that was stored. Also, you could download a csv file containing subscriber information associated with a particular route.</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import completed from "../../assets/images/cosmoImg/completed.jpg"
    import login from "../../assets/images/cosmoImg/login.jpg"
    import nextDate from "../../assets/images/cosmoImg/nextDates.jpg"
    import noRegion from "../../assets/images/cosmoImg/noRegionTable.jpg"
    import regionTable from "../../assets/images/cosmoImg/regionTable.jpg"
    import routeTable from "../../assets/images/cosmoImg/routestable.jpg"
    import subTable from "../../assets/images/cosmoImg/subtable.jpg"

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
                                id: 2,
                                caption: "",
                                img: login
                            },
                            {
                                id: 3,
                                caption: "",
                                img: nextDate
                            },
                            {
                                id: 4,
                                caption: "",
                                img: completed
                            },
                            {
                                id: 5,
                                caption: "",
                                img: noRegion
                            },
                            {
                                id: 6,
                                caption: "",
                                img: regionTable
                            },
                            {
                                id: 7,
                                caption: "",
                                img: routeTable
                            },
                            {
                                id: 8,
                                caption: "",
                                img: subTable
                            },

                            ]

                    }


            }
        },
    }
</script>

<style scoped>
    .cardFont{
        font-family: 'Avenir', Helvetica, Arial, sans-serif
    }


</style>