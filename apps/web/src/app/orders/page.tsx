import { useEffect, useState } from 'react';

// Define the type for an order
type Order = {
  id: number;
  status: string;
  // Add other properties as needed
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]); // Specify the type as Order[]

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders');
        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle error as needed (e.g., show error message)
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
