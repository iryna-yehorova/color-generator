import './App.css';
import { useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from './store/store'
import { getColorsPalette, setSelected, clearSelected } from './features/dataSlice'

function App() {
  const dispatch = useDispatch()
  const colors = useSelector( state => state.data.colors)
  const loading = useSelector(state => state.data.loading)

  const getColors = () => {
    dispatch(getColorsPalette())
  }

  const getColor = (event) => {
    dispatch(setSelected(event.target.innerHTML))
    dispatch(getColorsPalette())
  }

  const getRandomColor = () => {
    dispatch(clearSelected());
    dispatch(getColorsPalette())
  }

  useEffect(() => {
    getColors()
  }, [])

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
