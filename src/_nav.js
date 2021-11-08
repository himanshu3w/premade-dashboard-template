import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Profile',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View',
        to: '/profile/view',
      },
      {
        component: CNavItem,
        name: 'Edit',
        to: '/profile/edit',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Investment',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Investment',
        to: '/investment/investment',
      },
      {
        component: CNavItem,
        name: 'My Investment',
        to: '/investment/myinvestment',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'Team',
  },
  {
    component: CNavItem,
    name: 'Team',
    to: '/team',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Earning',
  },
  {
    component: CNavItem,
    name: 'Income',
    to: '/earning/income',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Withdrawal',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Withdraw',
        to: '/earning/withdrawal/withdraw',
      },
      {
        component: CNavItem,
        name: 'Withdraw History',
        to: '/earning/withdrawal/withdrawhistory',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Help',
  },
  {
    component: CNavItem,
    name: 'News',
    to: '/help/news',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support',
    to: '/help/support',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Notification Setting',
        to: '/help/settings/notification',
      },
      {
        component: CNavItem,
        name: 'Change Password',
        to: '/help/settings/changepassword',
      },
      {
        component: CNavItem,
        name: 'Change Email',
        to: '/help/settings/changeemail',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default _nav
