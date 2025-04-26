import { RecentProjects } from "../components/dashboard/RecentProjects"
import { StatsCard } from "../components/ui/statsCard"

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="Total Projects" value={8} trend="up" />
        <StatsCard title="Unread Messages" value={3} trend="down" />
        <StatsCard title="Active Skills" value={15} trend="neutral" />
      </div>

      <RecentProjects />
    </div>
  )
}