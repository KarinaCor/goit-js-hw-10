import axios from "axios";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';


axios.defaults.headers.common["x-api-key"] = "live_i76xynsDcn0nmPnZXOeYN5o2h4vGD9p8dZz2MSAj7qs5gxFFE0ucr5ujulrxPSlU";

export function fetchBreeds() {
    return axios.get(`/breeds`)
        .then((response) => {
            return response.data;
        })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
       .then(response => {
           return response.data;
       });
};