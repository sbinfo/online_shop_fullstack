import { makeAutoObservable } from "mobx"

export default class TypeStore {
    constructor() {
        this._types = [
            {id: 1, name: "Smarthphones"},
            {id: 2, name: "Laptops"},
            {id: 3, name: "Fridges"},
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    
    get types() {
        return this._types;
    }
}