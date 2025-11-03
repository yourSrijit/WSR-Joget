
import Box from '@mui/material/Box'
import { BarChart } from '@mui/x-charts/BarChart'
import { useProjectStore } from '../store/useProjectStore'

export default function SimpleBarChart() {
  const { projectStats } = useProjectStore()

  // Extract months and counts from store
  const xLabels = projectStats.map((p) => p.month)
  const data = projectStats.map((p) => p.count)

  return (
    <Box sx={{ width: '90%', height: 300 }}>
      <div style={{ marginBottom: '8px', fontWeight: 'bold', }}>
        Last 6 months
      </div>
      <BarChart
        series={[{ data, label: 'No. of Projects', id: 'projectId' }]}
        xAxis={[
          {
            scaleType: 'band',
            data: xLabels,
          },
        ]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  )
}
