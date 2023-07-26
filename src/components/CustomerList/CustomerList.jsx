import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

const CustomerList = ({ customers, setCustomers }) => {
  const deleteItem = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };
  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          customer={customer}
          key={customer.id}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
