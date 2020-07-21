import { withRouter } from 'next/router';
import Layout from '../components/Layout';

// shows products by category
const Categories = withRouter( props => {
    return (
        <Layout>
            <h1>Categories....</h1>
        </Layout>
    );
});

export default Categories;
