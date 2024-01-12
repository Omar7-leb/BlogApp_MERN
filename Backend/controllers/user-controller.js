import User from "../model/User.js";
import bcrypt from 'bcryptjs';

export const getAllUser = async(req,res,next)=>
{
    let users;

    try
    {
        users = await User.find();
    }
    catch(err)
    {
        console.log(err)
    }
    if(!users) {
        return res.status(404).json({
            message : "No user found"
        })
    }
    return res.status(200).json({
        users 
    });
};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }

    if (existingUser) {
        return res.status(400).json({
            status: 400,
            message: "User already exists"
        });
    }
    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[],
    });

    

    try {
        await user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }

    return res.status(201).json({
        user
    });
};

export const login = async(req,res,next)=>{
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }

    if (!existingUser) {
        return res.status(400).json({
            status: 404,
            message: "Couldn't find User By this Email"
        });
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect) {
        return res.status(400).json({
            message: "Invalid Password"
        });
    }
    return res.status(200).json({
            message:"Login Successfull",
            user : existingUser
        });
}