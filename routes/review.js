const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing");
const {validateReview,isLoggedIn,isAuthor}=require("../middleware.js");

const reviewController=require("../controllers/reviews.js");

//reviews post request
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//reviews delete request
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview))

module.exports=router;
