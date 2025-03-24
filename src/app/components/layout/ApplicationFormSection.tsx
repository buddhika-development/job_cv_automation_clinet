import React from 'react'
import ApplicationFormAction from '@/Actions/ApplicationFormAction'
import Form from 'next/form'

const ApplicationFormSection = () => {
  return (
    <div>    
      <Form action={ApplicationFormAction}>

        {/* applicant full name input */}
        <div className="input-section">
          <label htmlFor="applicant-name">Full Name</label>
          <input type="text" name='applicant-name' />
        </div>

        {/* applicant email address */}
        <div className="input-section">
          <label htmlFor="applicant-email">Email Address</label>
          <input type="email" name='applicant-email' placeholder='example@example.com'/>
        </div>

        {/* applicant contact number */}
        <div className="input-section">
          <label htmlFor="applicant-contact">Contact Number</label>
          <input type="text" name='applicant-contact' placeholder='07----------' />
        </div>

        {/* applicant resume */}
        <div className="input-section">
          <label htmlFor="applicant-cv">Resume | CV</label>
          <input type="file" name='applicant-cv' />
        </div>

        <input type="submit" value="Apply"  className='submit-btn'/>
        
      </Form>
    </div>
  )
}

export default ApplicationFormSection