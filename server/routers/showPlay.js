import express from "express";
import PlayInfo from "../models/playInfo";

const router = express.Router();

router.get('/showPlay', (req, res, next)=> {
    PlayInfo.find({}, (err, data)=> {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});

router.post('/addPlay', (req, res, next)=> {
    const playInfo = new PlayInfo(req.body);
    PlayInfo.findOne({playName: playInfo.playName},(err, result)=> {
        if (!result) {
            playInfo.save((err,addPlayInfo)=>{
               if(!err){
                   res.send({addResult:true,addPlayInfo});
               }
               else {
                   res.send({addResult:false});
               }
            })
        }
        else {
            res.send({addResult:false});
        }
    })
})


module.exports = router;