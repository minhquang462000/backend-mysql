import axios from "axios";
import React from "react";

const UserComponent = () => {
  const [user, setUser] = React.useState([]);
  const fetchUser = async () => {
    const dataRespone = await axios.get("http://localhost:8080/api/v1/users");
    //    const response = await dataRespone
    //     const data = await response.json()
    setUser(dataRespone.data.data);
    console.log(dataRespone);
  };
  React.useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {user.length > 0 &&
        user.map((user, index) => <div key={index}>{user.user_name}</div>)}
    </div>
  );
};

export default UserComponent;
