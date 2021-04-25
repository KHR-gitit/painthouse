import { useState, useEffect } from 'react';



const Portifolio = () => {  
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData () {
        let res = await fetch('https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=IGQVJXSmF3Q0ZA4WURMMW9SOGZANd09VVHUtWkltVGpUY1M4YVJkZADc4a0ZArbF8tX2NndzRQY2duUVVnS2xTQlFOR0drekZAwTnExS3pnMVdFQkNKMkJ2eGQ2TV9wWHFXWEh5ZAGVpVy1VQUJEX29jQnBmMwZDZD');
        res = await res.json();
            console.log(res.data);
        setData(()=>{
            let finalData =[];
            for(let i = 0; i < res.data.length; i++) {
                if(res.data[i].media_type === 'IMAGE') {
                    finalData.push({
                        id : res.data[i].id,
                        media_url : res.data[i].media_url,
                        data_type : res.data[i].media_type,
                        link : res.data[i].permalink
                    })
                } else if (res.data[i].media_type === 'VIDEO') {
                    finalData.push({
                        id : res.data[i].id,
                        media_url : res.data[i].thumbnail_url,
                        video_link : res.data[i].media_url,
                        data_type : res.data[i].media_type,
                        link : res.data[i].permalink
                    })
                }
            }
            return finalData;
        });
        setLoading(false);  
    }
    fetchData();

    }, []);
    console.log(data);

return (

        <section className="py-32 bg-gray-200">
            <h1 className="text-5xl text-center ">
                Our Recent Projects
            </h1>
        <div className="container px-5 pt-32 mx-auto flex flex-row ">
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-col flex-wrap w-1/2 flex-grow px-5 md:flex-row">
                    <div className="md:p-2 w-full p-1 md:w-1/2" style={{height:"300px"}}>
                        <a href={loading? 'loading' : data[0].link}><img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[0].media_url}/></a>
                    </div>
                    <div className="md:p-2 w-full p-1 md:w-1/2" style={{height:"300px"}}>
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[1].media_url }/>
                    </div>
                    <div className="md:p-2 p-1 w-full" style={{height:"360px"}}>
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src={loading? 'loading' : data[7].media_url}/>
                    </div>
                </div>
            </div>
            <div className=" flex-wrap md:-m-2 -m-1 hidden lg:flex">
                <div className="flex flex-wrap w-1/2  flex-grow">
                    <div className="md:p-2 p-1 w-full" style={{height:"360px"}}>
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src={loading? 'loading' : data[2].media_url}/>
                    </div>
                    <div className="md:p-2 p-1 w-1/2" style={{height:"300px"}}>
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src={loading? 'loading' : data[5].media_url}/>
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
