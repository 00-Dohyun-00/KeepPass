import React from 'react'
import Button from 'react-bootstrap/Button'

function HomePage() {
  return (
    <div className="HomePage">
      <h1>홈페이지</h1>
      <h1 className="text-primary">Welcome to KeepPass</h1>
      <button className="btn btn-success">Click me</button>

      <Button variant="primary">Bootstrap Button</Button>
    </div>
  )
}

export default HomePage
