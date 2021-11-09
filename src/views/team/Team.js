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

const Team = () => {
  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Full Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Joining Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Activation Date</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>dblockchainers</CTableDataCell>
            <CTableDataCell>D Block Chainers</CTableDataCell>
            <CTableDataCell>9999999999</CTableDataCell>
            <CTableDataCell>support@dblockchainers.com</CTableDataCell>
            <CTableDataCell>08 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>kunal</CTableDataCell>
            <CTableDataCell>Kunal Mangal</CTableDataCell>
            <CTableDataCell>9999900000</CTableDataCell>
            <CTableDataCell>kunal@dblockchainers.com</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>sushma</CTableDataCell>
            <CTableDataCell>Sushma M H</CTableDataCell>
            <CTableDataCell>9999999999</CTableDataCell>
            <CTableDataCell>sushma@dblockchainers.com</CTableDataCell>
            <CTableDataCell>03 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">4</CTableHeaderCell>
            <CTableDataCell>shylaja</CTableDataCell>
            <CTableDataCell>Shylaja R Gowda</CTableDataCell>
            <CTableDataCell>9999999999</CTableDataCell>
            <CTableDataCell>shylaja@dblockchainers.com</CTableDataCell>
            <CTableDataCell>04 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">5</CTableHeaderCell>
            <CTableDataCell>akash</CTableDataCell>
            <CTableDataCell>Akash Kumar Singh</CTableDataCell>
            <CTableDataCell>9999545250</CTableDataCell>
            <CTableDataCell>akash@dblockchainers.com</CTableDataCell>
            <CTableDataCell>05 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">6</CTableHeaderCell>
            <CTableDataCell>vishal</CTableDataCell>
            <CTableDataCell>Vishal Thakur</CTableDataCell>
            <CTableDataCell>9995555999</CTableDataCell>
            <CTableDataCell>vishal@dblockchainers.com</CTableDataCell>
            <CTableDataCell>06 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">7</CTableHeaderCell>
            <CTableDataCell>manikanta</CTableDataCell>
            <CTableDataCell>Mani Kanta</CTableDataCell>
            <CTableDataCell>9000555999</CTableDataCell>
            <CTableDataCell>mani@dblockchainers.com</CTableDataCell>
            <CTableDataCell>03 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">8</CTableHeaderCell>
            <CTableDataCell>vasanth</CTableDataCell>
            <CTableDataCell>Vasanth </CTableDataCell>
            <CTableDataCell>9995555999</CTableDataCell>
            <CTableDataCell>vasanth@dblockchainers.com</CTableDataCell>
            <CTableDataCell>02 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">9</CTableHeaderCell>
            <CTableDataCell>zubair</CTableDataCell>
            <CTableDataCell>Zubair</CTableDataCell>
            <CTableDataCell>9000555999</CTableDataCell>
            <CTableDataCell>zubair@dblockchainers.com</CTableDataCell>
            <CTableDataCell>01 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">10</CTableHeaderCell>
            <CTableDataCell>himanshu</CTableDataCell>
            <CTableDataCell>Himanshu Singh</CTableDataCell>
            <CTableDataCell>9995550999</CTableDataCell>
            <CTableDataCell>himanshu@dblockchainers.com</CTableDataCell>
            <CTableDataCell>08 Nov, 2021</CTableDataCell>
            <CTableDataCell>09 Nov, 2021</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default Team
