import './App.css';
import { useState, useEffect } from 'react'
import * as dataApi from './backend/dataApi'

function App() {
  const [colors, setColors] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)

  const getColors = async () => {
    try { 
      setLoading(true);
      let params = null

      if(selected & selected.length > 0) {
        params = selected.slice(1)
      } else {
        params = Math.floor(Math.random()*16777215).toString(16)
      }

      const res = await dataApi.getPalette(params);
      setColors(res); 
    } catch(err) {
      throw new Error(err)
    } finally {
      setLoading(false)
    }
  }

  const getColor = (event) => {
    setSelected(event.target.innerHTML)
    getColors()
  }

  const getRandomColor = () => {
    setSelected('')
    getColors()
  }

  useEffect(() => {
    getColors()
  }, [])

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span style={{color: colors ? colors[4] : 'yellow'}}>Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>

      {colors && (
				<div className="mt-20 grid grid-cols-5 rounded-lg">
					{colors.map((color, index) => {
						return (
							<div
								key={index}
								className="text-primary font-bold sm:text-xl text-sm sm:px-12 px-2 py-36"
								style={{backgroundColor: color}}
                onClick={getColor}
							>
								{color}
							</div>
						);
					})}
				</div>
			)}

      <button className="mt-10 font-bold text-primary text-xl hover:text-active" onClick={getRandomColor}>
        {
          loading ? (<span className="animate-pulse">Loading...</span>) : (<>Change &rarr;</>)
        }
			</button>
		</div>
  );
}

export default App;
