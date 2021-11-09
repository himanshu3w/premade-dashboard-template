import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
} from '@coreui/react'
import { DocsLink } from 'src/components'

const ChangePassword = () => {
  return (
    <>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputPassword1">Email Old Password</CFormLabel>
          <CFormInput type="password" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputEmail1">Enter New Password</CFormLabel>
          <CFormInput type="password" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputPassword1">Confirm New Password</CFormLabel>
          <CFormInput type="password" id="exampleInputPassword1" />
        </div>
        <CButton type="submit" color="primary">
          Submit
        </CButton>
      </CForm>
    </>
  )
}

export default ChangePassword
