<script setup>


</script>

<template>
    <div class="container_favorite">
        <h1>Lista de Favoritos!!!!</h1>
        <template>
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
          
              <v-card-subtitle class="pb-0">
                Number 10
              </v-card-subtitle>
          
              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>
          
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
          
              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Share
                </v-btn>
          
                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
    </div>
</template>

<style>
    .container_favorite{
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 20vh;
    }
</style>