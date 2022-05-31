const API_KEY = 'a773e98ce2c3fb45874ffcdd56df5537';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais
- recomendados (trending)
- em alta (top rated)
- ação
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const req = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(``)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(``)
            },
            {
                slug: 'toprated'
                title: 'Em Alta',
                items: await basicFetch(``)
            },
            {
                slug: 'action'
                title: 'Ação',
                items: await basicFetch(``)
            },
            {
                slug: 'comedy'
                title: 'Comédia',
                items: await basicFetch(``)
            },
            {
                slug: 'horror'
                title: 'Terror',
                items: await basicFetch(``)
            },
            {
                slug: 'romance'
                title: 'Romance',
                items: await basicFetch(``)
            },
            {
                slug: 'documentary'
                title: 'Documentários',
                items: await basicFetch(``)
            },
        ]
    }
}