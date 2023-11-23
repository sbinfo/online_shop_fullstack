import { makeAutoObservable } from "mobx"

export default class BrandStore {
    constructor() {
        this._brands = [
            {id: 1, name: "Google"},
            {id: 2, name: "Xiaomi"},
            {id: 3, name: "Samsung"},
            {id: 4, name: "Apple"},
        ]
        makeAutoObservable(this);
    }

    setBrands(brands) {
        this._brands = brands;
    }
    
    get brands() {
        return this._brands;
    }
}