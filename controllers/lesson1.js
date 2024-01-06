const emilyRoute = (req, res) => {
  res.send("Emily Dews");
};

const LouiRoute = (req, res) => {
  res.send("loui Dews");
};

const hannahRoute = (req, res) => {
  res.send("Hannah Dews");
};

module.exports = {
    emilyRoute,
    LouiRoute,
    hannahRoute
} 
