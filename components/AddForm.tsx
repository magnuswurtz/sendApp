import React, { useState, ChangeEvent } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    FieldArray,
  } from 'formik';

interface formValues {
    climber?:string;
    date:Date;
    routeName:string;
    section:string;
    area:string;
    country:string;
    grade:string;
    comments:string;
}

const AddForm = () => {
  const router = useRouter()

    return (
            <Formik initialValues={{date:new Date(),routeName:"",section:"",area:"",country:"",grade:"5A",comments:""}} onSubmit={async (
                values: formValues,
                { setSubmitting }: FormikHelpers<formValues>
              ) => {
                const response = await fetch("api/add",{method:'POST',headers: {'Content-Type': 'application/json;charset=utf-8'},body:JSON.stringify({climber:"CLIMBERNAME",...values})})
                console.log(response.text());
                setSubmitting(false);
                
                router.push("/statistics"); //redirect to statistics page
              }}>
                  {({ isSubmitting, values, setFieldValue }) => (
                <Form className="items-start m-3 flex flex-col border max-w-sm">
                    <div className="flex flex-col m-3">        
                        <label htmlFor="date">Date</label>
                        <DatePicker 
                            selected={values.date}
                            dateFormat="MMMM d, yyyy"
                            className="form-control border"
                            name="date"
                            onChange={date => setFieldValue('date', date)}
                            />
                    </div>

                    <div className="flex flex-col m-3">
                        <label htmlFor="routeName">Route name</label>
                        <Field className="border" id="routeName" name="routeName" placeholder="Sphongle"></Field>
                    </div>
                    <div className="flex flex-col m-3">
                        <label htmlFor="routeName">Place</label>
                        <Field className="border" id="section" name="section" placeholder="Section"></Field>
                        <Field className="border" id="area" name="area" placeholder="Area"></Field>
                        <Field className="border" id="country" name="country" placeholder="Country"></Field>
                    </div>
                    
                    
                    <div className="flex flex-col m-3">
                        <label htmlFor="grade">Grade</label>
                        <Field className="border"  as="select" name="grade">
                            <option value="5A">5A</option>
                            <option value="6A">6A</option>
                            <option value="7A">7A</option>
                        </Field>
                    </div>

                    <div className="flex flex-col m-3">
                        <label htmlFor="comments">Comments</label>
                        <Field className="border mb-3"  as="textarea" id="comments" name="comments" placeholder="some comments"></Field>
                    </div>
                    
                    <button className="btn-primary" type="submit">Add</button>
                </Form>
                  )}
            </Formik>
    )
  }
export default AddForm