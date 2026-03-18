import dynamo from "../config/dynamo.js";
import bcrypt from "bcryptjs";

const TABLE = process.env.DYNAMO_TABLE;

// ✅ SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await dynamo.get({
      TableName: TABLE,
      Key: { email }
    }).promise();

    if (existingUser.Item) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    await dynamo.put({
      TableName: TABLE,
      Item: {
        email,
        name,
        password: hashedPassword
      }
    }).promise();

    res.json({ message: "Signup successful" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ✅ LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await dynamo.get({
      TableName: TABLE,
      Key: { email }
    }).promise();

    if (!user.Item) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.Item.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      user: {
        name: user.Item.name,
        email: user.Item.email
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};