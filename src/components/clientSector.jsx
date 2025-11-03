import { PieChart } from '@mui/x-charts/PieChart';
import { useClientSectorStore } from '../store/useClientSector';

export default function ClientSector() {
  const {sectorData} =useClientSectorStore();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      Client Sector
      <PieChart
        series={[
          {
            id: 'client-sector-pie-v1',
            data:sectorData,
          },
        ]}
      width={300}
        height={200}
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



