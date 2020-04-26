<template>
    <b-container fluid >
        <b-jumbotron fluid header-level="3"  v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>

        <b-row style="margin-top: 1rem">
            <b-col class="col-md-6 col-sm-12 col-12" style="width: 50%">
                <iframe scrolling="no" frameborder="0" width="100%" height="500px" src="https://Command-line-Battleship.aaronatkinson.repl.run" />
            </b-col>
            <b-col>
                <b-card>
                    <h1 class="cardFont">Details</h1>
                    <p class="cardFont">This project was created in Swift.</p>
                    <p class="cardFont">The player is tasked to sink all of the battleships to win the game.</p>
                    <p class="cardFont">The game had error handling to prevent the player from typing in unexpected rows and columns</p>
                    <p class="cardFont">Upon sinking all of the ship, you will be congratulated and asked to play again</p>
                    <p class="cardFont">The source code was built with the repl web compiler! Allowing for easy project embedding! Can you sink them all!?</p>
                </b-card>
            </b-col>
        </b-row>
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