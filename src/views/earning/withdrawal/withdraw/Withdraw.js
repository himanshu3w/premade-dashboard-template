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

const Withdraw = () => {
  return (
    <>
      <h1>Withdraw Money</h1>
      <CForm className="row g-3">
        <CCol md={4}>
          <h6 className="text-success">Wallet Balance : 1000 DSF Coin</h6>

          <CFormLabel htmlFor="inputState">Choose Payment Method</CFormLabel>
          <CFormSelect id="inputState">
            <option>BTC wallet</option>
            <option>ETH wallet</option>
            <option>XRP wallet</option>
            <option>DSF wallet</option>
          </CFormSelect>
        </CCol>
        <CCol md={8}></CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputEmail4">Enter Amount To Withdraw</CFormLabel>
          <CFormInput type="text" id="inputEmail4" />
        </CCol>
        <CCol xs={12}>
          <CButton type="submit">Withdraw Now</CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default Withdraw
