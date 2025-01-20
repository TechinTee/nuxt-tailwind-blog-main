<script setup lang="ts">
defineProps<{
    title: string;
    excerpt: string;
    image: string;
    slug: string;
}>()
</script>

<template>

    <div class="grid overflow-hidden rounded shadow-xl group">
        <div v-if="image" class="grid_image h-[280px] w-full relative overflow-hidden">
            <NuxtLink :to="`/${slug}`" class="grid_content-link">
                <img :src="image" :alt="title"
                    class="absolute object-cover w-full h-full duration-300 group-hover:scale-110">
            </NuxtLink>
        </div>
        <div class="p-5 grid_content">
            <NuxtLink :to="`/${slug}`" class="grid_content-link">
                <h3 class="mb-2 text-xl font-bold grid_content-title">{{ title }}</h3>
            </NuxtLink>
            <ClientOnly>
                <p v-if="excerpt" v-html="excerpt" class="mb-2 overflow-hidden text-sm grid_content-excerpt">
                </p>
            </ClientOnly>
            <NuxtLink :to="`/${slug}`" class="grid_content-link">
                Read More
            </NuxtLink>
        </div>
    </div>

</template>

<style scoped></style>