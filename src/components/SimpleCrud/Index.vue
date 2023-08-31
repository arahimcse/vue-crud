<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const items = ref({})
async function getData()
{
    try{
    const response = await axios.get("https://dummyjson.com/products")
    if(response.status == 200)
    {
       items.value = response.data.products
    } else 
    {
        items.value = 'Data is not available'
    }
    } catch (error) 
    {
        console.log('Unexpected error occured!' + error)
    }
}
async function deleteData(data)
{
    try {
        const response = await axios.delete(`https://dummyjson.com/products/${data}`)
        if(response.status == 200 )
        {
            alert('Deleted item! ' + response.data.title)
        }
    } catch (error) {
        console.log('Smothing wrong' + error)
    }
}
onMounted(()=>{
    getData()
})
</script>

<template>
    
    <section>
        <div class="w-11/12 mx-auto my-5">
            <h1 class="text-3xl text-center">Welcome to CRUD Application</h1>
            <p class="text-right">Add Products <RouterLink class="bg-yellow-500 hover:bg-yellow-700 text-white p-1 my-10" :to="{name:'addProducts'}">Add</RouterLink></p>
        </div>
        
        <table class="w-11/12 mx-auto">
        <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Body </th>
            <th colspan="2">Action</th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td ><RouterLink class="bg-blue-500 hover:bg-blue-700 text-white py-1 p-1 block" :to="{name:'productDetail', params:{id:item.id}}">Read</RouterLink></td>
            <td>
                <button @click="deleteData(item.id)" class="bg-red-500 hover:bg-red-700 text-white py-1 p-1 block">Delete</button>
                </td>
        </tr>
    </table>
    </section>
</template>

<style scoped>
    table, tr, th, td{
        border: 1px solid #000;
    }
</style>