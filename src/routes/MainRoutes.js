/* eslint-disable prettier/prettier */
import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardOwner = Loadable(lazy(() => import('views/dashboard/owner-dashboard/OwnerDashboard')));
const DashboardManager = Loadable(lazy(() => import('views/dashboard/manager-dashboard/ManagerDashboard')));
const DashboardTrainer = Loadable(lazy(() => import('views/dashboard/trainer-dashboard/TrainerDashboard')));
const DashboardAdmin = Loadable(lazy(() => import('views/dashboard/admin-dashboard/AdminDashboard')));

const CustomerPayment = Loadable(lazy(() => import('views/pages/customer-payment/CustomerPayment')));
const Subscription = Loadable(lazy(() => import('views/pages/subscription/Subscription')));
const Notification = Loadable(lazy(() => import('views/pages/notification/Notification')));
const CalorieCal = Loadable(lazy(() => import('views/pages/calorie-calculator/CalorieCalculator')));
const MemberReport = Loadable(lazy(() => import('views/pages/reports/member-report/MemberReport')));
const Services = Loadable(lazy(() => import('views/pages/services/Services')));
const SubscriptionTypes = Loadable(lazy(() => import('views/pages/subscriptionType/SubscriptionType')));
const EmployeeManagement = Loadable(lazy(() => import('views/pages/employee-management/EmployeeManagement')));
const Attendance = Loadable(lazy(() => import('views/pages/attendance/Attendance')));
const Account = Loadable(lazy(() => import('views/pages/account/Account')));
const DietPlan = Loadable(lazy(() => import('views/pages/dietPlan/DietPlan')));
const Membership = Loadable(lazy(() => import('views/pages/membership/Membership')));
const Gym = Loadable(lazy(() => import('views/pages/gym/Gym')));
const Branch = Loadable(lazy(() => import('views/pages/branch/Branch')));
const Schedule = Loadable(lazy(() => import('views/pages/schedule/Schedule')));


// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/pages',
    element: <MainLayout />,
    children: [
        // {
        //     path: '/',
        //     element: <AuthLogin3 />
        // },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/owner',
            element: <DashboardOwner />
        },
        {
            path: '/dashboard/manager',
            element: <DashboardManager />
        },
        {
            path: '/dashboard/trainer',
            element: <DashboardTrainer />
        },
        {
            path: '/dashboard/admin',
            element: <DashboardAdmin />
        },
        {
            path: '/customerPayment',
            element: <CustomerPayment />
        },
        {
            path: '/subscription',
            element: <Subscription />
        },
        {
            path: '/subscriptionTypes',
            element: <SubscriptionTypes />
        },
        {
            path: '/notification',
            element: <Notification />
        },
        {
            path: '/calorieCal',
            element: <CalorieCal />
        },
        {
            path: '/memberReport',
            element: <MemberReport />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/employeeManagement',
            element: <EmployeeManagement />
        },
        {
            path: '/membership',
            element: <Membership />
        },
        {
            path: '/attendance',
            element: <Attendance />
        },
        {
            path: '/account',
            element: <Account />
        },
        {
            path: '/dietPlan',
            element: <DietPlan />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },

        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/gym',
            element: <Gym />
        },
        {
            path: '/branch',
            element: <Branch />
        },
        {
            path: '/schedule',
            element: <Schedule />
        }
    ]
};

export default MainRoutes;
