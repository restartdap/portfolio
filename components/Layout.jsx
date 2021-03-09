import { Fragment } from 'react';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div>
                <h1>Hola Mundo</h1>
                <div>{children}</div>
            </div>
        </Fragment>
    );
};

export default Layout;