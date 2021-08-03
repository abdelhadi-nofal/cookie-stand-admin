import { useState } from 'react';
import { workHours } from "../data"
import "tailwindcss/tailwind.css";


export default function CookieStandMain(props) {

    const [location,setLocation] = useState("");
    const [minCustHr,setminCustHr] = useState("");
    const [maxCustHr,setmaxCustHr] = useState("");
    const [avgCookiesPerSale,setavgCookiesPerSale] = useState("");
    const [report,setReport] = useState([]);
    const [sum,setSum] = useState([])


    function locHandler(event){
        setLocation(event.target.value);
    }
    function minHandler(event){
        setminCustHr(event.target.value);
    }
    function maxHandler(event){
        setmaxCustHr(event.target.value);
    }
    function avgHandler(event){
        setavgCookiesPerSale(event.target.value);
    }

    function onCreate(event){
        event.preventDefault();
        const result = []
        const data = {
            location:location,
            hourlySales:[],
            minHourlyCustomers:minCustHr,
            maxHourlyCustomers:maxCustHr,
            avgSalesCookies:avgCookiesPerSale
        }
        for (let i = 0; i < 14; i++){
            let rand  = Math.random()
            let sum = rand*(parseInt(maxCustHr)-parseInt(minCustHr)+1) + parseInt(minCustHr)
            data.hourlySales.push(Math.floor(sum))
            for (let j = 0; j < report.length+1; j++) {
                sum += report[j]? report[j].hourlySales[i] : 0 
            }
            result.push(sum)
        }

      
        setReport([...report,data])
        setSum(result)
        props.setBranches(report.length + 1)
      }



    return (
        <main className='grid w-full p-10 px-0 text-center bg-green-100 justify-items-stretch'>
            <form onSubmit={onCreate} className = 'className="px-11 py-4 mx-10 bg-green-300 rounded w-4/5justify-self-center' >
            <h2 > Create Cookie Stand</h2>
            <label className="w-3 text-left p3">Location<input name = 'location' id = 'location' required  className='w-5/6 m-3' type="text" onChange={locHandler}/></label>
            <div className="py-3">
            <label className="inline-block m-4">Minimum Customers per Hour<br/><input className=" bg-white w-60" name="minCustHr" type="number" id = 'minCustHr' required onChange={minHandler} /></label>
            <label className="inline-block m-4">Maximum Customers per Hour<br/><input className="bg-white w-60" name="maxCustHr" type="number" id = 'maxCustHr' required onChange={maxHandler} /></label>
            <label className="inline-block m-4">Average Cookies per Sale<br/><input className="bg-white w-60" name="avgCookiesPerSale" type="number" id = 'avgCookiesPerSale' required onChange={avgHandler}/></label>
            <button className="bg-green-500 w-70 p-3  m-3 " type="submit">Create<br/></button>
            </div>
            </form>
            <div className="inline-block flex flex-col ... text-center ... mb-8 ... container mx-auto w-4/5">
                {(report.length == 0) ? 
                <h2 className='m-4'>No Cookie Stands Available</h2> :
                <table  className="m-8 border-collapse border border-gray-900 rounded-lg">
                    <thead className="bg-green-500">
                        <tr>
                            <th>
                                Location
                            </th>
                            {workHours.map((hour,id) => <th key = {id}>{hour}</th>)}
                            <th>
                                Totals
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-collapse border border-gray-900">
                        {report.map((data, id) => (
                            <tr className="border-collapse border border-gray-900" key={id}>
                                <td className="border-collapse border border-gray-900">{data.location}</td>
                                {data.hourlySales.map((cookie ,id) => <td key={id} className="border-collapse border border-gray-900">{cookie}</td>)}
                                <td className="border-collapse border border-gray-900">{data.hourlySales.reduce((acc, curr) => {acc = acc+curr; return acc},0)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="border-collapse border border-gray-900 bg-green-500">
                        <tr className="border-collapse border border-gray-900" key={report.length + 1}>
                            <th className="border-collapse border border-gray-900">Totals</th>
                            {sum.map((sum,id) => <th key = {id} className="border-collapse border border-gray-900">{parseInt(sum)}</th>)}
                            <th className="border-collapse border border-gray-900">{sum.reduce((acc, curr) => {acc = acc+curr; return parseInt(acc)},0)}</th>
                        </tr>
                    </tfoot>
                </table>
                }  
            </div>
        </main>
            )}

