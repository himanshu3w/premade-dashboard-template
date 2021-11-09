import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormCheck,
  CCol,
  CButton,
  CFormTextarea,
  CFormInput,
} from '@coreui/react'
import { DocsLink } from 'src/components'

const Support = () => {
  return (
    <>
      <h1>Raise A Ticket</h1>
      <CForm className="row g-3">
        <CCol md={8}>
          <h6 className="text-info">We R Happy To Help U</h6>

          <CFormLabel htmlFor="inputState">Choose Your Concern :</CFormLabel>
          <CFormSelect id="inputState">
            <option>Accounts Department</option>
            <option>Investment Issue</option>
            <option>Withdrawal Issue</option>
            <option>Others</option>
          </CFormSelect>
        </CCol>
        <CCol md={8}></CCol>
        <CCol md={8}>
          <CFormLabel htmlFor="inputEmail4">Enter Amount To Withdraw</CFormLabel>
          <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
        </CCol>
        <CCol xs={12}>
          <CButton type="submit">Submit Ticket</CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default Support
