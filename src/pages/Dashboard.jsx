import { DashboardLayout } from '@kinfe123/farm-ui/app/dashboard'
import { Chart } from '@kinfe123/farm-ui/app/chart'
import { CTA } from '@kinfe123/farm-ui/app/cta'

const Dashboard = () => {
  return (
    <DashboardLayout
      sidebar={{
        links: [
          { href: '/dashboard', label: 'Overview' },
          { href: '/dashboard/analytics', label: 'Analytics' },
          { href: '/dashboard/settings', label: 'Settings' }
        ],
        user: {
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=john'
        }
      }}
    >
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Chart
            type="line"
            data={{
              labels: ['Jan', 'Feb', 'Mar'],
              datasets: [{
                label: 'Users',
                data: [100, 200, 300]
              }]
            }}
          />
          
          <Chart
            type="bar"
            data={{
              labels: ['Jan', 'Feb', 'Mar'],
              datasets: [{
                label: 'Revenue',
                data: [500, 1000, 1500]
              }]
            }}
          />
        </div>

        <CTA
          title="Upgrade to Pro"
          description="Get access to all features"
          buttonText="Upgrade Now"
          onClick={() => console.log('Upgrade clicked')}
        />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard