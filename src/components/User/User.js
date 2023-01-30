import {Users} from "../Users/Users";

const User = (props) => {
    const {id, name, username} = props

  return (
      <div>
       <div>User id: {user.id}</div>
          <div>User name: {user.name}</div>
          <div>Username: {user.username}</div>
      </div>
  );
};

export {User};