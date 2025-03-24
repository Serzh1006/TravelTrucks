import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as yup from "yup";
import iziToast from "izitoast";
import css from "./subscribe.module.css";

const Subscribe = () => {
  const nameID = useId();
  const emailID = useId();
  const dateID = useId();
  const commentID = useId();

  const initialValues = {
    username: "",
    email: "",
    date: "",
    comment: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup.string().email().required("Required"),
    date: yup.date().required(),
  });

  const handleSubmit = (_, actions) => {
    iziToast.success({
      title: "OK",
      message: "The reservation was successful!",
      position: "topRight",
    });
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h3 className={css.titleForm}>Book your campervan now</h3>
      <p className={css.textForm}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.inputForm}
            type="text"
            name="username"
            id={nameID}
            autoComplete="off"
            placeholder="Name*"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="username"
            component="div"
          />
          <Field
            className={css.inputForm}
            type="email"
            name="email"
            id={emailID}
            autoComplete="off"
            placeholder="Email*"
          />
          <ErrorMessage
            className={css.errorMessage2}
            name="email"
            component="span"
          />
          <Field
            className={css.inputForm}
            type="date"
            name="date"
            id={dateID}
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorMessage3}
            name="date"
            component="span"
          />
          <Field
            className={css.inputFormComment}
            as="textarea"
            name="comment"
            rows={50}
            id={commentID}
            autoComplete="off"
            placeholder="Comment"
          />

          <button className={css.addBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Subscribe;
