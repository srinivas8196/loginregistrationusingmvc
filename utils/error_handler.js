const errorhandler = (error,res)=>{
    console.log("error");
    res.status(error.status||400);
    res.json({
        message: error.message
    })
}


module.exports=errorhandler