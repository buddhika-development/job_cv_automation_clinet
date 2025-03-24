export interface ApplicantForm {
    applicantName : string,
    applicantContact : string,
    applicantEmail : string,
    applicantCv : File
}

export interface ApplicantFormResponse {
    success : boolean,
    message ?: string,
    error?: {
        applicantEmail ?: string,
        applicantContact ?: string
    }
}