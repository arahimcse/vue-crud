<script  setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
const route = useRoute()
const router = useRouter()
const item = ref({})
async function getItem()
{
    try {
        const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
        item.value = response.data

    } catch (error) {
        alert(error.message)
    }
}
async function update()
{
    try {
        const response = await axios.post(`https://dummyjson.com/products/add`, item)
        if(response.status == 200)
        {
            router.push({path: '/'})
        }
    } catch (error) {
        console.log(error.message)
    }
}
onMounted(()=>{
    getItem()
})
</script>

<template>
    <section class="w-5/12 mx-auto text-center">
        <h1 class="my-5">Update Products items</h1>
        <form @submit.prevent = "update()">
            <input class="w-full my-1" type="text" v-model="item.title" >
            <input class="w-full my-1" type="text" v-model="item.description" >
            <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white text-center w-full p-3 text-xxl font-bold ">Update Product</button>
        </form>
    </section>
</template>

<style  scoped>
    
</style>
