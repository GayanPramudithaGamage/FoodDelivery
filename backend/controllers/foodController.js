import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ succsess: true, message: "Food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ succsess: false, message: "Failed to add food" });
  }
};

//all food list

const listfood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ succsess: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ succsess: false, message: "Failed to get food" });
  }
};

// reomve food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {}); //delete image from uploads folder

    await foodModel.findByIdAndDelete(req.body.id); //delete food item from database

    res.json({ succsess: true, message: "Food removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ succsess: false, message: "Failed to remove food" });
  }
};

export { addFood, listfood, removeFood };
