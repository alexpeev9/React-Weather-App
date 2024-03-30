import { Outlet } from "react-router-dom";

import Header from "../Header";

import { Main } from "./styled";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function Layout() {
  useScrollToTop();
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
