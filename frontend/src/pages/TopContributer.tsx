import { ReactElement } from "react";
import { Column } from "react-table";
import { useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";
import mg1 from "../assets/images/user.png";
import mg2 from "../assets/images/user.png";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  count: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Number of Contributions",
    accessor: "count",
    Cell: ({ value }) => (
      <div className="text-center">{value}</div>
    ),
  },
];





const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg1}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "6",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg1}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "6",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg1}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "6",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg1}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "2",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg1}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "2",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "2",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={mg2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    count: "2",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },


];

const itemsPerPage = 5;


const TopContributer = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box bg-white shadow-lg",
      true,
      itemsPerPage // Corrected argument order
    ),
    []
  );

  return (
    <main className="h-fit my-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">{Table()}</div>
      </div>
    </main>
  );
};

export default TopContributer;