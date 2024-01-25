interface SectionTitleProps {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="relative mb-3 text-xl font-semibold uppercase text-white">
      {title}
      <div className="mt-1 h-1 w-10 bg-orange-400" />
    </h2>
  )
}
