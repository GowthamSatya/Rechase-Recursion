import { users } from "../../helpers/users";

export default function UserData(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { name, username, email, mobile } = req.body;
    const user = {
      id: users.length + 1,
      name,
      username,
      email,
      mobile,
    };
    users.push(user);
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  }
}
