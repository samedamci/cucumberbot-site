<template>
    <v-app dark>
        <v-toolbar app>
            <router-link to="/">
                <v-toolbar-title class="headline text-uppercase">
                    <span id="title" style="font-family: 'Dokdo', cursive">cucumber.bot</span>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="help">
                <v-btn flat>Help</v-btn>
            </router-link>
            <router-link to="contact">
                <v-btn flat>Contact</v-btn>
            </router-link>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dokdo|Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i');
a {
    color: white;
    text-decoration: none;
}
@media (max-width: 600px) {
    #title {
        font-size: 20px;
    }
}
</style>

