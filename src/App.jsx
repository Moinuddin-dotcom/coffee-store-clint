import { Link, useLoaderData } from "react-router-dom"
import AllLinks from "./Components/AllLinks"
import CoffeDetails from "./Components/CoffeDetails"
import { useState } from "react"


function App() {
  const loadedCoffees = useLoaderData()
  const [allCoffee, setAllCoffee] = useState(loadedCoffees)

  return (
    <>
      <h1 className='font-bold text-6xl text-center'>Lets start</h1>
      <AllLinks />
      <div className="grid grid-cols-2 gap-5 max-w-[80vw] mx-auto">

        {
          allCoffee.map(coffeeDetails =>
            <CoffeDetails key={coffeeDetails._id}
              coffeeDetails={coffeeDetails}
              removedCoffee={allCoffee}
              setRemovedCoffee={setAllCoffee} />
          )
        }
      </div>
    </>
  )
}

export default App
