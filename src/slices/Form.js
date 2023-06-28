import React from "react";
import { FormWrapper } from './/Form.styled.js'
import { useForm } from '@formspree/react'

export const Form = (props) => {
    console.log('form props ', props)
    const [state, handleSubmit] = useForm(props.slice.primary.form_endpoint);

    if(state.succeeded){
        return<h2>thank you for submitting</h2>
    }

    return(
        <FormWrapper onSubmit={handleSubmit}>
            {props.slice.items.map((item, i )=>{
                if(item.imput_type === 'textarea'){
                    return <div key={i}><textarea required={item.is_required} placeholder={item.placeholder} name={item.placeholder}></textarea></div>
                }
                else{
                    return <div key={i}><input required={item.is_required} name={item.placeholder} placeholder={item.placeholder} type={item.imput_type}/></div>
                }
            })}
            <button type="submit" disabled={state.submitting}>submit</button>
        </FormWrapper>
    )
}