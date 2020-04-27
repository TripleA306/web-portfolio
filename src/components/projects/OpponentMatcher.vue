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
                <b-card>
                    <h1 class="cardFont">Details</h1>
                    <p class="cardFont">This project was created with Xamarin.</p>
                    <p class="cardFont">This multiplatform app would track your tabletop game matches.</p>
                    <p class="cardFont">An opponent would first need to be added to the app.</p>
                    <p class="cardFont">Upon tapping their name, you could log the game played, date, if you won, and any additional comments.</p>
                    <p class="cardFont">A games section would list number of games available and the number of games played for each.</p>
                    <p class="cardFont">The settings menu was used to clear the information stored on the app.</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Oppimg from "../../assets/images/oppImg/OppPage.png";
    import games from "../../assets/images/oppImg/games.png"
    import matches from "../../assets/images/oppImg/matches.png"
    import newOpp from "../../assets/images/oppImg/newOpp.png"
    import oppPage from "../../assets/images/oppImg/OppPage.png"
    import settings from "../../assets/images/oppImg/settings.png"

    export default {
        name: "OpponentMatcher",
        data:function()
        {
            return {
                project:
                    {
                        id: 4,
                        name: "Opponent Matcher",
                        image: [
                            {
                                id: 1,
                                caption: "Home/Opponent Screen",
                                img: Oppimg
                            },
                            {
                                id: 2,
                                caption: "Game Screen",
                                img: games
                            },
                            {
                                id: 3,
                                caption: "Matches Screen",
                                img: matches
                            },
                            {
                                id: 4,
                                caption: "Adding Opponent Screen",
                                img: newOpp
                            },
                            {
                                id: 5,
                                caption: "Opponent Screen",
                                img: oppPage
                            },
                            {
                                id: 6,
                                caption: "Settings Screen",
                                img: settings
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