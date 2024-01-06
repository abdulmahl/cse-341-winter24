const emilyRoute = (req, res) => {
  res.send("Emily Dews");
};

const LouiRoute = (req, res) => {
  res.send("Loui Dews");
};

const hannahRoute = (req, res) => {
  res.send("Hannah Dews");
};

module.exports = {
    emilyRoute,
    LouiRoute,
    hannahRoute
} 
