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
        'model': 'Raptor 6.2L, not the 5.4L',
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
            'lotID': 1,
            'capacity': 5,
            'maxCapacity': 15,
            'cost': 5,
        },
        {
            'lotID': 2,
            'capacity': 5,
            'maxCapacity': 15,
            'cost': 5,
        },
        {
            'lotID': 3,
            'capacity': 5,
            'maxCapacity': 15,
            'cost': 5,
        },
    ]

// event listener. after page loads, function is called
window.addEventListener('load', function () {

    // for loop for car array
    for (let i = 0; i < cars.length; i++) {
        for (j = 0; j < parkingLots. length; j++) {
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
                plots: parkingLots[j].lotID,
            }
        );
        // parent variable to class car-list
        let parent = document.querySelector('.car-list');
        //"parent" adopts carList
        parent.appendChild(carList);
        console.log(parkingLots[j].cost);
    }
    }


    /**
     * buttons 
     * 1. loop through cars
     * 2. loop through buttons
     * 3. assign lot and assign car to buttons
     * 4. button sends car to lot.
     */
    for (i = 0; i < cars.length; i++) {
        for (j = 0; j < parkingLots. length; j++) {

                let buttonList = document.createElement('button');
                // buttonList.innerHTML = Mustache.render(
                //     document.querySelector('#cars').innerHTML,
                //     {
                //         lotid: parkingLots[i].lotID,
                //     }
                // );
             //   let buttonDaddy = document.querySelector('.car-list');
             //   buttonDaddy.appendChild(buttonList);
                console.log('button list should be in full effect');
            }
        }
    




    // for loop for parking lot array
    for (let i = 0; i < parkingLots.length; i++) {
        // creating a new li
        let lotList = document.createElement('li');
        // links lotList to Mustache method in html
        lotList.innerHTML = Mustache.render(
            document.querySelector('#lots').innerHTML,
            {//html: js array   
                lot: parkingLots[i].lotID,
                capacity: parkingLots[i].capacity + '/' + parkingLots[i].maxCapacity,
                cost: parkingLots[i].cost,
            }
        );
        let adopter = document.querySelector('.parking-lot');
        adopter.appendChild(lotList);
        console.log('lotList is running');
        console.log(parkingLots[i].lotID);
    }



});
