<script setup lang="ts">
// ทดสอบเรียกไฟล์ env 
// const config = useRuntimeConfig()
// const WP_URL_API = config.public.wpUrlAPI
// console.log(WP_URL_API)

// การใช้ useFetch ในการเรียก API `https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-json/wp/v2/posts`
//   const posts: any = useFetch(`https://www.itgenius.co.th/sandbox_api/flutter_news_api/wp-json/wp/v2/posts`)
//   console.log(posts.data.value)

const { data: posts, error } = await useWPAPI().getPosts()

useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content: 'Home page'
        },
        {
            name: 'keywords',
            content: 'Home page'
        }
    ]
})

</script>

<template>
    <div class="p-6 mx-auto max-w-7xl lg:px-8">
        <div class="my-6">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <BlogGrid v-for="post in posts" :key="post.id" :title="post.title.rendered"
                    :excerpt="post.excerpt.rendered" :image="post._embedded['wp:featuredmedia'][0]?.source_url"
                    :slug="post.slug" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>