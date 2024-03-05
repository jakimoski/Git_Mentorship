import "./overview.css";
import { easeInOut, motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { labels } from "../../data/data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Overview() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Amount",
        data: [15, 25, 36, 50],
        backgroundColor: "#7096D1",
      },
    ],
  };

  console.log(data.datasets[0].data === null);

  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "0%" }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className="Overwiev"
    >
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "0%" }}
          transition={{ delay: 0.5, duration: 0.5, ease: easeInOut }}
        >
          {/* There are no entries to display, go to entries page. */}
        </motion.h1>
        {<Bar style={{ width: "70vw" }} options={options} data={data} />}
      </div>
    </motion.main>
  );
}

export default Overview;
