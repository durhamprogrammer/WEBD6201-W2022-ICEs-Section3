import { getData } from './users.data.js';
import { sayHello, sayGoodbye } from './hello.js';

getData()
  .then(function (data) {
    sayHello();
    console.log(data);
    sayGoodbye();
  })
  .catch(function (err) {
    console.error("ERROR: User data not returned!");
  });

