class Animal {
    constructor(name) {
        this.name = name;
        this.order = 0;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

class AnimalQueue {
    constructor() {
        this.dogs = new LinkedList();
        this.cats = new LinkedList();
        this.order = 0;
    }

    enqueue(animal) {
        animal.order = this.order;
        this.order++;
        return animal instanceof Dog
            ? this.dogs.addLast(animal)
            : this.cats.addLast(animal);
    }

    dequeueAny() {
        if (!this.dogs) return this.dequeueCats();
        if (!this.cats) return this.dequeueDogs();

        const [dog, cat] = [this.dogs.peek(), this.cats.peek()];
        return cat.order < dog.order ? this.dequeueCats() : this.dequeueDogs();
    }

    dequeueDogs = () => this.dogs.poll();
    dequeueCats = () => this.cats.poll();
}
