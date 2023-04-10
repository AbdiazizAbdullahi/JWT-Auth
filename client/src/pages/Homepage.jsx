import React from 'react'
import '../css/Homepage.css'
import useAuthStore from '../store/JwtToken';

const Homepage = () => {
  const token = useAuthStore((state) => state.token);

  console.log(token)

  return (
    <div>
      <main className="homepage-main">
        <section className="no-parallax">
          <h1>Parallax</h1>
        </section>
        <section className="parallax b">
          <div className="parallax-content">
            <h1>Pure CSS</h1>
          </div>
        </section>
        <section className="no-parallax">
          <h1>Sick Right?</h1>
        </section>
      </main>
    </div>
  )
}

export default Homepage