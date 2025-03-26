import User from "../models/User.js";

// get user data 

export const getUserData = async (req, res) => {
    try {
        const userId = req.auth?.userId
         console.log("Extracted userId:", userId);
        const user = await User.findById(userId);

         if (!userId) {
           return res
             .status(400)
             .json({ success: false, message: "User ID is missing" });
         }

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }


        res.json({ success: true, user });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// user enrolled courses with lecture links

export const userEnrolledCourses = async (req, res) => {
    try{
        const userId = req.auth.userId;
        const userData = await User.findById(userId).populate('enrolledCourses')
        
        res.json({success: true, enrolledCourses: userData.enrolledCourses});
    }catch(error){
        res.json({success: false, message: error.message});
    }

}