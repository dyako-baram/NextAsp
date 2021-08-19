import React from 'react'
import moment from 'moment'

const Weather = ({date,temc,temf,summary}) => {

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
            {moment(date).utc().format('DD/MM/YYYY hh:mm:ss')
            }
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {temc}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {temf}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {summary}
            </td>
        </tr>
    )
}

export default Weather