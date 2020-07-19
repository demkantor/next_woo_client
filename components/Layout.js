import Head from 'next/head';
import Header from './Header';
import '../styles/Styles.css';
import Footer from './Footer';

const Layout = ( props ) => {

    return (
        <div>

            <Head>
                <title>Next-Woo</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/> 
            </Head>
                <Header />

                { props.children }

            <Footer />
        </div>
    );
};

export default Layout;
