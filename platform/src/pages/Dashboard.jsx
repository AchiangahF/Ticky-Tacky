import { useState } from "react"

import user from "../assets/user.png"
import local from "../assets/local.avif"
import online from "../assets/online.avif"

import Header from "../components/Header"

export default function Dashboard(){

    const [showModal, setShowModal] = useState(false);
    return(
        <section className="container-fluid p-md-1" style={{background:"#131313"}}>
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

                    <div className="row text-light px-3 px-md-0 pb-3" style={{border:'1px solid gray', borderTop:"none", borderBottom:"none"}}>
                        <h2 className="pt-4 pb-3  mb-4 border-bottom text-dark text-center">Player Stats</h2>


                        <div className="col-4 text-light px-4 px-md-5 text-xl fs-5 text-dark">
                            <p>Games Played</p>
                            <span>00</span>
                        </div>

                        <div className="col-4 text-light px-4 px-md-5 text-xl fs-5 text-dark">
                            <p>Matches Won</p>
                            <span>00</span>
                        </div>

                        <div className="col-4 text-light px-4 px-md-5 text-xl fs-5 text-dark">
                            <p>Matched Lost</p>
                            <span>00</span>
                        </div>
                    </div>
                </div>
            </div>

          

            {/* game options */}
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 py-4 px-0 px-md-4 gap-2" style={{background:"#f0f0f0", border:"1px solid gray", borderTop:"none"}}>
                    <hr />

                    <h2 className="pt-2 pb-4 px-2">Games</h2>
                    <div 
                    className="py-3 px-4 rounded mb-2 text-light" 
                    style={{
                        background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${local})`, 
                        backgroundSize:"cover", 
                        backgroundPosition:"center",
                        cursor:"pointer",
                        
                        }}
                    onClick={() => setShowModal(true)}    
                    >

                        <h3>Local Match</h3>
                        <p>play against your friends.... and bots</p>
                    </div>

                    {/* MODAL */}
      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-light">
                
                <div className="modal-header">
                    {/* nav options (pvp or bots) */}
                  <h5 className="modal-title">Local Match</h5>
                  <button 
                    className="btn-close btn-close-white"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                    {/* set the number of games to play */}
                  <p>Set up your match here...</p>
                </div>

                <div className="modal-footer">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button className="btn btn-primary">
                    Start Game
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* BACKDROP */}
          <div 
            className="modal-backdrop fade show"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}

                    

                    <div className="py-3 px-4 rounded mt-3 text-light" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${online})`, backgroundSize:"cover", backgroundPosition:"center", border:"2px solid lime"}}>
                        <h3>Online Match</h3>
                        <p>Coming soon ....</p>
                    </div>

                    
                </div>
            </div>

            
        </section>
    )
}