const Listing=require("./models/listing");
const Review=require("./models/review.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema}=require("./schema.js");
const {reviewSchema}=require("./schema.js");

module.exports.validateListing=(req,res,next)=>{
    let{error}=listingSchema.validate(req.body);
    if(error){
        let newMsg=error.details.map((el)=>el.message);
        next(new ExpressError(400,newMsg));
    }
    else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
    let{error}=reviewSchema.validate(req.body);
    if(error){
        let newMsg=error.details.map((el)=>el.message);
        throw new ExpressError(400,newMsg);
    }
    else{
        next()
    }
};


module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
   let{id}=req.params;
   let listing=await Listing.findById(id);
   if(!listing.owner.equals(res.locals.currUser._id)){
    req.flash("error","you are not the owner of the listing");
    return res.redirect(`/listings/${id}`)
   };
   next()
}

module.exports.isAuthor=async(req,res,next)=>{
   let{id,reviewId}=req.params;
   let review=await Review.findById(reviewId);
   if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","you are not the author of the review");
    return res.redirect(`/listings/${id}`);
   }
   next();
}