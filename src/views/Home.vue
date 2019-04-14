<template>
<v-container>
    <v-card class="card">
        <v-avatar class="avatar">
            <img src="../assets/cucumber.jpeg" class="logo">
        </v-avatar>
        <h1 class="header1">hello users!</h1>
    </v-card>
    <v-container>
        <v-flex class="text-xs-center">
            <h1 class="header2">Make your server better</h1>
            <p style="margin-top: -20px">and use Cucumber Bot.</p>
            <a href="https://discordapp.com/oauth2/authorize?client_id=565794682836090880&scope=bot&permissions=8">
                <v-btn class="cyan">Add to Discord</v-btn>
            </a>
            <v-btn class="black"><router-link to="help">Learn more</router-link></v-btn>
        </v-flex>
    </v-container>
</v-container>
</template>
<style lang="scss">
$montfont: 'Montserrat', sans-serif;
h1 {
    font-family: $montfont;
    margin: 20px 0px 20px 0px;
}
.card {
    font-family: $montfont;
    .avatar {
        margin: 30px 0px 30px 50px;
        .logo {
            border: 2px solid rgb(214, 214, 214);
        }
    }
    .header1 {
        position: absolute; 
        top: 15px; 
        left: 120px;
    }
}
@media (max-width: 600px) {
    .header1 {
        font-size: 20px;
        top: 20px !important;
    }
    .header2 {
        font-size: 22px;
    }
}
</style>
<style lang="scss" scoped>
.v-btn {
    padding: 20px 45px 40px 45px;
}
@media (max-width: 600px) {
    .v-btn {
        padding: 20px 55px 40px 55px;
    }
}
a {
    color: white;
    text-decoration: none;
}
</style>


