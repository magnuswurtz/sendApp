interface navProps{
    setContent:(content:string) => void
}

const StatsNav = (props:navProps) => {
    return(
        <nav className="flex sm:justify-center space-x-4">
  {[
    'List',
    'Map',
    'Plots',
    
  ].map((title) => (
    <button className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" onClick={() => props.setContent(title)}>{title}</button>
  ))}
</nav>
    )
}
export default StatsNav