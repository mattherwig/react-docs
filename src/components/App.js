import Clock from './Clock';
import Toggle from './Toggle';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Counter from './Counter';
import GeneratorClass from './GeneratorClass';
import GeneratorFunction from './GeneratorFunction';
import CounterButton from './CounterButton';
import CounterButtonReduce from './CounterButtonReduce';

export default function App(props) {
  return (
    <div>
      {/* <Clock /> */}
      {/* <Toggle /> */}
      {/* <NameForm /> */}
      {/* <FlavorForm /> */}
      {/* <Reservation /> */}
      {/* <Counter /> */}
      {/* <GeneratorClass /> */}
      {/* <GeneratorFunction /> */}
      {/* <CounterButton initialCount={0} /> */}
      <CounterButtonReduce initialState={{ count: 0 }}></CounterButtonReduce>
    </div>
  );
}