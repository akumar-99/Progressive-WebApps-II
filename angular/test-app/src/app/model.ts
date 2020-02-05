//Two ways to make object

// var model = {
//     user: "Ashish",
//     items: [{ action: "Buy Flowers", done: false},
//             { action: "Get Shoes", done: false},
//             { action: "Collect Tickets", done: false},
//             { action: "Call Joe", done: false}]
// }

// ---------------------------------------------------------------------//
export class Model {
    user;
    items;
    constructor() {
        this.user = "Ashish";
        this.items = [new TodoItem("Buy Flowers", false,"0000 hrs"),
                      new TodoItem("Get Shoes", false,"0000 hrs"),
                      new TodoItem("Collect Tickets", false,"0000 hrs"),
                      new TodoItem("Call Joe", false,"0000 hrs")]
    }
}

export class TodoItem {
    action;
    done;
    time;
    constructor(action, done, time) {
        this.action = action;
        this.done = done;
        this.time = time;
    }
}