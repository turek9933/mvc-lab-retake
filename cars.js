const cars = [
    {
        id: 0,
        make: "Toyota",
        model: "Yaris",
        year: 2001,
        color: "yellow",
    },
    {
        id: 3,
        make: "BMW",
        model: "M4",
        year: 2003,
        color: "blue",
    },
    {
        id: 1,
        make: "Audi",
        model: "Q7",
        year: 2012,
        color: "green",
    },
    {
        id: 2,
        make: "Ford",
        model: "GT-R",
        year: 1967,
        color: "red",
    },
    {
        id: 4,
        make: "Fiat",
        model: "126p",
        year: 1989,
        color: "orange",
    }
]

const getCars = () => {
    return cars;
}

const getCarInformation = (id) => {
    const findedCar = getCars().find((car) => car.id === id);
    if (findedCar) {
        return `Make: ${findedCar.make}, Model: ${findedCar.model}, Year: ${findedCar.year}, Color: ${findedCar.color}.`;
    }
    else {
        return 'Car doesn’t exist';
    }
}

const getCarAge = (id) => {
    const findedCar = getCars().find((car) => car.id === id);
    if (findedCar) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - findedCar.year;
        return `Car is ${carAge} years old.`;
    }
    else {
        return 'Car doesn’t exist';
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge,
}
