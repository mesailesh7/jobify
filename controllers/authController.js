const register = (req, res) => {
  res.send("Register");
};

const login = (req, res) => {
  res.send("Login user");
};

const updateUser = (req, res) => {
  res.send("Update user");
};

export { register, login, updateUser };
