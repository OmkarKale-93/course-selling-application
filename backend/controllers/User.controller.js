import User from "../Models/Users.Model.js";

const userRegister = async (req,res) => {
    try{
        const {firstname, lastname, email, password} = req.body;

        if (!firstname  || !email || !password){
            return res.status(400).json({
                message: "Please provide all the required fields"
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User already exists"

            });
        }
        const newUser = new User({
            firstname,
            lastname,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully",            
            user: newUser
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}




const userLogin = async(req,res) =>{
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({
            message: "Please provide email and password"
        })
    }

    const user = await User.findOne({email});

    if (!user){
        return res.status(400).json({
            message: 'User not found'
            })
         }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch){
        return res.status(400).json({
            message: 'Invalid password'
        })
    }

    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        user: user
    });



}

const updatePassword = async (req, res) =>{
    try{
        const {email, newPassword, confirmPassword} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({
                message: "User not found"
            })
        }
        if (newPassword !== confirmPassword){
            return res.status(400).json({
                message: "Passwords do not match"
                })
                }
        user.password = newPassword;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Password updated successfully",
            user: user
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}
 

export {userRegister, userLogin, updatePassword};