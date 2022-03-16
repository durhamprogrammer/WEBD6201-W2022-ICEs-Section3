const helloMessage = "Hello, World!";
const goodbyeMessage = "Good Bye!";

module.exports = {
  sayHello: function () {
    console.log(helloMessage);
  },

  sayGoodbye: function () {
    console.log(goodbyeMessage);
  }
};