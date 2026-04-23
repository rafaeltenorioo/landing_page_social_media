import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { SocialProof } from "./sections/SocialProof"

const Home = () => {
  return (
    
    <div>
      <Hero />
      <About />
      <SocialProof />
      <Contact />
    </div>
  )
}
export default Home