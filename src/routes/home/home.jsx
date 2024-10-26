import './home.css';
import Header from '../../layouts/header/header';

export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
