import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ReactNode } from "react";
type NavLinkProps = {
  page: string;
  children: ReactNode;
};
const NavLink: React.FC<NavLinkProps> = ({ page, children }: NavLinkProps) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={page}
  >
    {children}
  </Link>
);
export default NavLink;
