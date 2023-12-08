
import {ADMIN_ROUTE, MAIN_ROUTE, USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TRAINERS_ROUTE , TIMETABLE_ROUTE, NEWS_ROUTE} from "./utils/const";
import Main from "./pages/MainPage";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";
import News from "./pages/NewsPage";
import TrainersPage from "./pages/TrainersPage";
import TimeTable from "./pages/TimeTablePage";
import UserPanel from "./pages/UserPanelPage";
import Layout from "./components/Layout/Layout";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]

export const userRoutes = [
    {
        path: USER_ROUTE,
        Component: UserPanel

    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: SignIn
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: MAIN_ROUTE,
        Component: Layout
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: TRAINERS_ROUTE,
        Component: TrainersPage
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: TIMETABLE_ROUTE,
        Component: TimeTable
    },
]