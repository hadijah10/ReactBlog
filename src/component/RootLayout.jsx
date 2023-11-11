import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { MdOutlet } from "react-icons/md";
import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { signOut, auth } from "../firebase-config";
import { useSelector, useDispatch } from "react-redux";
import classes from "./RootLayout.module.css";
import { logout } from "../redux/auth.js";
import toast from "react-hot-toast";

function RootLayout() {
  const isAuth = useSelector((state) => state.auth.value);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let paths = window.location.href;
  let pathkey = 0;
  switch (paths) {
    case "/":
    case "/home":
      pathkey = 0;
      break;
    case "/login":
    case "/post":
      pathkey = 1;
      break;
    default:
      pathkey = 0;
  }

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      toast.success("Successfully logged out!");
      navigate("/home", { replace: true });
    } catch (err) {
      toast.error("Could not logout.Check your network");
    }
  };
  return (
    <>
      <Layout className="layout">
        <Header style={{ backgroundColor: "white" }}>
          <div className="demo-logo" />
          <Menu
            onClick={({ key }) => {
              if (key === "logout") {
                logOut();
              } else {
                navigate(key);
              }
            }}
            mode="horizontal"
            defaultSelectedKeys={[pathkey]}
            items={isAuth.navi.map((element) => {
              const key = element.toLocaleLowerCase();
              return {
                key,
                label: element,
              };
            })}
          />
        </Header>
        <Content style={{ maxHeight: "84vh", overflowY: "scroll" }}>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "cyan",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          Blog @hadija &copyright
        </Footer>
      </Layout>
    </>
  );
}

export default RootLayout;
