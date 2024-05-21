import React ,{useState} from 'react'

export default function About() {
    const [myStyle,setmyStyle]=useState({
        color:'black',
        backgroundColor:'white',
    })

    const[btntext,setBtnText]=useState("Dark mode")
    const changeMode=()=>{
        if (myStyle.color==='black'){
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("light mode")
        }
        else {
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Dark mode")
        }
    }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    What is this?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    <strong>This is an text editor.</strong> .
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Why to use?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    <strong>It can be used to perform various operations on the text,try "Speak" option its fun,Alerts are also cool</strong> 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Who made?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    <strong>I ,Purandhar sai ,made this in process of learning React.js</strong> 
                </div>
                </div>
            </div>
        </div>
        <div className='container my-2' >
            <button type="button" class="btn btn-primary my-2" onClick={changeMode}>{btntext}</button>
        </div>
    </div>
  )
}
