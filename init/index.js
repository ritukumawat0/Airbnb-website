const mongoose=require("mongoose");
const url="mongodb://127.0.0.1:27017/wander";
const Listing=require("../models/listing");
let initData=require("./data");

main().then(()=>console.log("successfully connected")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect(url);
};

const initDb=async function data(){
    await Listing.deleteMany({});
    initData=initData.map((obj)=>({...obj,owner:'66cfde12bf2e92f2733d6087'}));
    await Listing.insertMany(initData);
    console.log("data was initialized");
};

initDb();