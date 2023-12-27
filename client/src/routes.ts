
import { MAIN_ROUTE, USER_ROUTE, LOGIN_ROUTE, TRAINERS_ROUTE , TIMETABLE_ROUTE, NEWS_ROUTE, CONTACT_ROUTE, LOW_ROUTE} from "./utils/const";
import Main from "./pages/MainPage";
import SignIn from "./pages/SignInPage";
import News from "./pages/NewsPage";
import TrainersPage from "./pages/TrainersPage";
import TimeTable from "./pages/TimeTablePage";
import UserPanel from "./pages/UserPanelPage";
import Layout from "./components/Layout/Layout";
import FitnessClubRules from "./components/Low/Low"
import ContactInfo from "./components/Contact/Contact"


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
    {
        path: CONTACT_ROUTE,
        Component: ContactInfo
    },
    {
        path: LOW_ROUTE,
        Component: FitnessClubRules
    }
]