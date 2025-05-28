export default function RoomGallerySection({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} imagen ${idx + 1}`}
            className="rounded-lg object-cover w-full h-48"
          />
        ))}
      </div>
    </div>
  )
}