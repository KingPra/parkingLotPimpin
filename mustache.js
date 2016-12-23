
// event listener. after page loads, function is called
window.addEventListener('load', function () {

    lotInfo();
    carList();
});

// document.addEventListener('click', function() {
//     let request = new XMLHttpRequest();
// request.open('GET', 'https://mysterious-wildwood-46789.herokuapp.com/lots');
//     console.log("lotInfo is being updated");

// });



function lotInfo() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://mysterious-wildwood-46789.herokuapp.com/lots');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log('loaded')

        // for loop for parking lot array
        for (let i = 0; i < response.length; i++) {

            let parkedList = response[i].inLot;
            console.log('first loop is logging lot id: ' + response[i].id);
            let carArr1 = [];
            let carArr2 = [];
            let carArr3 = [];
            let carArr4 = [];
            let currentLotCap0 = 0;
            let currentLotCap1 = 0;
            let currentLotCap2 = 0;
            let currentLotCap3 = 0;
            let arrayOfArrays = [carArr1, carArr2, carArr3, carArr4];

            for (j = 0; j < parkedList.length; j++) {
                console.log('second loop is logging Car Make: ' + parkedList[j].make);
//lot 0
                if (response[i].id === 0 && currentLotCap0 <= response[i].capacity) {
                    console.log('if statement 1 is logging id: ' + response[i].id + ' max capacity ' + response[i].capacity);
                    carArr1.push(parkedList[j].make + ' ' + parkedList[j].model);
                    let storedCap = 0;
                    currentLotCap0 += parkedList[j].size;
//lot 0 rejection
                    if (response[i].id === 0 && currentLotCap0 > response[i].capacity) {
                        currentLotCap0 -= parkedList[j].size;
                        carArr1.pop();
                    }
                    console.log('current Lot Cap1 ', currentLotCap0);
                    console.log('carArr1 = ' + carArr1[j]);
//lot 1
                }
                else if (response[i].id === 1 && currentLotCap1 <= response[i].capacity) {
                    console.log('if statement 2 is logging id: ' + response[i].id)
                    carArr2.push(parkedList[j].make + ' ' + parkedList[j].model);
                    currentLotCap1 += parkedList[j].size;
                    console.log('current Lot Cap2 ', currentLotCap1);
                    console.log('carArr2:  ' + carArr2);
//lot 1 rejection
                    if (response[i].id === 1 && currentLotCap1 > response[i].capacity) {
                        currentLotCap1 -= parkedList[j].size;
                        carArr2.pop();
                    }
                }
 // lot 2               
                else if (response[i].id === 2 && currentLotCap2 <= response[i].capacity) {
                    carArr3.push(parkedList[j].make + ' ' + parkedList[j].model);
                    currentLotCap2 += parkedList[j].size;
                    console.log('current Lot Cap3 ', currentLotCap2);
                    console.log('carArr3: ' + carArr3);
// lot 2 rejection
                    if (response[i].id === 0 && currentLotCap2 > response[i].capacity) {
                        currentLotCap2 -= parkedList[j].size;
                        carArr3.pop();
                    }
                }
  // lot 3              
                else {
                    carArr4.push(parkedList[j].make + ' ' + parkedList[j].model);
                    currentLotCap3 += parkedList[j].size;
                    console.log('current Lot Cap4 ', currentLotCap3);
                    console.log('carArr4: ' + carArr4);
// lot 3 rejection
                    if (response[i].id === 0 && currentLotCap3 > response[i].capacity) {
                        currentLotCap3 -= parkedList[j].size;
                        carArr4.pop();
                    }
                }
            }
            // creating a new li 
            let lotList = document.createElement('li');
            // links lotList to Mustache method in html
            lotList.innerHTML = Mustache.render(
                document.querySelector('#lots').innerHTML,
                {//html: js array   
                    lot: response[i].id,
                    currentCap: currentLotCap0 + currentLotCap1 + currentLotCap2 + currentLotCap3,
                    capacity: response[i].capacity,
                    cost: response[i].rate,
                    parked: arrayOfArrays[i],



                }
            )
            let adopter = document.querySelector('.parking-lot');
            adopter.appendChild(lotList);
            //console.log('lotList is running');
            //console.log(parkedList.make);
            console.log(carArr2);
        }
    });
    request.send();

}

function carList() {
    // parent variable to class car-list
    let parent = document.querySelector('.car-list');
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
                    { plots: 0 },
                    { plots: 1 },
                    { plots: 2 },
                    { plots: 3 },
                ]
            }

        );

        //lexi code
        let buttonOne = carList.querySelector('#plots-0').addEventListener('click', function () {
            updateCars(0, cars[i]);
            console.log('this is first number ' + updateCars(0, cars[i]));
        });
        let buttonTwo = carList.querySelector('#plots-1').addEventListener('click', function () {
            updateCars(1, cars[i]);
            console.log('this is the second number ' + 0, cars[i]);
        });
        let buttonThree = carList.querySelector('#plots-2').addEventListener('click', function () {
            updateCars(2, cars[i]);
        });
        let buttonFour = carList.querySelector('#plots-3').addEventListener('click', function () {
            updateCars(3, cars[i]);
        });

        //"parent" adopts carList
        parent.appendChild(carList);
        //console.log(buttonCount);

    }

}


//lexi code 
function updateCars(lot, cars) {

    let newParkedCar = {
        id: lot,
        make: cars.make,
        model: cars.model,
        size: cars.size,
        funds: cars.funds,

    }
    let request = new XMLHttpRequest();
    request.open('POST', 'https://mysterious-wildwood-46789.herokuapp.com/park');
    request.send(JSON.stringify(newParkedCar));
    //console.log('updateCars is running');
}



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
        model: 'Tundra TRD Pro',
        size: 7,
        funds: 25,
    },
    {
        make: 'Ford',
        model: 'Raptor 6.2L, not the 5.4L',
        size: 7,
        funds: 34,
    }
]
