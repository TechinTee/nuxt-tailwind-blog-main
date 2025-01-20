import { type Post } from "@/types/post";

export default () => {
    // อ่าน config จากไฟล์ .env
    const config = useRuntimeConfig();
    const WP_URL = config.public.wpUrlAPI

    // กำหนด useFetch ในการอ่าน API
    const get = async<T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
    }

    //อ่านข้อมูล post ทั้งหมดจาก api โดยใช้ get

    const getPosts = async (
        category?: number,
        page: number = 1,
        perPage: number = 10
    ) => {
        let query:string = `posts?page=${page}&per_page=${perPage}&_embed=1`
        if (category) {
            query += `&categories=${category}`
        }
        return get<Post[]>(query)
    }

    // อ่านข้อมูล post รายการเดียวจาก api โดยใช้ get
    const getPost = async (slug: string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`);
    }

    // get all categories
    const getCategories = async (fields: string = 'name,slug,count') => {
        return get<any>(`categories`);
    }

    // get single category
    const getCategory = async(slug: string) => {
        return get<any>(`categories?slug=${slug}`)
    }
    
    return { getPosts, getPost, getCategories, getCategory }
}