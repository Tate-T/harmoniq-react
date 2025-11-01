import { Component } from "react";

class UserList extends Component {
    state = {
        users: [
            { id: 1, username: "Naomi", email: "Naomi@gmail.com", password: "Naomi1234" },
            { id: 2, username: "Andrii", email: "Andrii@gmail.com", password: "Andrii1234" },
            { id: 3, username: "Emma", email: "Emma@gmail.com", password: "Emma1234" },
            { id: 4, username: "Max", email: "Max@gmail.com", password: "Max1234" },
            { id: 5, username: "Tony", email: "Tony@gmail.com", password: "Tony1234" },
            { id: 6, username: "Tailor", email: "Tailor@gmail.com", password: "Tailor1234" }
        ]
    }
}
export default UserList;