import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ab358adccc454555a15ec1d6657e60e9', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
