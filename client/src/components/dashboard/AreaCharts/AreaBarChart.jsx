import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    loss: 0,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
  {
    month:"Oct"
  }
];

const AreaBarChart = () => {
  const  theme  = true;
  const LIGHT_THEME  = true

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart w-full">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Total Revenue</h5>
        <div className="chart-info-data">
          <div className="info-data-value"> 5000K </div>
          <div className="info-data-text">
          feature implementation
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="200%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="profit"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="loss"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
