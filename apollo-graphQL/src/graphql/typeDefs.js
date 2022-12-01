import {gql} from 'apollo-server';

const typeDefs = gql`
    scalar Date
    scalar Long
    scalar Double
    scalar Integer

    type Order {
      id: Long! 
      productId: Long
      qty: Integer
      customerId: String
      status: String
      address: String
      delivery: Delivery
      inventory: Inventory
    }
    type Inventory {
    	id: Long! 
			stock: Long
    }
    type Delivery {
      id: Long!
      orderId: Long 
      productId: Long 
      customerId: String 
      address: String 
      status: String 
    }

    type Query {
      orders: [Order]
      order(id: Long!): Order
      inventories: [Inventory]
      inventory(id: Long!): Inventory
      deliveries: [Delivery]
      delivery(id: Long!): Delivery
    }
`;

export default typeDefs;

