<script setup>
import { ref } from 'vue'
import { useGetDataCardsComponent } from '../service/serrviceCardsComponent'
import { onMounted } from 'vue'

const { getDataCards, data, errors, loadings } = useGetDataCardsComponent()
const listOfCards = getDataCards()
</script>

<template>
    <div class="container_card">
        <!-- <div
            class="card"
            style="width: 18rem"
            v-for="{ listOfCards, id, name, image, description, price } in data"
            :key="id"
        >
            <img :src="image" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <RouterLink to="/show">
                    <a class="card-link">More Info +</a>
                </RouterLink>
            </div>
        </div> -->


        <div class="card" style="width: 18rem;"    v-for="{ listOfCards, id, name, image, description, price } in data"
        :key="id">
          <img :src="image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">{{description}}</p>
        
          </div>
          <a href="#" class="btn btn-success">➕Agregar</a>
          <a href="#" class="btn btn-warning">✏️Editar</a>
          <a href="#" class="btn btn-danger">❌Eliminar</a>
        </div>

    </div>
</template>
>
<style scoped>
.container_card {
    display: grid;
    grid-template-columns: repeat(6, 300px);

    
    
    margin: 8vh;
 
}
.card{
  margin: 4vh;
}
.card-link {
    display: flex;
    justify-content: flex-end;
}
h5 {
    display: flex;
    justify-content: center;
}
</style>
