import './App.css';
import { useState } from 'react'

function App() {
  const [colors, setColors] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
			<h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
				Random <span className="text-active">Color Pallete</span>{' '}
				Generator
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6 font-ebas">
				Click change to get a random color pallete
			</h2>

      <button className="mt-10 font-bold text-primary text-xl hover:text-active">
        {
          loading ? (<span className="animate-pulse">Loading...</span>) : (<>Change &rarr;</>)
        }
			</button>
		</div>
  );
}

export default App;
