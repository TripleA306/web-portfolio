<template>
    <b-container fluid>
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
    import Oppimg from "../../assets/images/OppPage.png";
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
                        title: "opponentmatcher",
                        name: "Opponent Matcher",
                        description: "I made this",
                        image: [Oppimg, games, matches, newOpp, oppPage, settings ]

                    }


            }
        },
    }
</script>

<style scoped>

</style>