import { response } from "express";
import mealsModel from "../Model/mealsModel.js";

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: '/createMeals'
 */


export const createMeals = (req, res) => {
    const{
        mealsImage ="",
        mealsName ="",
        mealsVideo= ""
    } = req.body;
    const Meals = new mealsModel({
        mealsImage,
        mealsName,
        mealsVideo
    })
    Meals.save()
    .then((response) => {
        if(response._id){
            return res.status(200).json({
                message: "Atlas, Meals created successfully",
                meals: response
            });
        }
        else{
            return res.status(400).json({
                message: "Atlas, couldn't create meals",
                error: response
            });
        }
    })
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: '/getAllMeals'
 */

export const getAllMeals = (req, res) => {
     mealsModel.find()
     .then((response) => {
        if(response.length > 0){
            return res.status(200).json({
                message: "Atlas, meals fetched successfully",
                data: response
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, meals couldn't fetched ",
                data: response
            });
        }
     })
     .catch((error) => {
        return res.status(400).json({
            message: error.message
        });
     })
}