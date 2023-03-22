import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikError } from "formik";

export const Form = styled(FormikForm)`
    width: 400px;
    padding: 8px;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 12px;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 600;
`;

export const ErrorMessage = styled(FormikError)`
    color: tomato;
`

export const SubmitBtn = styled.button`
    width: 200px;
    border-radius: 8px;
    border: 1px solid black;
    padding: 5px;
    font-size: 15px;
    font-weight: 600;
    background-color: white;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;

    :hover {
        background-color: tomato;
    }
`