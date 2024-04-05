
exports.checkLanguage = () => {
  return async (req, res, next) => {
    try {
      if(globalLanguages.find((element) => element.language == req.params.lang)){
        next();
      }else{
        return res.status(404).render("error");
      }
    } catch (error) {
      console.log('checkIP error: '+error)
    }
  }
}
