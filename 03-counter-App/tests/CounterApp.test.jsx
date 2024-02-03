import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp/>', () => {
  const valueInicial = 0;
  test('Debe Hacer match con el Snapshot', () => { 

    const { container } = render( < CounterApp value={ valueInicial }/> )
    expect ( container ).toMatchSnapshot();
  })

  test('debe mostar el valor inicial de 100', ()=>{

    render( < CounterApp value={ 100 }/> )
    // expect( screen.getByText( '100')).toBeTruthy();
    expect( screen.getByRole( 'heading',{ level: 2 } ).innerHTML).toContain('100');
  })

  test('debe incrementar con el boton +1', () => { 
    
    render( <CounterApp value={valueInicial}/>);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('1')).toBeTruthy();
  })

  test('debe decrementar con el boton -1', () => { 
    
    render( <CounterApp value={valueInicial}/>);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('-1')).toBeTruthy();
  })
})