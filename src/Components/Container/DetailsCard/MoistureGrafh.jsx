import { LineChart } from "@mui/x-charts/LineChart";

export const MoistureChart = () => {
  return (
    <div className="moisture-card">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        width={320}
        height={200}
      />
    </div>
  );
};
