class Vehicle {
	constructor (a, b, c) {
		this.make = a;
		this.model = b;
		this.year = c;
	}
	honk () {
		return 'Beep.';
	}
	toString () {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

class Car extends Vehicle {
	constructor (a, b, c) {
		super(a, b, c);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor (a, b, c) {
		super(a, b, c);
		this.numWheels = 2;
	}
	revEngine () {
		return `VROOM!!!`;
	}
}

class Garage {
	constructor (a) {
		this.capacity = a;
		this.vehicles = [];
	}
	add (veh) {
		if (this.capacity === 0) {
			return 'Sorry, we are full.';
		}
		if (veh instanceof Vehicle) {
			this.capacity--;
			this.vehicles.push(veh);
			return 'Vehicle added!';
		}
		return `Only vehicles are allowed in here!`;
	}
}
