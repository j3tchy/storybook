import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Body = ({ children, ...rest }) => (
    <Typography {...rest}>{children}</Typography>
);

Body.propTypes = {
    variant: PropTypes.oneOf(['body1', 'body2'])
};

Body.defaultProps = {
    variant: 'body1',
}

export default Body;

