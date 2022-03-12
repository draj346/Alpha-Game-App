import React, { FunctionComponent } from "react";
import { Alignments } from "../../constant/Enum";
import { HeaderProps, HeaderPropTypes } from "./HeaderInterface";
import './Header.scss';

const Header: FunctionComponent<HeaderProps> = (props) => {

    return (
        <header
            data-testid="header"
            style={{
                alignItems: Alignments[props.headerAlignment || Alignments.left],
            }}
        >
            {props.children}
        </header>
    );
};

Header.propTypes = HeaderPropTypes;

export default Header;