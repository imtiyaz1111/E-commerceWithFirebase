import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  const { mode, product, order, user } = useContext(myContext);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              { label: "Total Products", count: product.length },
              { label: "Total Orders", count: order.length },
              { label: "Total Users", count: user.length },
            ].map((item, index) => (
              <div key={index} className="p-4 w-64">
                <div
                  className={`border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-6 py-5 rounded-xl ${
                    mode === "dark" ? "bg-gray-800 text-white" : "text-black"
                  }`}
                >
                  <FaUserTie size={50} className="text-purple-500 mb-3 mx-auto" />
                  <h2 className="text-3xl font-medium">{item.count}</h2>
                  <p className="text-purple-500 font-bold">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
