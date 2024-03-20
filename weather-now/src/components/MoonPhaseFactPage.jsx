import {Link} from 'react-router-dom';

const MoonPhaseFactPage = () => {
  return (
    <div>
      <h1>Moon</h1>
      <p>Fact</p>
      <Link className='back-button' to="/">Back</Link>
    </div>
  )
}
export default MoonPhaseFactPage;