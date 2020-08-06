import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const apiUrl = "https://reqres.in/api/users?per_page=12";

const PeoplePage = () => {
  const [employee, setEmployee] = useState([]);
  const [addValue, setAddValue] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setEmployee(jsonResponse.data);
      });
  }, []);

  const changeAdd = () => {
    employee.push({ first_name: addValue, id: employee.length + 1 });
    setEmployee([...employee]);
  };

  const removeItem = (id) => {
    let newemployee = employee.filter((el) => el.id !== id);
    setEmployee([...newemployee]);
  };

  return (
    <div className="employees">
      <div>
        {employee.map((el) => (
          <div className="employee">
            <p key={el.id}>
              {el.first_name} {el.last_name}
            </p>
            <div className="remove" onClick={() => removeItem(el.id)}>
              {" "}
              x{" "}
            </div>
          </div>
        ))}
      </div>

      <InputGroup
        className=""
        // value={searchValue}
        onChange={(e) => setAddValue(e.target.value)}
        type="text"
      >
        <FormControl
          aria-describedby="basic-addon2"
          placeholder="Add employee"
        />
        <InputGroup.Append>
          <Button onClick={changeAdd} type="submit">
            ADD
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default withRouter(PeoplePage);
