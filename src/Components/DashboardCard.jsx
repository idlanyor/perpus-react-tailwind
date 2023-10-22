
export default function DashboardCard(props) {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">{props.judul}</p>
                <h5 className="mb-2 font-bold dark:text-white">{props.stats}</h5>
                <p className="mb-0 dark:text-white dark:opacity-60">
                  <span className="text-sm font-bold leading-normal text-emerald-500">{props.desc}</span>
                  
                </p>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className={`inline-block w-12 h-12 text-center rounded-circle bg-${props.iconColor}-500`}>
                <i className={`ni leading-none ni-${props.icons} text-lg relative top-3.5 text-white`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}