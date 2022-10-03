import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {
    component: RouteProps["component"]
    path: string
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component, path }) => {
    if (JSON.parse(localStorage.isAuth)) {
        return <Route path={path} component={component} />;
    }

    return <Redirect to='/' />;



};

export default PrivateRoute