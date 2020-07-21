import Link from "next/link";


const Orders = ({ orders }) => {

    // console.log('client-orders', orders);

    return (
        <div className="">
            <legend>Your Orders</legend>
            {orders.length < 1
            ?
                <div className="card text-white bg-info mb-3">
                    <div className="card-body two-column">
                        <h4 className="card-title">No Recent Orders</h4>
                        <Link href="/shop">
                            <a className="link">
                                <button type="button" className="btn btn-info">| Browse Products</button>
                            </a>
                        </Link>
                    </div>
                </div>
            :
                orders.map(order => {
                    <div key={order.id}>
                        <p>{order.name}</p>
                        <p>{order.date}</p>
                    </div>
                })
            }

        </div>
    )
};

export default Orders;

