import { cn } from "@/lib/utils"

export default function RoomFeaturesSection({ features }: { features: { icon: React.ReactNode; name: string }[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Características</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={cn("rounded-full p-2", index % 2 === 0 ? "bg-teal-100" : "bg-rose-100")}>
              {feature.icon}
            </div>
            <span>{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}