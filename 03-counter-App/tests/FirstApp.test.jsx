import { render } from "@testing-library/react"
import FirstApp from "../src/firstApp"

describe('Pruebas en <FirstApp/>', () => {
  
  // test('Debe Hacer match con el Snapshot', () => { 
  //   const title= 'I am title'
  //   const { container } =  render( <FirstApp title={title}/> )
    
  //   expect ( container ).toMatchSnapshot();
  // })
  
  // test('debe mostrar el titulo en un H1', () => {
  //   const title= 'I am title';
  //   const {getByText, getByTestId} =  render( <FirstApp title={title}/> )
  //   expect( getByText( title )).toBeTruthy(); 

  //   expect( getByTestId( 'test-title').innerHTML).toBe( title)

  // })

  test('debe mostrar el subtitulo enviado por props', () => {
    const title= 'I am title';
    const subTitle= 'I am subTitle';
    const {getByText} =  render( 
      <FirstApp title={title} subtitle={subTitle}/> 
    )
    expect( getByText(subTitle)).toBeTruthy(); 
  })
})
