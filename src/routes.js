import React from 'react'

//Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Investment
const Investment = React.lazy(() => import('./views/investment/investment/Investment'))
const MyInvestment = React.lazy(() => import('./views/investment/myinvestment/MyInvestment'))
// Profile
const ProfileView = React.lazy(() => import('./views/profile/view/View'))
const ProfileEdit = React.lazy(() => import('./views/profile/edit/Edit'))
// Income
const Income = React.lazy(() => import('./views/earning/income/Income'))

// Withdraw
const Withdraw = React.lazy(() => import('./views/earning/withdrawal/withdraw/Withdraw'))
const WithdrawHistory = React.lazy(() =>
  import('./views/earning/withdrawal/withdrawhistory/WithdrawHistory'),
)

// Team
const Team = React.lazy(() => import('./views/team/Team'))
// Help
const News = React.lazy(() => import('./views/help/news/News'))
const Support = React.lazy(() => import('./views/help/support/Support'))
const ChangePassword = React.lazy(() =>
  import('./views/help/settings/changepassword/ChangePassword'),
)
const ChangeEmail = React.lazy(() => import('./views/help/settings/changeemail/ChangeEmail'))
const NotificationSetting = React.lazy(() =>
  import('./views/help/settings/notification/Notification'),
)

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/investment', name: 'Investment', component: Investment, exact: true },
  { path: '/investment/investment', name: 'Investment', component: Investment },
  { path: '/investment/myinvestment', name: 'My Investment', component: MyInvestment },
  { path: '/profile', name: 'View', component: ProfileView, exact: true },
  { path: '/profile/view', name: 'View', component: ProfileView },
  { path: '/profile/edit', name: 'Edit', component: ProfileEdit },
  { path: '/earning', name: 'Income', component: Income, exact: true },
  { path: '/earning/income', name: 'Income', component: Income },
  { path: '/earning/withdrawal', name: 'Withdraw', component: Withdraw, exact: true },
  { path: '/earning/withdrawal/withdraw', name: 'Withdraw', component: Withdraw },
  {
    path: '/earning/withdrawal/withdrawhistory',
    name: 'Withdraw History',
    component: WithdrawHistory,
  },
  { path: '/team', name: 'Team', component: Team },
  { path: '/help', name: 'Help', component: News, exact: true },
  { path: '/help/news', name: 'News', component: News },
  { path: '/help/support', name: 'Support', component: Support },
  {
    path: '/help/settings',
    name: 'Settings',
    component: NotificationSetting,
    exact: true,
  },
  {
    path: '/help/settings/notification',
    name: 'NotificationSetting',
    component: NotificationSetting,
  },
  { path: '/help/settings/changepassword', name: 'Change Password', component: ChangePassword },
  { path: '/help/settings/changeemail', name: 'Change Email', component: ChangeEmail },
]

export default routes
