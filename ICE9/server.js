import { getData } from './users.data.js';
import { sayHello, sayGoodbye } from './hello.js';

getData()
  .then((data) => {
    sayHello();
    console.log(data);
    sayGoodbye();
  })
  .catch((err) => {
    console.error("ERROR: User data not returned!: "  + err.message);
  });

