import express from "express";
import { v4 as uuidv4 } from "uuid";

let users = [];

//get all users
export const getUsers = (req, res) => {
  res.send(users);
};

//create a user
export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send(`user with the name ${user.firstName} added to the database`);

  res.send("POST ROUTE REACHED");
};

//get a single user

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

// delete user

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id ${id} deleted from the db.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
