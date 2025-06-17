export default function BlurBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-32 left-10 w-72 h-72 bg-indigo-600 opacity-20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-32 right-10 w-72 h-72 bg-emerald-500 opacity-20 rounded-full filter blur-2xl" />
    </div>
  )
}
