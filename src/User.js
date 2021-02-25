import React, { useState } from "react";

function User({ apiData }) {
  const [inputList, setInputList] = useState(apiData);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  return (
    <div>
      <form>
        {inputList.map((x, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                name="firstName"
                defaultValue={x.firstName}
                placeholder={x.firstName}
                onChange={(e) => handleInputChange(e, i)}
              />
              <br />
              <select
                name="attendance"
                defaultValue={x.attendance}
                onChange={(e) => handleInputChange(e, i)}
              >
                <option value="P">P</option>
                <option value="A">A</option>
              </select>
            </div>
          );
        })}
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            alert(JSON.stringify(inputList));
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default User;
