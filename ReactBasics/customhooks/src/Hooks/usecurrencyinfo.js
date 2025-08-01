import { useEffect, useState } from "react";

function UseCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=> {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    return data
}
// let url = `https://cdn.jsdeliver.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

export default UseCurrencyInfo