import express from 'express';
import * as dataService from "../services/dataService.js"

const router = express.Router();


//============================================
//           get csv file data (GET)
//============================================
router.get("/", async (req, res, next)=>{   

    try{
        const result = await dataService.getCsvFile();
        return res.status(200).json({data : result.slice(0, 50)});

    }catch(error){
        next(error);
    }
})


//============================================
//          add score to json (POST) 
//============================================
router.post("/", async (req, res, next)=>{   

    try{
        const {score} = req.body;
        const updatedScore = await dataService.updateScore(score);
        return res.status(200).json({message : "score updated successfully.", score : updatedScore});

    }catch(error){
        next(error);
    }

})

export default router;