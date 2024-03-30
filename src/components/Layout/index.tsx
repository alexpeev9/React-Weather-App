import { Outlet } from "react-router-dom";

import Header from "../Header";

import { Main } from "./styled";

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
