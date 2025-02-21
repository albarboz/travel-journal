import Header from './components/Header'
import Card from './components/Card'
import data from './data'


export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {data.map(item =>
        (
          <div key={item.id}>
            <Card
              key={item.id}
              item={item}
            />
            <hr className="card__line" />
          </div>
        ))}
      </div>
    </div>
  )
}

