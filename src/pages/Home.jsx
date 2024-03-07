import Header from "../components/Header"

const Home = () => {
  return (
      <main className="flex flex-col w-full min-h-screen text-white">
          <Header />
          <h1 className="text-2xl text-center">Home Page</h1>
      </main>
  )
}

export default Home