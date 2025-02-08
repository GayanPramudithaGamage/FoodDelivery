import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item 

const addFood = async (req, res) => {

    let image_filename = '${req.file.filename}';

    const food = new foodModel({
         
    })
};

export { addFood };