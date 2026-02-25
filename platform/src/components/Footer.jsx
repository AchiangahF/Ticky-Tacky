
function Footer(){

    const hozLineStyle = {
        width: "80%",
        margin: "25px auto",
        border: "2px solid gray",
    }
    return(
        <section className="container-fluid bg-dark">
            <div className="row">
                <div className="col-md-12 p-4 text-center">
                    <h2 className="text-light py-3">What Are You Waiting For ?</h2>
                    <button type="button" className="btn btn-warning">Sign Up</button>

                    <hr style={hozLineStyle} />
                </div>

                {/*  Force next columns to break to new line */}
                <div className="w-100"></div>

                <div className="col-md-12">
                    <p className="mb-0 text-secondary text-center pb-4">
                       © {new Date().getFullYear()} Ticky Tacky. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer