import { reactive } from 'vue';
export const store = reactive(
    {
        listName: [
            {
                title: 'home',
                id: '#home',
            },
            {
                title: 'about',
                id: '#about',
            },
            {
                title: 'projects',
                id: '#projects',
            },
            {
                title: 'services',
                id: '#services',
            },
            {
                title: 'blog',
                id: '#blog',
            },
            {
                title: 'contact',
                id: '#contact',
            },
        ]
    }
)