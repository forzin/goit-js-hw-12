import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/'

export const fetchPhotos = (searchParams, page) => {
    
    const axoisOptions = {
        params: {
            q: searchParams,
            orientation: `horizontal`,
            page: page,
            per_page: 15,
            key: '45497630-f588d73f1b1f7379927f92167',
        }
    }

    return axios.get(`${BASE_URL}`, axoisOptions);
};