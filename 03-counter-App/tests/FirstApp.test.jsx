import { render } from "@testing-library/react"
import FirstApp from "../src/firstApp"

describe('Pruebas en <FirstApp/>', () => {
  
  test('Debe Hacer match con el Snapshot', () => { 
    const title= 'I am title'
    render( <FirstApp title={title}/> )
    
  })
})
