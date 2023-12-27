import Hero from "@/components/home/hero/hero"
import Expertise from "@/components/home/experties/experties"
import Work from "@/components/home/works/works"
import ChoseUs from "@/components/home/choose-us/choose-us"
import Statistics from "@/components/home/statistics/statistics"

const Home = () => {

  return (
    <main className="">
      <Hero />
      <Expertise />
      <Work />
      <ChoseUs />
      <Statistics />
    </main>
  )
}

export default Home