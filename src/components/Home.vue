<template>
    <b-container fluid style="margin: 1em">
        <b-jumbotron header="Hi! I'm Aaron Atkinson" class="shadow-sm">A computer programmer.</b-jumbotron>
        <div v-for="s in section" v-bind:key="s.id">
            <b-card v-if="s.id % 2 === 0" style="background-color: #e9ecef; border-radius: 0.5em; border-color: #e9ecef" >
                <b-media>
                    <b-card-title>{{s.title}}</b-card-title>
                    <b-img :src="s.picture"></b-img>
                    <b-card-text style="font-size: larger">{{s.content}}</b-card-text>
                </b-media>
            </b-card>
            <b-card v-if="s.id % 2 !== 0"  style="border-color: white">
                <b-media>
                    <b-card-title style="font-size: xx-large">{{s.title}}</b-card-title>

                    <b-row>
                        <b-col cols="8">
                            <b-card-text style="font-size: larger;">{{s.content}}</b-card-text>
                        </b-col>
                        <b-col>
                            <b-img fluid class="img-round img-responsive" :src="s.picture"></b-img>
                        </b-col>
                    </b-row>
                </b-media>
            </b-card>

        </div>
    </b-container>
</template>

<script>
    import aaronPic from "../assets/images/aaronpic.jpg"
    export default {
        name: "Home",
        data: function(){
          return{
                section:[
                    {
                        id:1,
                        title: "About me",
                        content: "I'm a life-long computer enthusiast since Windows 3.1, now a 2nd year Computer Systems Technology " +
                            "student at Saskatchewan Polytechnic. Diverse job history from service to the trade industry, exhibiting dedication and perseverance for any task required. " +
                            "Skilled in Agile Methodologies, C#, and Full-Stack Development.",
                        picture: aaronPic,

                    },
                    {
                        id:2,
                        title: "Interests",
                        content: "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.\n" +
                            "Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.\n" +
                            "Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.\n" +
                            "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.\n"
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>


</style>