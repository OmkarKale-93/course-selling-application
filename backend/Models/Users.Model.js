import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    
}, {timestamps: true});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    try{
    this.password = await bcrypt.hash(this.password, 10);
    next();
    }
    catch(err){
        console.log(err);
        }

})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;

