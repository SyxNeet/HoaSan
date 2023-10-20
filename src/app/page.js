// import Home from '../pageComponents/HomePage'
import dynamic from 'next/dynamic'
export default function page() {
  const Home = dynamic(
    ()=>{
      return import ('../pageComponents/HomePage')
    },
    {ssr:false}
  )
  return (
    <main>
      <Home />
    </main>
  )
}
