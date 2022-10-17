import axios from "axios";
import { ref } from "vue";
import { useRouter,useRoute } from 'vue-router'

export const useGetDataCardsComponent = () => {
    const data = ref([]); 
    const datas = ref([]);
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter();
    const route = useRoute();

    
    const getDataCards = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://localhost:8080/products");
            datas.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }

    const getCards = async (id) => {
        let response = await http.get(`http://localhost:8080/products/${id}`);
        data.value = response.data;
    }

    const storeCards = async (datas) => {
        errors.value =[]
        try{
            await axios.post("http://localhost:8080/products/",datas);
            await router.push({name:'home'})
        } catch(e) {
            if(e.response.status === 400) {
                for( const key in  e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);

                }
            }

        }
    }

    const destroyCards = async (id) => {
        await axios.delete(`http://localhost:8080/products/${id}`,datas.value)
    }
    
    return{
        getDataCards,
        getCards,
        destroyCards,
        storeCards,
        data,
        datas,
        loading,
        errors,

    }

}