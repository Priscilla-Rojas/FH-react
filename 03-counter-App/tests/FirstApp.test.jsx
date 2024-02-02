import { render } from "@testing-library/react"
import FirstApp from "../src/firstApp"

describe('Pruebas en <FirstApp/>', () => {
  
  // test('Debe Hacer match con el Snapshot', () => { 
  //   const title= 'I am title'
  //   const { container } =  render( <FirstApp title={title}/> )
    
  //   expect ( container ).toMatchSnapshot();
  // })
  
  test('debe mostrar el titulo en un H1', () => {
    const title= 'I am title';
    const { container, getByText } =  render( <FirstApp title={title}/> )
    expect( getByText( title )).toBeTruthy(); // verifico que exista el texto 'I am title'
    // const h1 = container.querySelector('h1');
    // expect( h1.innerHTML).toContain( title );





  })
})
