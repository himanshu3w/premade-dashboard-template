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
  CFormInput,
} from '@coreui/react'
import { DocsLink } from 'src/components'

const Edit = () => {
  return (
    <>
      <CForm className="row g-3">
        <CCol md={4}>
          <CFormLabel htmlFor="inputEmail4">UserID</CFormLabel>
          <CFormInput type="text" id="inputEmail4" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputPassword4">Email</CFormLabel>
          <CFormInput type="text" id="inputPassword4" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputEmail4">Mobile</CFormLabel>
          <CFormInput type="text" id="inputEmail4" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputPassword4">First Name</CFormLabel>
          <CFormInput type="text" id="inputPassword4" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputEmail4">Last Name</CFormLabel>
          <CFormInput type="text" id="inputEmail4" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputPassword4">Date Of Joining</CFormLabel>
          <CFormInput type="text" id="inputPassword4" />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="inputEmail4">Sponsor ID</CFormLabel>
          <CFormInput type="text" id="inputEmail4" />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="inputPassword4">Sponsor Name</CFormLabel>
          <CFormInput type="text" id="inputPassword4" />
        </CCol>
        <CCol xs={12}>
          <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
          <CFormInput id="inputAddress" placeholder="1234 Main St" />
        </CCol>
        <CCol xs={12}>
          <CFormLabel htmlFor="inputAddress2">Address 2</CFormLabel>
          <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="inputCity">City</CFormLabel>
          <CFormInput id="inputCity" />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputState">State</CFormLabel>
          <CFormSelect id="inputState">
            <option>Choose...</option>
            <option>...</option>
          </CFormSelect>
        </CCol>
        <CCol md={2}>
          <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
          <CFormInput id="inputZip" />
        </CCol>
        <CCol xs={12}>
          <CButton type="submit">Update</CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default Edit
