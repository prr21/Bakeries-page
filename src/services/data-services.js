class BakeriesData {
    _bakariesUrl = 'http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no';
    _citiesUrl = 'http://api.dev.cakeiteasy.no/api/store/cities/?country_code=no&most_popular=true';
    _imgBaseUrl = 'http://api.dev.cakeiteasy.no/api/store/images/'

    getData = async (url) => {
        const resp = await fetch(url);

        if (!resp.ok) throw new Error (resp.status);

        const data = await resp.json();
        return data;
    }

    getBakaries = async () => {
        const bakeries = await this.getData(this._bakariesUrl);
        return bakeries;
    }

    getCities = async () => {
        const cities = await this.getData(this._citiesUrl);
        return cities;
    }

    getBakariesImg = async (id) => {
        const img = await this.getData(id);
        return img;
    }
}

export default BakeriesData;