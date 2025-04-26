import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from '@heroicons/react/20/solid'

export const StatsCard = ({ title, value, trend = 'neutral' }) => {
  const trendIcons = {
    up: <ArrowUpIcon className="h-5 w-5 text-green-500" />,
    down: <ArrowDownIcon className="h-5 w-5 text-red-500" />,
    neutral: <MinusIcon className="h-5 w-5 text-gray-500" />
  }

  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-500'
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <span className={`text-xs font-medium ${trendColors[trend]}`}>
          {trendIcons[trend]}
        </span>
      </div>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  )
}