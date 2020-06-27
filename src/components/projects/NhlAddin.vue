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
                    <p class="cardFont">This project was created by Jon Ronn and myself with Visual Studio's Office-Addin tools.</p>
                    <p class="cardFont">This Excel add-in will allow you to view information on your favourite NHL teams and players.</p>
                    <p class="cardFont">Upon loading the add-in into your workbook, you can select an NHl team from a drop-down list. Pressing the 'show team stats' button will create a new spreadsheet with all of the available team information and roster.</p>
                    <p class="cardFont">Clicking on a player on the roster table will create another spreadsheet displaying all of the available stats for that particular player.</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import start from "../../assets/images/nhlAddin/nhlStart.png";
    import oiler from "../../assets/images/nhlAddin/nhlOilersAdd.png";
    import oilerStat from "../../assets/images/nhlAddin/nhlOilersStats.png";
    import oilerPlayer from "../../assets/images/nhlAddin/nhlOilersPlayer.png";

    export default {
        name: "NhlAddin",
        data:function()
        {
            return {
                project:
                    {
                        id: 4,
                        name: "NHL Stats add-in",
                        image: [
                            {
                                id: 1,
                                img: start
                            },
                            {
                                id: 2,
                                img: oiler
                            },
                            {
                                id: 3,
                                img: oilerStat
                            },
                            {
                                id: 4,
                                img: oilerPlayer
                            }]

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