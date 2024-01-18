import { LineChart } from '@mui/x-charts/LineChart';

const moistureData = [40, 30, 20, 27, 19, 23, 39];
const pHData = [24, 18, 90, 98, 40, 80, 43];
const NPKData = [20, 49, 80, 90, 80, 40, 20];
const xLabels = [
  '00:00',
  '04:00',
  '08:00',
  '12:00',
  '16:00',
  '20:00',
  '24:00',
];

export default function MoistureChart() {
  return (
    <LineChart
      width={300}
      height={300}
      series={[
        { data: pHData, label: 'pH', id: 'phId' },
        { data: moistureData, label: 'moistureData', id: 'moistureData' },
        { data: NPKData, label: 'NPK', id: 'NPKId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root, .MuiMarkElement-root': {
          strokeWidth: 1,
        },
        '.MuiLineElement-series-phId': {
          strokeDasharray: '5 5',
        },
        '.MuiLineElement-series-moistureData': {
          strokeDasharray: '3 4 5 2',
        },
        '.MuiLineElement-series-NPKId': {
          strokeDasharray: '4 4 ',
        },
        '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
          fill: '#fff',
        },
        '& .MuiMarkElement-highlighted': {
          stroke: 'none',
        },
      }}
    />
  );
}