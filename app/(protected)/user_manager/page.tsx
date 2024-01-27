import { getAllNonAdminUsers } from "@/data/user";
import Link from "next/link";
import { TiUserAdd } from "react-icons/ti";

export default async function Page() {
  const userList = await getAllNonAdminUsers();
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="flex items-center justify-between mx-4 lg:pb-2">
          <h2 className="text-2xl font-semibold leadi text-blue-700">Staff</h2>
          <Link href="/user_manager/new">
            <button className="btn btn-secondary">
              <TiUserAdd /> Add New User
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3">Sl No</th>
                <th className="p-3">Name</th>
                <th className="p-3">Job title</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              {userList?.map((item) => (
                <tr key={item.id}>
                  <td className="px-3  dark:text-gray-400">1</td>
                  <td className="px-3 py-2">
                    <p>{item.name}</p>
                  </td>
                  <td className="px-3 py-2">
                    <span>{item.role}</span>
                    <p className="dark:text-gray-400">
                      {item.details[0]?.work_address}
                    </p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{item.details[0]?.phone_number}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{item.email}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{item.details[0].home_address}</p>
                    <p className="dark:text-gray-400">
                      {item.details[0].country}
                    </p>
                  </td>
                  <td className="px-3 py-2">
                    <button
                      type="button"
                      title="Open details"
                      className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
