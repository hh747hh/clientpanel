import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "13231",
        firstName: "Woo",
        lastName: "Yun",
        email: "hh747hh@gmail.com",
        phone: "111-222-3333",
        balance: "30"
      },
      {
        id: "342324",
        firstName: "Sarah",
        lastName: "Yun",
        email: "sarah@gmail.com",
        phone: "333-222-3333",
        balance: "500.432"
      }
    ];
    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-users mr-3" /> Clients
            </h2>
          </div>
          <div className="col-md-6">Total</div>
          <table className="table table-striped">
            <thead className="thread-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
    }
  }
}

export default Clients;
