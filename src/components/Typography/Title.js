import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Title = ({ children, ...rest }) => (
    <Typography {...rest}>{children}</Typography>
);

Title.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3']),
    component: PropTypes.oneOf(['h1', 'h2', 'h3']),
}

Title.defaultProps = {
    variant: 'h1'
}

export default Title;