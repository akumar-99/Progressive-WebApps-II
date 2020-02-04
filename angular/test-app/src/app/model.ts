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
        this.items = [new TodoItem("Buy Flowers", false),
                      new TodoItem("Get Shoes", false),
                      new TodoItem("Collect Tickets", false),
                      new TodoItem("Call Joe", false)]
    }
}

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}