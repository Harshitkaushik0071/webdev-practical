import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { user, setUser } = useContext(UserContext);

    function updateUser() {
        setUser({
            name: "Harshit",
            role: "React Developer",
        });
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>

            <button onClick={updateUser}>
                Update User
            </button>
        </div>
    );
}

export default Profile;