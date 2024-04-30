import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav className="navbar">
            <a href="#" className="navbar-brand">A Day In My Life</a>
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink exact to="/" className="nav-link">Yesterday</NavLink></li>
              <li className="nav-item"><NavLink to="/calendar" className="nav-link">Calendar</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
            </ul>
          </nav>
          <div className="header-content">
            <div className="header-greeting">
              <span className="greeting-time">Selamat Pagi,</span>
              <span className="greeting-name">Hikmah</span>
            </div>
            <div className="header-datetime">
              <span className="date">Tuesday, 1 April 2024</span>
              <span className="time">11:08:47 AM</span>
            </div>
          </div>
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              {/* Isi komponen untuk halaman "Yesterday" */}
              <section className="carousel-section">
                <div className="carousel">
                  <div className="carousel-item">
                    <img src="makanan.jpeg" alt="Image 1" />
                    <div className="carousel-caption">
                      <h3>In The Morning</h3>
                      <p>Saya melakukan kebiasaan untuk berjalan 5 sampai 10 menit dalam sehari sebelum melakukan aktivitas yang lain.</p>
                    </div>
                  </div>
                </div>
              </section>
            </Route>
            <Route path="/calendar">
              {/* Isi komponen untuk halaman "Calendar" */}
              <section className="carousel-section">
                <div className="carousel">
                  <div className="carousel-item">
                    <img src="jalan.jpg" alt="Image 2" />
                    <div className="carousel-caption">
                      <h3>Studying</h3>
                      <p>Di dalam perkuliahan biasanya melakukan berpartisipasi dalam diskusi kelas, dan melakukan sesi praktikum.</p>
                    </div>
                  </div>
                </div>
              </section>
            </Route>
            <Route path="/about">
              {/* Isi komponen untuk halaman "About" */}
              <section className="carousel-section">
                <div className="carousel">
                  <div className="carousel-item">
                    <img src="kuliah.jpg" alt="Image 3" />
                    <div className="carousel-caption">
                      <h3>In The Evening</h3>
                      <p>Biasanya saya melakukan kebiasaan belajar untuk materi besok dan mengerjakan tugas.</p>
                    </div>
                  </div>
                </div>
              </section>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
