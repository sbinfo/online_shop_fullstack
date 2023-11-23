import BrandStore from "./BrandStore";
import TypeStore from "./TypeStore";
import DeviceStore from "./DeviceStore";
import UserStore from "./UserStore";

const store = {
    user: new UserStore(),
    device: new DeviceStore(),
    brand: new BrandStore(),
    type: new TypeStore()
};

export default store;