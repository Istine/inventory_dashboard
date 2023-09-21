import Textbox from "@/components/input/Textbox";
import { InputTypes } from "@/components/input/types";
import React from "react";
import Button from "../button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Buttontypes } from "../button/types";

type FormType = {
  username: string;
  password: string;
};

const defaultValues: FormType = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().min(3).max(10).required("Required"),
  password: Yup.string().min(3).max(10).required("Required"),
});

export default function Login() {
  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValidating, dirty, isValid }) => (
        <Form className="w-1/4">
          <Textbox
            name="username"
            type={InputTypes.TEXT}
            placeholder="username"
            label="username"
            autoFocus
            css={{
              inputElement: "focus:border-black",
            }}
          />
          <Textbox
            name="password"
            type={InputTypes.PASSWORD}
            autoFocus
            placeholder="password"
            label="password"
            css={{
              inputElement: "focus:border-black",
            }}
          />
          <Button
            type={Buttontypes.SUBMIT}
            text="login"
            loading={isSubmitting}
            disabled={!isValid}
          />
        </Form>
      )}
    </Formik>
  );
}
