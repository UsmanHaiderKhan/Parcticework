function Weather(cityName, desciption) {
    this.cityName = cityName;
    this.desciption = desciption;
    this._temprature = '';
}
Object.defineProperty(Weather.prototype, 'temprature', {
    get: function () {
        return this._temprature;
    },
    set: function (value) {
        return this._temprature = (value * 1.8 + 32).toFixed(2) + 'F';
    }
})