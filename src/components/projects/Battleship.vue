<template>
    <b-container fluid>
        <b-jumbotron v-bind:header="project.name" />
        <b-container class="overflow-hidden">
        <iframe scrolling="no" frameborder="0" width="35%" height="500px" src="https://Command-line-Battleship.aaronatkinson.repl.run" />
        </b-container>

        <b-button to="/portfolio">Go back</b-button>
    </b-container>
</template>

<script>


    export default {
        name: "Battleship.vue",
        data:function()
        {
            return {
                project:
                    {
                        id: 5,
                        title: "portfolio/cmdBattleShip",
                        name: "Command Line Battleship",
                        description: "I made this"

                    }
            }
        },
    }
</script>

<style scoped>

</style>