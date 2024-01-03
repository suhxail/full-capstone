const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const SECRET_KEY = config.SECRET_KEY;



const userController = {
    signup: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // check if the user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'User already exists' })
            }

            // if user exists for the first time, then hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            // save the user
            await newUser.save();
            res.status(201).json({ message: 'User created successfully' });

        }
        catch (error) {
            console.error('Error signing up user', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getUserList: async (req, res) => {
        try {
            const userList = await User.find({}, 'name email')
            res.json(userList)
        } catch (error) {
            console.error('Error getting user List', error);
            res.status(500).json({ message: 'Internal server error' })
        }
    },

    signin: async (req, res) => {
        try {
            const { email, password } = req.body

            // find the user by userId
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).json({ message: 'Authentication failed1' })
            }

            // compare passwords
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: 'Authentication failed2', status: 0 })
            }

            // if the email and password are correct,then generate and send the JWT token
            const token = jwt.sign({ userId: user._id }, config.SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            console.error('Error signing in user', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getProfile: async (req, res) => {
        try {
            console.log("abc")
            const userId = req.userId;
            const user = await User.findById(userId, 'name email');
            res.json(user);
            console.log("user1", user)
        } catch (error) {
            console.error('Error getting user profile', error);
            res.status(500).json({ message: 'Internal server error' })
        }
    },

    editProfile: async (req, res) => {
        try {
            const userId = req.userId;
            const { name, email } = req.body;
            if (!name && !email) {
                return res.status(400).json({ message: "Name and Email cannot be empty" })
            }
            const user = await User.findByIdAndUpdate(
                userId,
                { name, email, updatedAt: Date.now() },
                { new: true }
            );
            res.json({ message: 'Profile updated successfully' });
        } catch (error) {
            console.error('Error updating user profile', error);
            res.status(500).json({ message: 'Internal server error' })
        }
    },

    deleteProfile: async (req, res) => {
        try {
            const userId = req.userId;
            await User.findByIdAndDelete(userId);
            res.json({ message: 'Profile deleted successfully' });
        } catch (error) {
            console.error('Error deleting user profile');
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}
module.exports = userController;