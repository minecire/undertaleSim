class action{
    constructor(name, text, win){
        this.winCondition = win;
        this.times = 0;
        this.name = name;
        this.text = text;
    }
}


var actions = [];

actions.push(new action("Check", "ATK: 1, DEF: 1\nThe weakest enemy", -1));
actions.push(new action("Build a house", "ATK: 1, DEF: 1\nThe weakest enemy", -1));
actions.push(new action("Hug", "ATK: 1, DEF: 1\nThe weakest enemy", -1));
actions.push(new action("Fly", "ATK: 1, DEF: 1\nThe weakest enemy", -1));