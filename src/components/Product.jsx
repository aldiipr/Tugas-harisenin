function Product ({data}) {
    return (
        <div className="border border-gray-200 rounded shadow bg-white max-w-xs cursor-pointer">
            <div className="flex justify-center" >
                <img className=" w-7/12" src= {data.image} />
            </div>
            <div className="py-2 px-4">
                <div className="text-xl">
                    {data.name}
                </div>
                <div className="font-semibold">
                    {data.price}
                </div>
            </div>
        </div>
    )
}
export default Product