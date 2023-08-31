<script setup>
import {useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { onMounted } from 'vue'
import axios from 'axios';
async function deleteData()
{
    try {
        const response = await axios.delete(`https://dummyjson.com/products/${route.params.id}`)
        if(response.status == 200 )
        {
            router.push({path: '/'})
        }
    } catch (error) {
        console.log('Smothing wrong' + error)
    }
}
onMounted(()=>{
    deleteData()
})
</script>

<template>
    <h1>this is delelte</h1>
</template>

<style scoped>
    
</style>
