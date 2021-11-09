import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormText,
  CFormInput,
  CFormCheck,
  CButton,
} from '@coreui/react'
import { DocsLink } from 'src/components'

const ChangeEmail = () => {
  return (
    <>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputEmail1">Enter New Email</CFormLabel>
          <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputPassword1">Email Your Password</CFormLabel>
          <CFormInput type="password" id="exampleInputPassword1" />
        </div>
        <CButton type="submit" color="primary">
          Submit
        </CButton>
      </CForm>
    </>
  )
}

export default ChangeEmail
