<script  setup>
import axios from 'axios'
import { ref, onMounted, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const singleItem = ref({})
async function getSingleItem() {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
        if (response.status == 200) {
            singleItem.value = response.data
            provide({"title":"singleItem.title", "description":"singleItem.description"})
        } else {
            console.log('Data not fetch')
        }
    } catch (error) {
        console.log("Network Connection not detected" + error)
    }
}
/**
 * Delete Items
 */
 async function deleteData(data)
{
    try {
        const response = await axios.delete(`https://dummyjson.com/products/${data}`)
        if(response.status == 200 )
        {
            router.push({path: '/'})
            alert('Deleted item! ' + response.data.title)
        }
    } catch (error) {
        console.log('Smothing wrong' + error)
    }
}
onMounted(() => {
    getSingleItem()
})
</script>

<template>
    
    <section class="w-5/6 mx-auto text-left py-5 my-5">
        <h1 class="text-3xl text-center py-10">Welcome to {{ singleItem.title }}</h1>
        <p>Description: {{ singleItem.description }}</p>
        <h3>Price: {{ singleItem.price }}</h3>
        <h3>Discount Percentage: {{ singleItem.discountPercentage }}</h3>
        <h3>Rating: {{ singleItem.rating }}</h3>
        <h3>Stock: {{ singleItem.stock }}</h3>
        <h3>Brand: {{ singleItem.brand }}</h3>
        <h3>Category: {{ singleItem.category }}</h3>
        <p><img :src="singleItem.thumbnail" :alt="singleItem.title"></p>
        <p class="text-right">
            <RouterLink class="bg-blue-500 hover:bg-blue-700 text-white p-2 inline-block mr-2" :to="{name:'updateProduct', params:{id:singleItem.id}}">Edit </RouterLink>
        <button @click="deleteData(singleItem.id)" class="bg-red-500 hover:bg-red-700 text-white p-2">Delete</button>
        </p>
        
    </section>
</template>
<style  scoped></style>
