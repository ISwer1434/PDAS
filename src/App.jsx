import ProfileCard from "./ProfileCard"

function App(){

  return (
    <>
    <h1>componente App</h1>
    <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
      </div>
    </section>
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
            title="alexa"
            handle="@alexa24"
            image="data:image/png;base64,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"
            />
          </div>
          <div className="column is-4">
            <ProfileCard
            title="Cortana"
            handle="@cortana001"
            image="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/08/115841-que-es-como-funciona-cortana-windows-10.jpg?tf=3840x"
            />
          </div>
          <div className="column is-4">
            <ProfileCard
            title="siri"
            handle="@siri05"
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapple.fandom.com%2Fes%2Fwiki%2FSiri&psig=AOvVaw07YI5lelZUbbTt5xYvYjmh&ust=1743214772537000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjfiJzbq4wDFQAAAAAdAAAAABAE"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App