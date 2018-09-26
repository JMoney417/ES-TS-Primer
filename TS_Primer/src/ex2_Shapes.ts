interface Action {
  type: string;
}

let a: Action = {
    type: 'literal'
}

class NotAnAction {
  type: string;
  constructor() {
    this.type = 'Constructor function (class)';
  }
}

a = new NotAnAction(); // valid TypeScript!