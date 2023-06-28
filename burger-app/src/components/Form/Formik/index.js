import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";

const Basic = ({ clearAll, setModalActive}) => (
  <div>
    <Formik
      initialValues={{ email: "", name: "", adress: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Enter your email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.name) {
          errors.name = "Enter your name";
        }
        if (!values.adress) {
          errors.adress = "Enter your adress";
        }
        return errors;
      }}
      onSubmit={() => {
        setTimeout(() => {
          alert("Successfully");
          setModalActive(false);
          clearAll()
        }, 1500);
      }} 
    >
      {({ isSubmitting }) => (
        <Form className="input-form">
          <Field
            size="small"
            color="success"
            type="name"
            name="name"
            placeholder="Enter name"
            style={{ margingTop: "20px", width: "90%" }}
          />
          <ErrorMessage name="name" component="div" />

          <Field
            size="small"
            color="success"
            type="adress"
            name="adress"
            placeholder="Enter adress"
            style={{ marginTop: "20px", width: "90%" }}
          />
          <ErrorMessage name="adress" component="div" />

          <Field
            size="small"
            color="success"
            type="email"
            name="email"
            placeholder="Enter email"
            style={{ marginTop: "20px", width: "90%" }}
          />
          <ErrorMessage name="email" component="div" />

          <Button
            variant="outlined"
            color="inherit"
            type="submit"
            style={{ marginTop: "30px" }}
            disabled={isSubmitting}
          >
            Confirm
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
