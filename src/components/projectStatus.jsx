import { PieChart } from '@mui/x-charts/PieChart';
import { useProjectStatusStore } from '../store/useProjectStatus';

export default function ProjectStatus() {
  const {statusData} =useProjectStatusStore();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      Project Status
      <PieChart
        series={[
          {
            id: 'client-sector-pie-v1',
            data:statusData,
          },
        ]}
      width={220}
        height={120}
        // ✅ correct legend placement
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'right' },
          },
          
        }}
      />
    </div>
  );
}

