interface LoaderProps {
  isLoading: boolean
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
          <div className="h-24 w-24 animate-spin rounded-full border-8 border-orange-400 border-b-transparent" />
        </div>
      ) : null}
    </>
  )
}
