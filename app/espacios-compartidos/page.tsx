import CoworkingSection from "@/components/espacios-compartidos/CoworkingSection"
import KitchenSection from "@/components/espacios-compartidos/KitchenSection"
import LoungeSection from "@/components/espacios-compartidos/LoungeSection"
import GymSection from "@/components/espacios-compartidos/GymSection"
import { sharedSpacesContent } from "@/content"

export default function SharedSpaces() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{sharedSpacesContent.header.title}</h1>
          <p className="max-w-2xl mx-auto">
            {sharedSpacesContent.header.description}
          </p>
        </div>
      </section>

      <CoworkingSection content={sharedSpacesContent.coworking} />
      <KitchenSection content={sharedSpacesContent.kitchen} />
      <LoungeSection content={sharedSpacesContent.lounge} />
      <GymSection content={sharedSpacesContent.gym} />
    </div>
  )
}