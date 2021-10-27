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
	}

	honk () {
		return super.honk();
	}
	toString () {
		return super.toString();
	}
	numWheels () {
		return 4;
	}
}

class Motorcycle extends Vehicle {
	constructor (a, b, c) {
		super(a, b, c);
	}
	honk () {
		return super.honk();
	}
	toString () {
		return super.toString();
	}
	numWheels () {
		return 2;
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
	add (a) {
		this.vehicle = a;
		if (this.vehicle === (new Car() || new Motorcycle()) && this.capacity < 2) {
			this.capacity++;
			this.vehicles.push(a);
			return 'Vehicle added!';
		}
		return `Only vehicles are allowed in here!`;
	}
}
