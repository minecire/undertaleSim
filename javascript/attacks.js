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

eventStore.push(new CBEvent(1, "Color", "blueSoul")); //blue soul
eventStore.push(new OBEvent(2, "Object", new object(-0.2, 0.02, 0.004, 0, 0.09, 0, "bone2", 101)));
eventStore.push(new OBEvent(11, "Object", new object(-0.2, 0.01, 0.004, 0, 0.1, 0, "bone2", 111)));
eventStore.push(new OBEvent(21, "Object", new object(-0.2, 0, 0.004, 0, 0.11, 0, "bone2", 121)));
eventStore.push(new OBEvent(31, "Object", new object(-0.2, 0, 0.004, 0, 0.11, 0, "bone2", 131)));
eventStore.push(new OBEvent(41, "Object", new object(-0.2, 0.01, 0.004, 0, 0.1, 0, "bone2", 141)));
eventStore.push(new OBEvent(51, "Object", new object(-0.2, 0.02, 0.004, 0, 0.09, 0, "bone2", 151))); //6 bones in quick succession
eventStore.push(new EBEvent(200, "End")); //end of battle
battles.push(new Battle(0.4, 0.2, eventStore)); //battle 1

eventStore = []; //reset event store

eventStore.push(new OBEvent(1, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 181)));
eventStore.push(new OBEvent(2, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 182)));
eventStore.push(new OBEvent(51, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 231)));
eventStore.push(new OBEvent(52, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 232)));
eventStore.push(new OBEvent(101, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 281)));
eventStore.push(new OBEvent(102, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 282)));
eventStore.push(new OBEvent(151, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 331)));
eventStore.push(new OBEvent(152, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 332)));
eventStore.push(new OBEvent(201, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 381)));
eventStore.push(new OBEvent(202, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 382)));
eventStore.push(new OBEvent(251, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 431)));
eventStore.push(new OBEvent(252, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 432)));
eventStore.push(new OBEvent(301, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 481)));
eventStore.push(new OBEvent(302, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 482)));
eventStore.push(new OBEvent(351, "Object", new object(-0.2, 0.08, 0.002, 0, 0.023, 0, "bone2", 531)));
eventStore.push(new OBEvent(352, "Object", new object(0.2, -0.08, -0.002, 0, 0.16, 0, "bone3", 532)));
eventStore.push(new EBEvent(650, "End"));
battles.push(new Battle(0.4,0.2,eventStore)); //battle 2

eventStore = [];

eventStore.push(new OBEvent(1, "Object", new object(-0.125, 0.08, 0.006, 0, 0.023, 0, "bone1", 46)));
eventStore.push(new OBEvent(16, "Object", new object(-0.125, -0.06, 0.006, 0, 0.163, 0, "blueBone1", 61)));
eventStore.push(new OBEvent(51, "Object", new object(-0.125, 0.08, 0.006, 0, 0.023, 0, "bone1", 96)));
eventStore.push(new OBEvent(66, "Object", new object(-0.125, -0.06, 0.006, 0, 0.163, 0, "blueBone1", 111)));
eventStore.push(new OBEvent(101, "Object", new object(-0.125, 0.08, 0.006, 0, 0.023, 0, "bone1", 146)));
eventStore.push(new OBEvent(116, "Object", new object(-0.125, -0.06, 0.006, 0, 0.163, 0, "blueBone1", 161)));

eventStore.push(new OBEvent(151, "Object", new object(0.125, 0.08, -0.006, 0, 0.023, 0, "bone1", 196)));
eventStore.push(new OBEvent(166, "Object", new object(0.125, -0.06, -0.006, 0, 0.163, 0, "blueBone1", 211)));
eventStore.push(new OBEvent(201, "Object", new object(0.125, 0.08, -0.006, 0, 0.023, 0, "bone1", 246)));
eventStore.push(new OBEvent(216, "Object", new object(0.125, -0.06, -0.006, 0, 0.163, 0, "blueBone1", 261)));
eventStore.push(new OBEvent(251, "Object", new object(0.125, 0.08, -0.006, 0, 0.023, 0, "bone1", 296)));
eventStore.push(new OBEvent(266, "Object", new object(0.125, -0.06, -0.006, 0, 0.163, 0, "blueBone1", 311)));

eventStore.push(new EBEvent(320, "End"));
battles.push(new Battle(0.25, 0.2, eventStore));