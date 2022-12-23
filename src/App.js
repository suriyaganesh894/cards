import React, { useState } from "react";

const Form = () => {
  const [data, setdata] = useState({ name: "", email: "", phone: "", url: "" });
  const [input, updateddata] = useState([]);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = () => {
    const newlist = input;
    //newlist.unshift({name : data.name,email:data.email,phn:data.phn,url:data.url})
    newlist.unshift({
      name: data.name,
      email: data.email,
      phone: data.phone,
      url: data.url
    });
    updateddata([...newlist]);
    console.log(data);
  };

  const deleteData = (i) => {
    const newlist = input;
    newlist.splice(i, 1);
    updateddata([...newlist]);
  };
  return (
    <div>
      <div>
        <label>Name:</label>
        <input name="name" onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input name="email" onChange={handleChange} />
        <br />
        <label>Phone:</label>
        <input name="phone" onChange={handleChange} />
        <br />
        <label>url:</label>
        <input name="url" onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Post</button>
      </div>
      <div>
        {input.map((info, ind) => {
          return (
            <div className="box2">
              <div
                key={ind}
                style={{
                  width: 250,
                  height: 250,
                  backgroundColor: "powderblue"
                }}
              >
                <div style={{ paddingTop: "20px" }}>
                  <img src={info.url} alt="profile" />
                  <br />
                  <div>
                    <label>
                      name: {info.name}
                      <br />{" "}
                    </label>
                    <label>
                      email: {info.email}
                      <br />{" "}
                    </label>
                    <label>
                      contact number: {info.phone}
                      <br />{" "}
                    </label>
                  </div>
                  <button onClick={() => deleteData(ind)}>delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
