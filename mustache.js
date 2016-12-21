/**
 * 
 */

let cars = [
    {
        make: 'Acura',
        model: 'NSX',
        size: 3,
        funds: 20,
    },
    {
        make: 'Honda',
        model: 'S2000',
        size: 2,
        funds: 78,
    },
    {
        make: 'Toyota',
        model: 'Supra TT',
        size: 4,
        funds: 45,
    },
    {
        make: 'Honda',
        model: 'Civic Type R',
        size: 2,
        funds: 145,
    },
    {
        make: 'Jeep',
        model: 'Wrangler Unlimited Rubicon',
        size: 6,
        funds: 35,
    },
    {
        make: 'Jeep',
        model: 'Renegade Trailhawk',
        size: 4,
        funds: 87,
    },
    {
        make: 'Toyota',
        model: 'Tundra TRD',
        size: 7,
        funds: 25,
    },
    {
        make: 'Ford',
        model: 'Raptor 6.2L, not the 5.4L',
        size: 7,
        funds: 34,
    },
]


// event listener. after page loads, function is called
window.addEventListener('load', function () {

let request = new XMLHttpRequest();
request.open('GET', 'https://mysterious-wildwood-46789.herokuapp.com/lots');
request.addEventListener('load', function () {
    let response = JSON.parse(request.responseText);  
    console.log('loaded') 


        // for loop for parking lot array
    for (let i = 0; i < response.length; i++) {
        // creating a new li
        let lotList = document.createElement('li');
        // links lotList to Mustache method in html
        lotList.innerHTML = Mustache.render(
            document.querySelector('#lots').innerHTML,
            {//html: js array   
                lot: response[i].id,
                capacity: response[i].capacity,
                cost: response[i].rate
            }
        );
        let adopter = document.querySelector('.parking-lot');
        adopter.appendChild(lotList);
        console.log('lotList is running');
        console.log(response[i].id);
    }
});
request.send();

carList(cars);







//lotButtonOne(response[0].id);



});


function carList() {
        // for loop for car array
    for (let i = 0; i < cars.length; i++) {
        // creating a new li
        let carList = document.createElement('li');
        // links carList to Mustache method in html
        carList.innerHTML = Mustache.render(
            // calls on script with id= cars
            document.querySelector('#cars').innerHTML,
            //assigns html call names to output
            {
                makeModel: cars[i].make + ' ' + cars[i].model,
                size: cars[i].size,
                funds: cars[i].funds,
                lots: [
                    {plots: 0},
                    {plots: 1},
                    {plots: 2},
                    {plots: 3},
                ]}
            
        );

        //lexi code
let buttonOne = carList.querySelector('.plots-0').addEventListener('click', function () {
    updateCars(0, cars[i]);
    console.log('this is first number' + 0, cars[i]);
});
let buttonTwo = carList.querySelector('.plots-1').addEventListener('click', function () {
    updateCars(1, cars[i]);
});
let buttonThree = carList.querySelector('.plots-2').addEventListener('click', function () {
    updateCars(2, cars[i]);
});
let buttonFour = carList.querySelector('.plots-3').addEventListener('click', function () {
    updateCars(3, cars[i]);
});
        // parent variable to class car-list
        let parent = document.querySelector('.car-list');
        //"parent" adopts carList
        parent.appendChild(carList);
        //console.log(buttonCount);

    }

}


//lexi code 
function updateCars (lotNum, car) {

    let newParkedCar = {
        lotNum: lotNum,
        make: cars.make,
        model: cars.model, 
        size: cars.size,
        funds: cars.funds,
    }
    let request = new XMLHttpRequest();
    request.open('POST', 'https://mysterious-wildwood-46789.herokuapp.com/lots');
    request.send(JSON.stringify(updateCars));
    console.log('updateCars is running');
}

// function lotButtonOne () {
//     response[0].capacity++;
// console.log('lot0 ' + response[0].capacity);
// }

// function lotButtonTwo () {
//     response[1].capacity++;
// console.log('lot1: ' + response[1].capacity);
// }

// function lotButtonThree () {
//     response[2].capacity++;
// console.log('lot2 ' + response[2].capacity);
// }

// function lotButtonFour () {
//     response[3].capacity++;
// console.log('lot3: ' + response[3].capacity);
// }