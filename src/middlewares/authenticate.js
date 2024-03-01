import passport from 'passport';
 
export const authenticate = (req,res,next) => {
    passport.authenticate('jwt', (err,user)=>{
        if(err) next(err);
        if(!user) {
            return res.status(401).json({
                message: 'unauthorised access no token'
            })
        }
        req.user = user; //we will not get user id from body since sensitive data hence from json web token we will extrcat user id 
        next();
    })(req,res,next); //authenticate gives function itself that we need to solve
}