import * as React from 'react'
import Box from '@mui/material/Box'
import { BarChart } from '@mui/x-charts/BarChart'
import { useProjectStore} from '../store/useProjectStore'

export default function SimpleBarChart() {
  const { projectStats } = useProjectStore()

  // Extract months and counts from store
  const xLabels = projectStats.map((p) => p.month)
  const data = projectStats.map((p) => p.count)

  return (
    <Box sx={{ width: '60%', height: 300 }}>
      Last 6 month Prjects data
      <BarChart
        series={[{ data, label: 'No of Projects', id: 'projectId' }]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  )
}
