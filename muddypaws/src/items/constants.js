import item1 from "../img/harness.png";
import item2 from "../img/harness-attachment.jpg";
import item3 from "../img/collar.jpg";

const items = {
    1: {
        item: "Harness",
        price: "24.99",
        description: "This is our state of the art harness designed for the comfort and power of our hiker pals.",
        img: item1,
    },
    2: {
        item: "Harness Food & Drink Storage",
        price: "10.99",
        description: "Attach these handy-dandy storage units to your cat or dog harness for extra fuel!",
        img: item2,
    },
    3: {
        item: "Collar with GPS Tracker",
        price: "49.99",
        description: "Go ahead, let them wander.",
        img: item3,
    },
}

const options = {
    type: ['Dog', 'Cat'],
    size: ['Tiny', 'Small', 'Medium', 'Large'],
    color: ['Strawberry', 'Blackberry', 'Crazyberry', 'Camouflage', 'Night Moon', 'Fire Orange'],
}

export default { items, options };