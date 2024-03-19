
import './App.css'
import Card from './components/Card';

function App() {
  const cardData1 = {
    title: 'Card 1 Title',
    description: 'Description for Card 1',
    date: 'August 15, 2022'
  };

  const cardData2 = {
    title: 'Card 2 Title',
    description: 'Description for Card 2',
  };

  const cardData3 = {
    title: 'Card 3 Title',
    description: 'How rapidly is the Indian startup ecosystem growing?',
  };
  return (
    <>
      <div>
  
    <div className='flex gap-10'>
      <Card {...cardData1} />
      <Card {...cardData2} />
      <Card {...cardData3} />
    </div>
    </div>
    </>
  )
}

export default App
