import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function AddPages() {
  const [table, setTable] = useState([]);
  const navigate = useNavigate()
  function handleAdd(val) {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/")
  }

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }
  function Delete(id) {
    fetch("http://localhost:3000/"+id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {getAll()});
  }
  return (
    <div className="addPages">
      
        <Helmet>
          <title>Add Pages</title>
        </Helmet>
      
      <Formik
        initialValues={{ image: "", name: "", author: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          author: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image"> Image </label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="author">Author</label>
          <Field name="author" type="text" />
          <ErrorMessage name="author" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {table.map((x) => (
        <table key={x._id}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>
              {" "}
              <img src={x.image} />
            </td>
            <td>{x.name}</td>
            <td>{x.author}</td>
            <td>
              <button onClick={() => Delete(x._id)} className="btn">
                Delete
              </button>
            </td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default AddPages;
