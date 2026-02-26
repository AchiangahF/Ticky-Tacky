import user from "../assets/user.png"
import pvp from "../assets/pvp.png"
import pvc from "../assets/pvc.png"

import Header from "../components/Header"

export default function Dashboard(){
    return(
        <section className="container-fluid p-md-1" style={{background:"#b8b8b8"}}>
            <div className="row d-flex justify-content-center align-items-center">
                
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column" style={{background:"#f0f0f0", border:"1px solid gray", borderBottom:"none"}}>
                    <Header />

                    <img src={user} alt="user profile pic" className="w-25 pt-3" />
                    <p className="pt-3">John49Doe</p>

                    <hr style={{width:"90%"}}/>
                </div>

            </div>

            {/* summary */}
            <div className="row d-flex justify-content-center align-items-center">
                
                <div className="col-12 col-md-6 " style={{background:"#f0f0f0"}}>

                    <div className="row text-light px-3 px-md-0" style={{border:'1px solid gray', borderTop:"none", borderBottom:"none"}}>
                        <h2 className="pt-4 pb-3  mb-4 border-bottom text-dark">Summary</h2>

                        <div className="col-4 d-flex justify-content-center align-items-center">
                             <p className="display-3 py-4 px-3 rounded fw-bold" style={{background:'white', color:'gray'}}><span>65</span>%</p>
                        </div>

                        <div className="col-8 text-light px-4 px-md-5 text-xl fs-5 text-dark">
                           <p>Matches Played: 0</p>
                           <p>Matches Won:    0</p>
                           <p>Matches Lossed: 0</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* game options */}
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 d-flex py-4 gap-2" style={{background:"#f0f0f0", border:"1px solid gray", borderTop:"none"}}>

                    <div className="card bg-dark" style={{width: "18rem"}}>
                        <img className="card-img-top img-fluid mx-auto d-block" src={pvp} alt="Card image cap" style={{width:"70%"}} />
                            <div className="text-center text-light">
                                <h5 className="card-title">card</h5>
                            </div>
                    </div>

                    <div className="card bg-dark" style={{width: "18rem"}}>
                        <img className="card-img-top mx-4" src={pvc} alt="Card image cap" style={{width:"70%"}}/>
                            <div className="text-center text-light">
                                <h5 className="card-title">card</h5>
                            </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}