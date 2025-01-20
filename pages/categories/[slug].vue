<script setup lang="ts">
const params: any = useRoute().params

console.log(params)

const { data: categories, error: categories_error } = await useWPAPI().getCategory(params.slug)

const category = categories.value[0];

console.log(category)
console.log(categories_error)

const { data: posts, error: posts_error } = await useWPAPI().getPosts(category.id)
console.log(posts_error)

useHead({
    title: category?.name,
    meta: [
        {
            name: 'description',
            content: 'This is page' + category?.name
        },
        {
            name: 'keywords',
            content: category?.name + 'Nuxt 3 page'
        }
    ]
})

</script>

<template>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
        <div class="my-6">
            <div v-if="posts?.length==0" class="text-center py-10">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">No Posts Found</h2>
                <p class="text-gray-600">Sorry, we couldn't find any posts in this category.</p>
            </div>
            <div v-else class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <BlogGrid v-for="post in posts" :key="post.id" :title="post.title.rendered"
                    :excerpt="post.excerpt.rendered" :image="post._embedded['wp:featuredmedia'][0]?.source_url"
                    :slug="post.slug" />
            </div>

        </div>
    </div>
</template>

<style scoped></style>