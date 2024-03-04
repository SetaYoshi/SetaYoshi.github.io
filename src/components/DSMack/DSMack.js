import Collapsible from 'react-collapsible';
import 'components/DSMack/DSMack.css'

function DSMack({ name, children }) {
  return (<>
  <section>
      <Collapsible trigger={name} className='header-dsm' openedClassName='header-dsm'>
        <p className='body-dsm'>
        {children}
      </p>
    </Collapsible>
  </section>
  </>)
}


export default DSMack;