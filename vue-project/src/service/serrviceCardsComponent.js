import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export const useGetDataCardsComponent = () => {
    const data = ref([]); 
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter()

    
    const getDataCards = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://localhost:8080/products");
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }

    const getCards = async (id) => {
        let response = await http.get(`http://localhost:8080/products/${id}`);
        data.value = response.data
    }
    console.log();
    return{
        getDataCards,
        getCards,
        data,
        loading,
        errors,

    }

}