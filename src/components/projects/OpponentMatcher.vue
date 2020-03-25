<template>
    <b-container>
        <b-jumbotron v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
    </b-container>
</template>

<script>
    import Oppimg from "../../assets/images/OppPage.png";

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
                        image: Oppimg,

                    }


            }
        },
    }
</script>

<style scoped>

</style>