import { makeAutoObservable } from "mobx"

export default class TypeStore {
    constructor() {
        this._types = [
            {id: 1, name: "Smartphones"},
            {id: 2, name: "Laptops"},
            {id: 3, name: "Fridges"},
            {id: 4, name: "Televisions"},
            {id: 5, name: "Cameras"},
            {id: 6, name: "Drones"},
        ];
        this._selectedType = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    get types() {
        return this._types;
    }

    get selectedType() {
        return this._selectedType;
    }
}
