//? This is the functions controller.
const routeOne = (req, res) => {
  res.send("Hello Route One / Home!");
};

const routeTwo = (req, res) => {
  res.send("Hello Route Two!");
};

const routeThree = (req, res) => {
  res.send("Hello Route Three!");
};

module.exports = { routeOne, routeTwo, routeThree };
