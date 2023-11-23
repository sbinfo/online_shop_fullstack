import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._devices = [
            { id: 1, name: "Pixel 8 Pro", price: 1099, rating: 9.0, img: "https://lh3.googleusercontent.com/q5rKMPfhgbQmZOXMBohWyajhHDqGulqS-3mXO-BAcjd8kLaPenXIHJ1HnmQXUVFUEzNlhwIwgK0-IuM0_CLoz0w3QyHHx3i0gpgv" },
            { id: 2, name: "Xiaomi 14", price: 980, rating: 9.5, img: "https://i02.appmifile.com/266_operatorx_operatorx_uploadTiptapImage/26/10/2023/ff155b10a1fdb8177d05eb5fc282bde5.png" },
            { id: 3, name: "Iphone 15 pro", price: 1199, rating: 9.2, img: "https://hips.hearstapps.com/hmg-prod/images/iphone-15-pro-max-review-esquire-65095f09647c8.jpg?crop=0.5xw:1xh;center,top&resize=640:*" },
            { id: 4, name: "Galaxy S23 Ultra", price: 1076, rating: 9.1, img: "https://media.s-bol.com/gyQ5Dz4wM67k/yDRNoV/1174x1200.jpg" },
        ];
        makeAutoObservable(this);
    }

    setDevices(devices) {
        this._devices = devices;
    }
    
    get devices() {
        return this._devices;
    }
}