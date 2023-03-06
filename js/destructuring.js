const fish = {
    name: 'Hilsa',
    address: 'padma',
    color: 'silver',
    phone: '017435456234',
    price: 5000
}

/* const color=fish.color;
const price=fish.price;
const phone=fish.phone; */

const { phone } = fish;
console.log(phone);
console.log(phone);
console.log(phone);

const { price, color } = fish;
console.log(price, color);