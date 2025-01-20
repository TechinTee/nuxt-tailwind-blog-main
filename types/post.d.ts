export type Post = {
    id: number;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    Link: string;
    author: number;
    _embedded: any;
}

