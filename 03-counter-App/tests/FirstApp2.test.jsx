import { render, screen } from "@testing-library/react"
import FirstApp from "../src/firstApp"

describe('Pruebas en <FirstApp/>', () => {
  
  const title= 'I am title';
  const subTitle= 'I am subTitle';

  test('Debe Hacer match con el Snapshot', () => { 

    const { container } =  render( <FirstApp title={title}/> )
    expect ( container ).toMatchSnapshot();

  })
  
  test('debe mostrar el mensaje "I am title"', () => {
    
    render( <FirstApp title={title}/> )
    expect( screen.getByText( title )).toBeTruthy(); 
    // screen.debug();

  })

  test('debe mostrar el titulo en un H1', () => {
    
    render( <FirstApp title={title}/> )
    expect( screen.getByRole( 'heading', { leavel: 1 } ).innerHTML).toContain(title);

  })

  test('debe mostrar el subtitulo enviado por props', () => {

    
    render( 
      <FirstApp title={title} subtitle={subTitle} /> 
    )
    expect( screen.getAllByText(subTitle).length).toBe(2); 
  })
})
