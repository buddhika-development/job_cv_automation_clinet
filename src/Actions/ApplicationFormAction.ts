import { ApplicantForm, ApplicantFormResponse } from "@/types/ApplicationFormTypes"


// function related to check email valiation
const EmailValidation = (email : string) : boolean => {

    // regular expression | regex realted to email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
}

// function related to check validity about phone number
const PhoneNumberValidation = (phone_number : string) => {

    // regular expression | regex relate to phon number validation
    const sriLankaPhoneRegex = /^0[7][0-2,5-8][0-9]{7}$/;
    return sriLankaPhoneRegex.test(phone_number)
}



const ApplicationFormAction = async (
    prevState: ApplicantFormResponse | null, 
    formData: FormData
): Promise<ApplicantFormResponse> => {


    try {
        const formRawData: ApplicantForm = {
            applicantName: formData.get('applicantName') as string,
            applicantEmail: formData.get('applicantEmail') as string,
            applicantContact: formData.get('applicantContact') as string,
            applicantCv: formData.get('applicantCv') as File
        };

        // Add validation if needed
        if (!formRawData.applicantName || !formRawData.applicantEmail || 
            !formRawData.applicantContact || !formRawData.applicantCv) {
            return {
                success: false,
                message: 'Missing required fields'
            };
        }

        // validate the email address
        if (!EmailValidation(formRawData.applicantEmail)) {
            return {
                success : false,
                message : "Please enter valid details...",
                error : {
                    applicantEmail : 'Please enter valid email'
                }
            }
        }

        // validate the phone number
        if (!PhoneNumberValidation(formRawData.applicantContact)) {
            return {
                success : false,
                message : "Please enter valid details",
                error : {
                    applicantContact : 'Please enter valid phone number.'
                }
            }
        }


        
        return {
            success: true,
            message: 'Form submitted successfully'
        };
    } catch (err) {
        return {
            success: false,
            message: 'Something unexpected occurred'
        };
    }
}

export default ApplicationFormAction;