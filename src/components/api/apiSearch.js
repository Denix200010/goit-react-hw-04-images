const API_BASE = 'https://pixabay.com/api';
const API_KEY = '30096300-85c12d9a12810581ec765486e';

export function apiSearch(query, page) {
    return fetch(`${API_BASE}/?q=${query}
    &page=${page}&key=${API_KEY}&image_type=photo
    &orientation=horizontal&per_page=12`).then(res => res.json());
}