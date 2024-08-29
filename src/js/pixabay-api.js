import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/'

export const fetchPhotos = async (searchParams, page) => {
    
    try {
        const axoisOptions = {
            params: {
                q: searchParams,
                orientation: `horizontal`,
                page: page,
                per_page: 15,
                key: '45497630-f588d73f1b1f7379927f92167',
            }
        }
    
        return await axios.get(`${BASE_URL}`, axoisOptions);
    } catch (err) {
        iziToast.show({
            message: "An error occurred while fetching images. Please try again.",
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            messageSize: '16px',
            messageLineHeight: '150%',
            maxWidth: 432,
            position: 'topRight',
            iconUrl: iconError,
        });
    }
};