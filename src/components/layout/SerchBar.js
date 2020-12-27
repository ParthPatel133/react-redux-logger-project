const Serchbar = () => {
  return (
    <div>
      <nav style={{marginBottom: '1.5rem'}} className=''>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input id='search' type='search' required />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Serchbar;