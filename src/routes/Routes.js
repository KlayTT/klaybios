import React from 'react'
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';


export default function RoutePaths({ admin }) {
    return (
        <>
            { admin ? <AdminRoutes admin={admin} /> : ''}
            <UserRoutes />
        </>
    );
}

RoutePaths.propTypes = {
    admin: PropTypes.shape(PropTypes.obj),
};

RoutePaths.defualtProps = {
    admin: null,
};
