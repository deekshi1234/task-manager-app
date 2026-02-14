import User from "../models/User.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    //pagination /tasks?page=28Limit=10,,/tasks
    const page = Math.max(parseInt(req.query.page || '1', 10),100);
     const limit = Math.min(
      Math.max(parseInt(req.query.limit || '10', 10), 1)
     )
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const err = new Error("User Not Found");
      err.status = 404;
      throw err;
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true});
    if (!updatedUser) {
      const err = new Error("User Not Found");
      err.status = 404;
      throw err;
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      const err = new Error("User Not Found");
      err.status = 404;
      throw err;
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    next(err);
  }
};
