import User from "../Models/userModel.js";

export const getUserForSidebar = async (req, res) => {
	try {
		const currUser = req.user._id;
		const filteredUsers = await User.find({ _id: { $ne: currUser } }).select("-password");
		res.status(200).json(filteredUsers);
	} 
    catch (err) {
		console.error("Error in getUsersForSidebar: ", err.message);
		res.status(500).json({ error: "Internal server error!" });
	}
};