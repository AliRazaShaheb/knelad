import React, {useEffect, useState} from 'react'
import moment from 'moment';



const CovidData = ({covidData}) => {
       



    return (
        <div className="py-2 h-full bg-blue-100">
        <h1 className='font-bold text-red-500 text-lg text-center uppercase'>Covid Data</h1>
        {
            covidData.map((covidData) =>(
                <>
                    <h3 className='bg-yellow-700 text-white font-semibold text-lg text-center '>Country: {covidData.country}</h3>
                    <div className='px-4 font-semibold flex flex-col justify-between   bg-red-200'>
                        <p>Total Confirmed:<span className='ml-2 font-semibold text-lg text-blue-700'>{covidData.deaths}</span></p>
                        <p>Total Deceased:<span className='ml-2 font-semibold text-lg text-red-700'>{covidData.deaths}</span></p>
                        <p>Total Critical:<span className='ml-2 font-semibold text-lg text-yellow-700'>{covidData.critical}</span></p>
                        <p>Total Recovered:<span className='ml-2 font-semibold text-lg text-green-700'>{covidData.recovered}</span></p>
                        <p>Last Update:<span className='ml-2 font-semibold text-sm text-gray-700'>{moment(covidData.lastUpdate).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                    </div>
                </>
            ))
        }
        </div>
    )
}

export default CovidData



