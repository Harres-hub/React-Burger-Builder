import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://burgerbuilder-app-react.firebaseio.com/'
});

export default instance;