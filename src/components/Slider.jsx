import { useState } from "react"


const Slider = () => {

const [redColor, setRedColor] = useState('')
    const [greenColor, setGreenColor] = useState('')
    const [blueColor, setBlueColor] = useState('')
    const [color, setColor] = useState(0);

    const SlideColor =(e) => {
        setColor({...color,[e.target.value]:e.target.value})
    }


    return(
        <div>
            <input type="range" min={0} max={255} value={redColor} onChange={(e) => setRedColor(e.target.value)} style={{backgroundColor: `rgb(255,00,00)`}} />
            {redColor}
            <input type="range" min={0} max={255} value={greenColor} onChange={(e) => setGreenColor(e.target.value)} />
            {greenColor}
            <input type="range" min={0} max={255} value={blueColor} onChange={(e) => setBlueColor(e.target.value)} />
            {blueColor}

            
        </div>
    )
}

export default Slider