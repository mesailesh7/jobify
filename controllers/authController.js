const register = async (req, res) => {
  res.send("Register");
};

const login = async (req, res) => {
  res.send("Login user");
};

const updateUser = async (req, res) => {
  res.send("Update user");
};

export { register, login, updateUser };
