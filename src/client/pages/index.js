import Head from 'next/head'
import { useEffect,useState } from 'react'
import Weather from '../components/Weather'
import Loading from '../components/Loading'
import axios from 'axios'

export default function Home() {
  const [weather, setWeather] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios.get("/weatherforecast")
      .then(result => {
        setIsLoaded(true);
        setWeather(result.data);
      })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <h1 className="text-center py-4 text-xl text-gray-700 font-bold">Weather Data From ASP.NET Core WebApi <span className="text-blue-400">:)</span></h1>
        
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    temperature C
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    temperature F
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Summary
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoaded?(weather.map(w=><Weather key={w.date} date={w.date} temc={w.temperatureC} temf={w.temperatureF} summary={w.summary} />) ):(<Loading/>)}
              </tbody>
            </table>
          </div>
            <p className="capitalize text-gray-300 text-xs py-6"><span className="text-gray-400">Note:</span> the only change made to web api is to configure it to work with Nextjs and nothing else, there is no Database in this project.</p>
        </div>
      </div>
    </div>
      
    </div>
  )
}
