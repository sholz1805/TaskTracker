import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn Java',
      day: 'June 18th at 1:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Complete my React project',
      day: 'June 19th at 2:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Do the dishes',
      day: 'June 18th at 2:00pm',
      reminder: false,
    },
  ])

  return (
    <div className='container'>
       <Header title='Task Tracker'/>
       <Tasks tasks={tasks}/>
    </div>
    

  );
}
 
export default App;
