<template>
    <b-container>
        <b-jumbotron header="Resume"></b-jumbotron>
        <h1>Skills</h1>
        <b-container  class=".container-fluid">
            <b-card v-for="skill in skills" v-bind:key="skill.id">
                <b-card-title>{{skill.name}}</b-card-title>
                <b-card-text>
                    <ul v-for="detail in skill.info" v-bind:key="detail">
                        <li>{{detail}}</li>
                    </ul>
                </b-card-text>
            </b-card>
            <h1>Education</h1>
            <b-card v-for="edu in education" v-bind:key="edu.id">
                <b-card-sub-title>{{edu.year}}</b-card-sub-title>
                <b-card-title>{{edu.course}}</b-card-title>
                <b-card-sub-title>{{edu.where}}</b-card-sub-title>
                <b-card-text>
                    <ul v-for="extra in edu.extras" v-bind:key="extra">
                        <li>{{extra}}</li>
                    </ul>
                </b-card-text>
            </b-card>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        name: "Resume",
        data:function()
        {
            return {
                skills: [
                    {
                        id: 1,
                        name: "Full Stack Development",
                        info: [
                            "Developed UI elements that interact with back-end databases using API calls" ,
                            "Developed methods and queries used to display specific information on front-end"
                        ]
                    },
                    {
                        id: 2,
                        name: "Problem Solving",
                        info:[ "Identifying the entities involved and their unique properties" ,
                            "Build relations and behaviors for each entity to allow for proper functionality",
                            "Work with the resources available to complete the task at hand"]
                    },
                    {
                        id: 3,
                        name: "Persistence",
                        info:[ "Zero tolerance for failure and am determined to complete a task",
                            "Any skill or toolset I consider mediocre, I will strive to gain a better understanding and proficiency till I am satisfied with my performances"]
                    }
                ],
                education: [
                    {
                        id: 1,
                        year: 2020,
                        course: "Computer Systems Technology Diploma",
                        where: "Saskatchewan Polytechnic, Saskatoon, SK",
                        extras: ["Java, C#, C, ASP.Net Core\n" ,
                            "Excel\n" ,
                            "HTML 5, CSS, JS, PHP, Vue.js\n" ,
                            "SQL, Oracle PL-SQL\n" ,
                            "Computer Networking\n" ,
                            "Installing and Configuring Operating Systems\n" ,
                            "Windows Server 2016 – 2019\n" ,
                            "SCCM\n" ,
                            "Linux – Administration and Scripting"]
                    },

                    {
                        id: 2,
                        year: 2010,
                        course: "Grade 12 Diploma",
                        where: "Carlton Comprehensive High School, Prince Albert, SK",
                        extras:[ "Calculus\n" ,
                            "Auto CAD engineering and architecture\n" ,
                            "Electrical A30\n" ,
                            "Biology Chemistry and Physics 30"]
                    }
                ]


            }
        },
    }
</script>

<style scoped>

</style>