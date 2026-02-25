import user from "../assets/user.png"
export default function Dashboard(){
    return(
        <section className="container-fluid">
            <div className="row bg-dark d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 bg-warning d-flex justify-content-center align-items-center flex-column">
                    <img src={user} alt="user profile pic" className="w-25 pt-3" />
                    <p className="pt-3">John49Doe</p>

                    <hr style={{width:"90%"}}/>
                </div>

            </div>

            {/* summary */}
            <div className="row bg-dark d-flex justify-content-center align-items-center">
                
                <div className="col-12 col-md-6 bg-dark">

                    <div className="row text-light px-3 px-md-0">
                        <h2 className="py-4 px-4">Summary</h2>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                             <p className="display-3 py-4 px-3 rounded fw-bold" style={{background:"white", color:"gray"}}><span>65</span>%</p>
                        </div>

                        <div className="col-8 text-light">
                           <p>Matches Played: 0</p>
                           <p>Matches Won:    0</p>
                           <p>Matches Lossed: 0</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}