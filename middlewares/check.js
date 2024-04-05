
exports.check = () => {
  return async (req, res, next) => {
    try {
      // control stuff
      let success = true;
      if(success){
        next();
      }else{
        res.status(418).send("go-home-yankee");
      }
    } catch (error) {
      console.log('checkIP error: '+error)
    } 
  }
}
