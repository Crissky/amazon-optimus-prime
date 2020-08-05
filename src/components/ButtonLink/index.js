import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
    return (
        <Link to={props.to} className={props.className}>
            {props.children}
        </Link>
    );
}

ButtonLink.defaultProps = {
    to: '/',
    className: '',
};

ButtonLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ButtonLink;