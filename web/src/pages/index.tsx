import {Route, Routes, Navigate} from "react-router-dom";
import {Layout} from "@/layout";
import {Login} from "@/pages/login";
import {lazy} from "react";
import {withSuspense} from "@/app/providers/with-suspense";

const LazyAllApplications = lazy(() => import('@/pages/applications/all/AllApplications'));
const LazyNewApplication = lazy(() => import('@/pages/applications/new/NewApplication'));
const LazyDashboard = lazy(() => import('@/pages/dashboard/Dashboard'));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={withSuspense(() => <LazyDashboard />)}></Route>
                <Route path="/applications">
                    <Route path="my" element={withSuspense(() => <LazyAllApplications />)} />
                    <Route path="new" element={withSuspense(() => <LazyNewApplication />)} />
                </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    )
}