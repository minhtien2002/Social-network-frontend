import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/mainLayout";
import { AuthLayout } from "../layout/authLayout";
import { Register } from "../components/login/register";
import { Login } from "../components/login/login";
import { Home } from "../layout/mainlayout/home/Home";
import { Profile } from "../layout/mainlayout/profile/Profile";
import { Activity } from "../layout/mainlayout/activity/Activity";
import { Container } from "../components/share/Container";
import { Shop } from "../components/shop/Shop";
import ItemLayout from "../layout/ItemLayout";
import React from "react";
import { SearchProfile } from "../layout/mainlayout/search/Search";
import PostDetail from "../layout/mainlayout/post/postDetail";

export function RouteConfig() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Container />}>
                <Route index element={<Home />}></Route>
                <Route path="" element={<ItemLayout />}>
                    <Route path=":accountname/post/:idpost" element={<PostDetail />}></Route>
                    <Route path=":accountname" element={<Profile />}></Route>
                    <Route path="search" element={<SearchProfile />}></Route>
                    <Route path="activity" element={<Activity />}></Route>
                    <Route path="shop" element={<Shop />}></Route> 
                    </Route>
                </Route>
               
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            
        </Routes>
    )
}