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

const WithdrawHistory = () => {
  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Withdrawal Taken</CTableHeaderCell>
            <CTableHeaderCell scope="col">Deductions</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount Paid</CTableHeaderCell>
            <CTableHeaderCell scope="col">Payment Mode</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Transaction Number</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>08 Nov, 2021</CTableDataCell>
            <CTableDataCell>1000 DSF Coin</CTableDataCell>
            <CTableDataCell>10 DSF Coin</CTableDataCell>
            <CTableDataCell>990 DSF Coin</CTableDataCell>
            <CTableDataCell>ETH </CTableDataCell>
            <CTableDataCell className="text-danger">Pending</CTableDataCell>
            <CTableDataCell>DSF-8545WZGGHSI5</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>07 Nov, 2021</CTableDataCell>
            <CTableDataCell>100 DSF Coin</CTableDataCell>
            <CTableDataCell>10 DSF Coin</CTableDataCell>
            <CTableDataCell>90 DSF Coin</CTableDataCell>
            <CTableDataCell>ETH </CTableDataCell>
            <CTableDataCell className="text-success">Paid</CTableDataCell>
            <CTableDataCell>DSF-8545WZ854sHSI5</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default WithdrawHistory
