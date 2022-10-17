<script>
import {useGetDataCardsComponent} from "../service/serrviceCardsComponent";
import { reactive } from "vue";

export default {
    setup(){
        const form = reactive({
            price: "",
            name: "",
            description: "",
            image: "",

        });
        const { storeCards } = useGetDataCardsComponent();
        const saveCard = async() => {
              await storeCards(form);
        };
        return{
            form,
            saveCard,
            storeCards,
            
        };
    },
};
</script>




<template>
    <div class="container_shop">
        <div class="container_orange">
            <h2>AGREGAR PRODUCTO</h2>
   

            <form class="container_white" @submit.prevent="saveCard">

                <div class="form-group">
                    <label for="name" id="label">Nombre</label>
                    <input type="text" name="title" id="title" class="form-control" v-model="form.name" required />
                  </div>
                  
        <div class="form-group">
            <label for="description">Descripción</label>
            <input type="text" name="director" id="director" class="form-control" v-model="form.description" required />
          </div>

          <div class="form-group">
            <label for="image">Imagen(URL)</label>
            <input type="text" name="director" id="director" class="form-control" v-model="form.image" required />
          </div>
          <div class="form-group">
            <label for="price">Precio</label>
            <input type="text" name="director" id="director" class="form-control" v-model="form.price" required />
          </div>

 


                  <button type="submit" class="btn btn-dark">
                    <p id="text_enviar">Enviar</p>
                  </button>





            </form>

        </div>
    </div>
</template>

<style scoped>
.container_shop{
    display:flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-top: 7vh;
}
.container_white {
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    width: 90vh;
    height: 70vh;
    margin: 2vh;
    border-radius: 8px;
}
label{
    color: #ffffff;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

H2 {
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    ;
}

.container_orange {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:black;

    width: 100vh;
    height: 80vh;
    margin: 2vh;
    border-radius: 8px;
}

.container_button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 20vh;
    height: 10vh;
    margin: 3vh;
    border-radius: 8px;
}

#text_enviar {
    font-size: 3vh;
    color:aliceblue;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.form-group {
    margin: 1vh;
}


#button_back {
    margin-bottom: 1vh;
}
    
</style>