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
      <CCard className="mb-4">
        <div className="card-header text-center">Coming Soon [Settings -&gt; Change Email]</div>
      </CCard>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
          <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <CFormText id="emailHelp">Well never share your email with anyone else.</CFormText>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
          <CFormInput type="password" id="exampleInputPassword1" />
        </div>
        <CFormCheck
          className="mb-3"
          label="Check me out"
          onChange={(e) => {
            console.log(e.target)
          }}
        />
        <CButton type="submit" color="primary">
          Submit
        </CButton>
      </CForm>
    </>
  )
}

export default ChangeEmail
