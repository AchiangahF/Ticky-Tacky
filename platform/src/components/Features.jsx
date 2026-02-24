
function Features(){

    return(
        <section className="container-fluid mt-2" style={{backgroundColor:"#eaeaeae2"}}>

            {/* first group of features */}

            <div className="row py-4 gap-5 justify-content-center px-3 px-md-0">
                <div className="col-md-4" style={{border:"2px solid black", borderRadius:"5px"}}>
                    <img className="py-3" src="../icons/speed.png" alt="hot-time" style={{width:"50px", margin:"0 auto", display:"block"}}/>
                    <h4 className="py-2 text-center">Beat the Clock</h4>
                    <p className="py-2 px-4">Each player has limited time to make moves. Run out of time and you lose — even if the board is still open.</p>
                </div>

                <div className="col-md-4" style={{border:"2px solid black", borderRadius:"5px"}}>
                    <img className="py-3" src="../icons/trophy.png" alt="trophy" style={{width:"50px", margin:"0 auto", display:"block"}}/>
                    <h4 className="py-2 text-center">Best of N Series</h4>
                    <p className="py-2 px-4">Choose between 1 to 10 matches. Battle continuously and let the highest total wins decide the champion.</p>
                </div>
            </div>

             {/* second group of features */}
            
            <div className="row py-4 justify-content-center gap-5 px-3 px-md-0">
                <div className="col-md-4" style={{border:"2px solid black", borderRadius:"5px"}}>
                    <img className="py-3" src="../icons/wifi.png" alt="trophy" style={{width:"50px", margin:"0 auto", display:"block"}}/>
                    <h4 className="py-2 text-center">Local Wi-Fi Battles</h4>
                    <p className="py-2 px-4">Challenge friends over Wi-Fi and compete in real-time multiplayer action.</p>
                </div>

                <div className="col-md-4" style={{border:"2px solid black", borderRadius:"5px"}}>
                    <img className="py-3" src="../icons/robot.png" alt="trophy" style={{width:"50px", margin:"0 auto", display:"block"}}/>
                    <h4 className="py-2 text-center">Smart AI Opponent</h4>
                    <p className="py-2 px-4">Practice your strategy against the computer. Improve your skills before facing real players.</p>
                </div>
            </div>
        </section>
    )    
}

export default Features