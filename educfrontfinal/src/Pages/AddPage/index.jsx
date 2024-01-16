import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './style.scss'
import { featuresDelete, featuresPost } from "../../helpers/featuresCrud";
const AddPage = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
     fetch("http://localhost:3000")
     .then(res=>res.json())
     .then(data=>setApi(data))
    }, [])
    
  return (
    <section className="addpage">
      <div className="addpage__container">
        <div className="addpage__container__formik">
          <Formik
            initialValues={{ icon: "", title: "", text: "" }}
            validationSchema={Yup.object({
              icon: Yup.string().required("Required"),
              title: Yup.string().required("Required"),
              text: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                featuresPost(values)
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div>
                <label htmlFor="icon">Icon Class</label>
                <Field name="icon" type="text" />
                <ErrorMessage name="icon" />
              </div>
              <div>
                <label htmlFor="title">Title</label>
                <Field name="title" type="text" />
                <ErrorMessage name="title" />
              </div>
            <div>
            <label htmlFor="text">Text</label>
              <Field name="text" type="text" />
              <ErrorMessage name="text" />
            </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="addpage__container__table">
            <table>
                <thead>
                    <th>Icon</th>
                    <th>Title</th>
                    <th>Text</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {api.map((x)=>{
                        return(
                            <tr key={x._key}> 
                            <td><i className={x.icon}></i></td>
                            <td>{x.title}</td>
                            <td>{x.text.slice(0,11)}</td>
                            <td><button onClick={()=>featuresDelete(x._id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
