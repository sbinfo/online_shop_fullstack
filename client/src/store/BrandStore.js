import { makeAutoObservable } from "mobx"

export default class BrandStore {
    constructor() {
        this._brands = [
            {id: 1, name: "Google"},
            {id: 2, name: "Xiaomi"},
            {id: 3, name: "Samsung"},
            {id: 4, name: "Apple"},
            {id: 5, name: "Oppo"},
            {id: 6, name: "OnePlus"},
            {id: 7, name: "Sony"},
            {id: 8, name: "Asus"},
            {id: 9, name: "LG"},
            {id: 10, name: "Bosh"},
            {id: 11, name: "HP"},
            {id: 12, name: "Microsoft"},
        ]
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get brands() {
        return this._brands;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

}
