import { useState } from "react"

function Mahm(){

    const qutz= [

        "1. ninkoo jibkiisa ninko kale farxadiisa waaye ",
        "2. aqoon la aan waa iftiin la aan ",
        "3. abkow dooli dilow dad nool maas udaaha",
        "4. nin seexday siciisa dibidhalay ",
        "5. qunyar socod qodax ma mudo",
        "6. nin tuur leh ma sexdo",
        "7. aqoon la aan waa iftiin la aan ",
        "8. abkow dooli dilow dad nool maas udaaha",
        "9. nin seexday siciisa dibidhalay ",
        "10. qunyar socod qodax ma mudo",
        <div>
            <p className="text-red-500 pl-28">dhamaad</p>
        11. nin tuur leh ma sexdo
        </div>

    ]

    const [index , setIndex]= useState(0)

    const hndindex = () => {
        if(index < qutz.length-1){
            setIndex( index+1)
        }
    }

    const prvindex = () => {
        if(index > 0){
            setIndex( index -1)
        }
    }

  
    
    
    return <>


    <div className="mt-40 ml-96">
        <h1  style={{ color:(index)===3 ? "red" : ""}} className=" text-4xl font-bold capitalize"  > {qutz[index]}</h1>

        <button onClick={prvindex} className="py-2 px-8 bg-blue-500 text-2xl ml-32 rounded-lg " >perv</button>
        <button onClick={hndindex}  className="py-2 px-8 bg-blue-500 text-2xl ml-10 mt-10 rounded-lg ">next</button>

    </div>


    </>
}

export default Mahm