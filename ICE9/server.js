const users = require('./users.data');
const hello = require('./hello');

users.getData()
    .then(function(data)
    {
        hello.sayHello();
        console.log(data);
        hello.sayGoodbye();
    })
    .catch(function(err)
    {
        console.error("ERROR: User data not returned!");
    });

