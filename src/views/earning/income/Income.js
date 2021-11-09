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

const Income = () => {
  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Transaction Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Transaction Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Transaction ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>08 Nov, 2021</CTableDataCell>
            <CTableDataCell>ROI</CTableDataCell>
            <CTableDataCell>08NOV8452SS452XPW</CTableDataCell>
            <CTableDataCell>Roi Income For 8th November</CTableDataCell>
            <CTableDataCell>20 DSF Coin</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>07 Nov, 2021</CTableDataCell>
            <CTableDataCell>ROI</CTableDataCell>
            <CTableDataCell>08NOV84SWS45IWPQ</CTableDataCell>
            <CTableDataCell>Roi Income For 8th November</CTableDataCell>
            <CTableDataCell>20 DSF Coin</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>06 Nov, 2021</CTableDataCell>
            <CTableDataCell>ROI</CTableDataCell>
            <CTableDataCell>08NOV84WPSS452XPQ</CTableDataCell>
            <CTableDataCell>Roi Income For 8th November</CTableDataCell>
            <CTableDataCell>20 DSF Coin</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default Income
