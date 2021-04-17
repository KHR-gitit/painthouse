import { useState, useEffect } from 'react';







const Portifolio = () => {  
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData () {
        let res = await fetch('https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url&access_token=IGQVJXSmF3Q0ZA4WURMMW9SOGZANd09VVHUtWkltVGpUY1M4YVJkZADc4a0ZArbF8tX2NndzRQY2duUVVnS2xTQlFOR0drekZAwTnExS3pnMVdFQkNKMkJ2eGQ2TV9wWHFXWEh5ZAGVpVy1VQUJEX29jQnBmMwZDZD');
        res = await res.json();
        setData(res.data);
        setLoading(false);  
    }
    fetchData();

    }, []);
return (
        <section className="py-32 bg-gray-200">
            <h1 className="text-5xl text-center ">
                Our Recent Projects
            </h1>
        <div className="container px-5 pt-32 mx-auto flex flex-row ">
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-col flex-wrap w-1/2 flex-grow px-5 md:flex-row">
                    <div className="md:p-2 w-full p-1 md:w-1/2" style={{height:"300px"}}>
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[0].thumbnail_url}/>
                    </div>
                    <div className="md:p-2 w-full p-1 md:w-1/2" style={{height:"300px"}}>
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[9].media_url }/>
                    </div>
                    <div className="md:p-2 p-1 w-full" style={{height:"360px"}}>
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src={loading? 'loading' : data[7].media_url}/>
                    </div>
                </div>
            </div>
            <div className=" flex-wrap md:-m-2 -m-1 hidden lg:flex">
                <div className="flex flex-wrap w-1/2  flex-grow">
                    <div className="md:p-2 p-1 w-full" style={{height:"360px"}}>
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src={loading? 'loading' : data[10].media_url}/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2" style={{height:"300px"}}>
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[5].thumbnail_url}/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2" style={{height:"300px"}}>
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[6].media_url}/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}


export default Portifolio;
