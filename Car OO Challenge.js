class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    honk() {
        return String("Beep.");
    }

    toString() {
        return String("The vehicle is a " + this.make + " " + this.model + " from " + this.year + ".")
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
      super(make, model, year);
      this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {
      super(make, model, year);
      this.numWheels = 2;
    }

    revEngine() {
        return String("VROOM!!!");
    }
}

class Garage {
    constructor(capacity, vehicles) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle) {
        if (newVehicle  instanceof Vehicle) {
            if (this.vehicles.length == this.capacity) {
                return String("Sorry, we're full.");
            }
            else {
                this.vehicles.push(newVehicle);
                return String("Vehicle added!");
            }
        }
        else {
            return String("Only vehicles are allowed in here!");
        }
    }
}