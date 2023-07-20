import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function About () {
    return (
        <div>
            <Header />
           
            <div className="bg-slate-300">
                <div className="flex">
                    <div className="ml-8 py-40">
                        <h3 className="text-6xl pb-14 ">Brand Name</h3>
                        <p className="text-xl">Perusahaan yang bergerak dibidang marketing.</p>
                        <p className="text-xl">Brand Name telah berdiri sejak 2017. <br /> Kami terus berkembang dengan menjalin mitra UMKM dibeberapa daerah</p>
                    </div>
                    <div>
                        <img className=" w-auto h-full" src="https://awsimages.detik.net.id/community/media/visual/2022/09/22/ilustrasi-legalitas-perusahaan_169.jpeg?w=600&q=90" />
                    </div>            
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About