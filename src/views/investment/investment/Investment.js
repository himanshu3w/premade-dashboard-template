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

const Investment = () => {
  return (
    <>
      <h1>Thanks For Choosing Us</h1>
      <CForm className="row g-3">
        <CCol md={4}>
          {/* <h6 className="text-success">Wallet Balance : 1000 DSF Coin</h6> */}

          <CFormLabel htmlFor="inputState">Choose Investment Slab</CFormLabel>
          <CFormSelect id="inputState">
            <option>Slab 1 : 100x</option>
            <option>Slab 2 : 500x</option>
            <option>Slab 3 : 1000x</option>
            <option>Slab 4 : 5000x</option>
            <option>Slab 5 : 10000x</option>
          </CFormSelect>
        </CCol>
        <CCol md={8}></CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputEmail4">Enter Amount To Invest</CFormLabel>
          <CFormInput type="text" id="inputEmail4" />
        </CCol>
        <CCol xs={12}>
          <CButton type="submit">Pay Now</CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default Investment
