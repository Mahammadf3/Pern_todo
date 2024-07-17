import React from 'react';
import { Formik, Form, Field} from 'formik';

function InputTodo({ onAddTodo }) {
    const initialValues = {
        name: '',
    };

    return (
        <div className="flex flex-col justify-center items-center w-full mb-[20px]">
            <h1 className="text-[24px] text-green-500">Todo</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onAddTodo}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-row justify-center ">
                        <Field 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter your Description" 
                            className="border-[2px] h-[30px] mt-4" 
                        />
                        <button type="submit" disabled={isSubmitting} className="mt-4 bg-green-500 text-white  px-4 rounded">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default InputTodo;
