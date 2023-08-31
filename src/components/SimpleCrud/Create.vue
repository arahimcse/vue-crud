<script  setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
import { reactive } from 'vue'
const data = reactive({
    "title":'',
    "description":''
})
async function create()
{
    try {
        const response = await axios.post(`https://dummyjson.com/products/add`, data)
        if(response.status == 200)
        {
            router.push({path: '/', params: data})
        }
    } catch (error) {
        console.log('Somethin wrong')
    }
}
</script>

<template>
    {{ data.data }}
    <section class="5/12 mx-auto text-center">
        <h1 class="my-5">Add Products items</h1>
        <form @submit.prevent = "create()">
            <input class="w-full my-1" type="text" v-model="data.title" placeholder="e.g: Symphone S23">
            <input class="w-full my-1" type="text" v-model="data.description" placeholder="e.g: OPPO F19 is officially announced on April 2021.">
            <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white text-center w-full p-3 text-xxl font-bold ">Add Products</button>
        </form>
    </section>
</template>

<style  scoped>
    
</style>
