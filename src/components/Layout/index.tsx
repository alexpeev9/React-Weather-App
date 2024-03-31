import { Link, Outlet } from "react-router-dom";
import { HeaderContainer, HeaderTitle, Main } from "./styled";
import useScrollToTop from "../../hooks/useScrollToTop";
import { textHeader } from "../../utils/constants";
import { UnitForm } from "../UnitForm";

export default function Layout() {
  useScrollToTop();
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <HeaderTitle data-test={"site-title"}>{textHeader.title}</HeaderTitle>
        </Link>
        <UnitForm />
      </HeaderContainer>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
