import { useState, useEffect } from "react"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {
	
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)

	function handleToggleModal() {
		setShowModal(!showModal)
	}

	useEffect(() => {
		const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
		async function fetchAPI() {
			const url = "https://api.nasa.gov/planetary/apod" + 
			`?api_key=${NASA_KEY}`

			const today = new Date().toDateString()
			const localKey = `NASA-${today}`

			if (localStorage.getItem(localKey)) {
				setData(JSON.parse(localStorage.getItem(localKey)))
				console.log("Data fetched from local storage")
				return
			}
			localStorage.removeItem(localKey)
			try {
				const res = await fetch(url)
				const apiData = await res.json()
				localStorage.setItem(localKey, JSON.stringify(apiData))
				setData(apiData)
				console.log("Data fetched from API")
			} catch (error) {
				console.error(error.message)
			}
		}
		fetchAPI()
		
	}, [])
	
	return (
		<>
			{data ? (<Main data={data} />) : (
			<div className="loadingState">
				<i className="fa-solid fa-gear"></i>
			</div>
			)}
			{showModal && 
			(
			<SideBar data={data} handleToggleModal={handleToggleModal}/>
			)}
			{data && (<Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal}/>)}

		</>
	)
}

export default App
