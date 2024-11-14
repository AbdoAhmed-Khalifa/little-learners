
export default function CardLines() {
  return (
    <div className="flex items-center justify-center  ">
    <span className="w-5 h-5 border-2 border-dark-15 rounded-full z-20 bg-white"></span>
    <div className=" flex items-center justify-center space-x-4">
    <div className="h-0.5 w-14 bg-black shadow-line "></div>
    <div className="h-0.5 w-14 bg-black shadow-line "></div>
    <div className="h-0.5 w-14 hidden xl:block bg-black shadow-line "></div>
    <div className="h-0.5 w-14  hidden xl:block bg-black shadow-line "></div>
    <div className="h-0.5 w-14 bg-black shadow-line "></div>
    <div className="h-0.5 w-14 bg-black shadow-line "></div>
    </div>
    <span className="w-5 h-5 border-2 border-dark-15 rounded-full z-20  bg-white"></span>
  </div>
  )
}
