import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Login () {
   
	

    return (
        <div>
            <Header />
            <div className="justify-center w-2/4 h-auto ml-40 my-20">
                <form method="post" >
                    <div className="px-5 border border-gray-200 rounded shadow-sm">
                        <div className="flex flex-col my-7 gap-2">
                            <label htmlFor="email" className="text-xl">Alamat Email</label> 
                            <input type="email" className="w-auto h-10 bg-gray-200 rounded  px-4" placeholder="Masukkan Alamat Email" required/>
                        </div>
                        <div className=" flex flex-col my-7 ">
                            <label htmlFor="password" className="text-xl">Kata Sandi</label>
                            <input type="password" className="w-auto h-10 bg-gray-200 rounded  px-4" />
                        </div>
                        <button type="submit" className="border rounded bg-gray-600 py-2 px-5 text-xl font-semibold text-white my-3">MASUK </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
       
    )
}
