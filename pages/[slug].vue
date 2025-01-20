<script setup lang="ts">
// อ่าน parameter slug จาก url
const params: any = useRoute().params
console.log(params)

const { data: posts , error } = await useWPAPI().getPost(params.slug)
const post: any = posts.value?.[0]
console.log(post)

useHead({
    title: post?.title?.rendered,
    meta: [
        {
            name: 'description',
            content: 'This is page' + post?.title?.rendered
        },
        {
            name: 'keywords',
            content: post?.title?.rendered+'Nuxt 3 page'
        }
    ]
})

</script>


<template>
    <section>
        <div class="p-6 mx-auto max-w-7xl lg:px-8">
            <div class="my-6">
                <div v-if="post">
                    <!-- blog title -->
                    <ClientOnly>
                        <h1 class="mb-5 text-3xl font-bold leading-snug text-center" v-html="post.title.rendered"></h1>
                    </ClientOnly>
                    <!-- blog meta -->
                    <div class="flex justify-center gap-5 mb-10">
                        Written by : <span class="text-gray-500">{{ post._embedded['author'][0].name }}</span>
                        Published on : <span class="text-gray-500">{{ post.date }}</span>
                    </div>
                    <!-- blog image -->
                    <div class="h-[400px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12">
                        <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" :alt="post.title.rendered" class="absolute object-cover w-full h-full duration-300 group-hover:scale-110" />
                    </div>
                    <!-- blog content -->
                    <ClientOnly>
                        <div class="blog__content" v-html="post.content.rendered"></div>
                    </ClientOnly>
                </div>
            </div>
        </div>

    </section>
</template>


<style>
    .blog__content p {
        @apply my-5;
    }
    .blog__content h1 {
        @apply text-xl sm:text-3xl font-bold mb-5 my-5;
    } 
    .blog__content h2 {
        @apply text-xl sm:text-3xl font-bold mb-5 my-5;
    }
    .blog__content a {
        @apply text-blue-500 hover:text-blue-700 transition-colors;
    }
</style>