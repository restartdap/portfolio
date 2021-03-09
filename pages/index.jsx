import Layout from '../components/Layout';
import Head from 'next/head';
import { Fragment } from 'react';

const Index = () => {
    return (
        <Fragment>
            <Head>
                <title>Hi | Rafael Estrada</title>
            </Head>
            <Layout>
                <h1>Rafael Estrada</h1>
                <h2>MERN developer</h2>
            </Layout>
        </Fragment>
    );
};

export default Index;