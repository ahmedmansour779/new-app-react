import styled from "@emotion/styled";
import theme from "../../../../config";

export const NavbarWrapper = styled("section")`
    label: NavbarWrapper;
    background-color: ${theme.background};
    color: ${theme.textBackground};
    padding: 1rem;
`
export const NavbarContainer = styled("section")`
    label: NavbarContainer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
`
export const NavbarTitle = styled("span")`
    label: NavbarTitle;
    font-size: 1.5rem;
`
export const Event = styled("span")`
    label: Event;
    color: ${theme.primary};
`
export const Link = styled("a")`
    label: Link;
    color: ${theme.textBackground};
    font-size: 1.1rem;
    text-decoration: none;
`
export const LinkWrapper = styled("div")`
    label: LinkWrapper;
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`