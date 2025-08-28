import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h2>Cart Page</h2>
      <p>This is the Cart page.</p>
      <table
        border='1'
        cellPadding='8'
        style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Cart;
