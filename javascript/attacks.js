class OBEvent{
    constructor(t, tp, obj){
        this.time = t;
        this.type = tp;
        this.object = obj;
    }
}
class CBEvent{
    constructor(t, tp, c){
        this.time = t;
        this.type = tp;
        this.color = c;
    }
}
class EBEvent{
    constructor(t, tp){
        this.time = t;
        this.type = tp;
    }
}

class Battle {
    constructor(w, h, evs){
        this.width = w;
        this.height = h;
        this.events = evs
    }
}

var battles = [];

var eventStore = [];

eventStore.push(new OBEvent(1, "Object", new object(-0.2, 0.02, 0.004, 0, 0.1, 0, "bone1", 101)));
eventStore.push(new CBEvent(2, "Color", "blueSoul")); //blue soul
eventStore.push(new OBEvent(11, "Object", new object(-0.2, 0.01, 0.004, 0, 0.11, 0, "bone1", 111)));
eventStore.push(new OBEvent(21, "Object", new object(-0.2, 0, 0.004, 0, 0.12, 0, "bone1", 121)));
eventStore.push(new OBEvent(31, "Object", new object(-0.2, 0, 0.004, 0, 0.12, 0, "bone1", 131)));
eventStore.push(new OBEvent(41, "Object", new object(-0.2, 0.01, 0.004, 0, 0.11, 0, "bone1", 141)));
eventStore.push(new OBEvent(51, "Object", new object(-0.2, 0.02, 0.004, 0, 0.1, 0, "bone1", 151))); //6 bones in quick succession
eventStore.push(new EBEvent(200, "End")); //end of battle
battles.push(new Battle(0.4, 0.2, eventStore)); //battle 1

eventStore = []; //reset event store

eventStore.push(new OBEvent(1, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 181)));
eventStore.push(new OBEvent(2, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 182)));
eventStore.push(new OBEvent(51, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 231)));
eventStore.push(new OBEvent(52, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 232)));
eventStore.push(new OBEvent(101, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 281)));
eventStore.push(new OBEvent(102, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 282)));
eventStore.push(new OBEvent(151, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 331)));
eventStore.push(new OBEvent(152, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 332)));
eventStore.push(new OBEvent(201, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 381)));
eventStore.push(new OBEvent(202, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 382)));
eventStore.push(new OBEvent(251, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 431)));
eventStore.push(new OBEvent(252, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 432)));
eventStore.push(new OBEvent(301, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 481)));
eventStore.push(new OBEvent(302, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 482)));
eventStore.push(new OBEvent(351, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone1", 531)));
eventStore.push(new OBEvent(352, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone1", 532)));
eventStore.push(new EBEvent(650, "End"));
battles.push(new Battle(0.4,0.2,eventStore)); //battle 2