<script setup>
import { ref } from 'vue'
import { useGetDataCardsComponent } from '../service/serrviceCardsComponent'
import { onMounted } from 'vue'

const { getDataCards, datas, errors, loadings, destroyCards, getCards } =
    useGetDataCardsComponent()
const select = ref(true)
const deletes = ref(true)

const deleteCard = async (id) => {
    if (!window.confirm('Seguro')) {
    }
    await destroyCards(id)
    await getDataCards(id)
}

getDataCards()

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

        <div
            class="card"
            style="width: 18rem"
            v-for="{
                listOfCards,
                id,
                name,
                image,
                description,
                price,
            } in datas"
            :key="id"
        >
            <img :src="image" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
            </div>

            <a href="#" class="btn btn-dark">✏️Editar</a>

            <button class="btn btn-dark" @click="deleteCard(id)">
                ❌Eliminar
            </button>
        </div>

    </div>
</template>
>
<style scoped>
.container_card {
    display: grid;
    grid-template-columns: repeat(6, 300px);
    margin: 5vh;
}

.card {
    margin: 2vh;
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
