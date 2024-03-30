import { Link } from "react-router-dom";
import { UnitForm } from "../UnitForm";
import { HeaderContainer, HeaderTitle } from "./styled";
import { textHeader } from "../../utils/constants";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderTitle data-test={"site-title"}>{textHeader.title}</HeaderTitle>
      </Link>
      <UnitForm />
    </HeaderContainer>
  );
}
