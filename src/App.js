import { useState } from "react"
import { sculptureList } from "./data"

const App = () => {
  return (
    <Toolbar 
      onPlayMovie = {() => alert('Playing!')}
      onUploadImage = {() => alert('Uploading!')}
    />
  )
}

const Toolbar = ({onPlayMovie, onUploadImage}) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        onUploadImage
      </Button>
    </div>
  )
}

const Button = ({onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default App;