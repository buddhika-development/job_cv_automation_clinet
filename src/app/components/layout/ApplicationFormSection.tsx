"use client"

import React, { useActionState } from 'react'
import ApplicationFormAction from '@/Actions/ApplicationFormAction'
import { ApplicantFormResponse } from '@/types/ApplicationFormTypes'
import {Spinner} from "@heroui/spinner";

const ApplicationFormSection = () => {

  const initialState : ApplicantFormResponse = {
    success : false,
    message : ''
  }

  const [state, formSubmitssionAction, isLoading] = useActionState(ApplicationFormAction,initialState,)
   
  return (
    <div>    
      <form action={formSubmitssionAction}>

        {/* applicant full name input */}
        <div className="input-section">
          <label htmlFor="applicantName">Full Name</label>
          <input type="text" name='applicantName' />
        </div>

        {/* applicant email address */}
        <div className="input-section">
          <label htmlFor="applicantEmail">Email Address</label>
          <input type="email" name='applicantEmail' placeholder='example@example.com'/>
          {
            state?.error?.applicantEmail && (
              <p className='error-message'>{state.error.applicantEmail}</p>
            )
          }
        </div>

        {/* applicant contact number */}
        <div className="input-section">
          <label htmlFor="applicantContact">Contact Number</label>
          <input type="text" name='applicantContact' placeholder='07----------' />
          {
            state?.error?.applicantContact && (
              <p className='error-message'>{state.error.applicantContact}</p>
            )
          }
        </div>

        {/* applicant resume */}
        <div className="input-section">
          <label htmlFor="applicantCv">Resume | CV</label>
          <input type="file" name='applicantCv' />
        </div>

        <button
          type='submit'
          className='submit-btn'
        >{
          isLoading ? (
            <p>processing....</p>
          )
          :(
            <p>Apply</p>
          )
        }</button>
        
      </form>

      {/* success message section */}
      {
        state?.success && (
          <p className='success-message-section'>{state.message}</p>
        )
      }

      {/* error message section */}
      {
        state?.error &&(
          <p className='error-message-section'>{state.message}</p>
        )
      }
      
    </div>
  )
}

export default ApplicationFormSection