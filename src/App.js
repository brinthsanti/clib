import Accordion from './Accordion';

const test = [
  {
    title: 'Test1',
    content: 'Content 1'
  },
  {
    title: 'Test2',
    content: 'Content 2'
  },
  {
    title: 'Test3',
    content: 'Content 3'
  },
  {
    title: 'Test4',
    content: 'Content 4'
  },
  {
    title: 'Test5',
    content: 'Content 5'
  },
  {
    title: 'Test6',
    content: 'Content 6'
  }
];

function App() {
  return (
    <div className="App">
      {/* <AccordionPanel title='Hello' content='content' dynamicToggle={false}/> */}
      <Accordion data={test} />
    </div>
  );
}

export default App;
