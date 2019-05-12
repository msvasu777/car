const carsdata = [

    {
        id: 21,
        brand: "shift",
        seats: "4+driver",
        price: "300/hr",

    },
    {
        id: 22,
        brand: "Hyundai",
        seats: "4+driver",
        price: "350/hr",

    },
    {
        id: 23,
        brand: "tata indica",
        seats: "4+driver",
        price: "270/hr",

    },

    {
        id: 25,
        brand: "honda",
        seats: "4+driver",
        price: "320/hr",

    },
]



export const getcar = () => {
    return carsdata;
}

export const getCarById = id => {
    return carsdata.find(car => car.id === id);
}


