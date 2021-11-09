import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import { DocsLink } from 'src/components'

const MyInvestment = () => {
  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Slab</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount Invested</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>01 Nov, 2021</CTableDataCell>
            <CTableDataCell>Slab 1</CTableDataCell>
            <CTableDataCell>200 DSF Coin</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>01 Nov, 2021</CTableDataCell>
            <CTableDataCell>Slab 2</CTableDataCell>
            <CTableDataCell>2500 DSF Coin</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>01 Nov, 2021</CTableDataCell>
            <CTableDataCell>Slab 1</CTableDataCell>
            <CTableDataCell>700 DSF Coin</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default MyInvestment
