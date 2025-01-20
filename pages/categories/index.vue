<script setup lang="ts">
const { data: categories, error } = await useWPAPI().getCategories()
console.log(categories)
</script>

<template>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
        <div class="my-6">
            <div class="">
                <NuxtLink 
                    v-for="category in categories" 
                    :key="category.id" 
                    :to="`/categories/${category.slug}`"
                    class="p-2 m-2 badge badge-primary badge-lg">
                    #{{ category.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>