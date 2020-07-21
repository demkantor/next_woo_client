import Head from 'next/head';
import Header from './Header';
import '../styles/Styles.css';
import Footer from './Footer';

// displays nav and footer on each page along with page content
const Layout = ( props ) => {

    return (
        <div>

            <Head>
                <title>Next-Woo-Press</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/> 
            </Head>
                <Header />

                { props.children }

            <Footer />
        </div>
    );
};

export default Layout;
