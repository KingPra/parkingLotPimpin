/**
 * This is an example mock of how your app might look. You can go with a different design if you want but all functionality should be there.

To restate:

List of cars should be a list of JS objects that you write yourself.
All lots should be retrieved from the backend.
You should be able to add a car to a lot via the buttons on each car, which should make a change on the server.
 */

let cars = [
    {
        'make': 'Acura',
        'model': 'NSX',
        'size': 3,
        'funds': 20,
    },
    {
        'make': 'Honda',
        'model': 'S2000',
        'size': 2,
        'funds': 78,
    },
    {
        'make': 'Toyota',
        'model': 'Supra TT',
        'size': 4,
        'funds': 45,
    },
    {
        'make': 'Honda',
        'model': 'Civic Type R',
        'size': 2,
        'funds': 145,
    },
    {
        'make': 'Jeep',
        'model': 'Wrangler Unlimited Rubicon',
        'size': 6,
        'funds': 35,
    },
    {
        'make': 'Jeep',
        'model': 'Renegade Trailhawk',
        'size': 4,
        'funds': 87,
    },
    {
        'make': 'Toyota',
        'model': 'Tundra TRD',
        'size': 7,
        'funds': 25,
    },
    {
        'make': 'Ford',
        'model': 'Raptor',
        'size': 7,
        'funds': 34,
    },
]


let parkingLots =
[
    {
        'lotID': 0,
        'capacity': 5,
        'maxCapacity': 15,
        'cost': 5,
    },
    {
        'lotID': 0,
        'capacity': 5,
        'maxCapacity': 15,
        'cost': 5,
    },
    {
        'lotID': 0,
        'capacity': 5,
        'maxCapacity': 15,
        'cost': 5,
    },
    {
        'lotID': 0,
        'capacity': 5,
        'maxCapacity': 15,
        'cost': 5,
    },
]

window.addEventListener('load', function () {
    getLots(parkingLots);
    getCars(cars);
})


function getLots() {
    let parent = document.querySelector('.parking-lot')
    for (let i = 0; i < parkingLots.length; i++) {
        let lot = document.createElement('li');
        parent.appendChild(lot);

        let lotNumber = document.createElement('h1');
        let capacity = document.createElement('p');
        let cost = document.createElement('p');

        lotNumber.textContent = 'Lot: ' + parkingLots[i].lotID;
        capacity.textContent = 'Capacity: ' + parkingLots[i].capacity + '/' + parkingLots[i].maxCapacity;
        cost.textContent = 'Cost: $' + parkingLots[i].cost;
        
        lot.appendChild(lotNumber);
        lot.appendChild(capacity);
        lot.appendChild(cost);
        console.log('parkinglot logging')
    }
}


function getCars() {
    let parent = document.querySelector('.car-list')
    for (let i = 0; i < cars.length; i++) {
        let car = document.createElement('li');
        parent.appendChild(car);

        let makeModel = document.createElement('h1');
        let carSize = document.createElement('p');
        let funds = document.createElement('p');
        let button = document.createElement('button');
        button.className += "buttons";
        makeModel.textContent = cars[i].make + ' ' + cars[i].model;
        carSize.textContent = 'size: ' + cars[i].size;
        funds.textContent = 'funds $' + cars[i].funds;
        button.innerHTML = 'Lot: ' + parkingLots[1].lotID;
        car.appendChild(makeModel);
        car.appendChild(carSize);
        car.appendChild(funds);
        car.appendChild(button);
 
    




        console.log(cars[i].make);
    }
}