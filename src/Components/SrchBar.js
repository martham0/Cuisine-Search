import './SrchBar.css';
function SrchBar({ cuisine, location, input, select, val }) {
  return (
    <div className="center ba br-pill pa3 ma3 shadow-5 srch">
      <label className="db fw8 lh-copy f4 " htmlFor="cuisine">
        Cuisine
      </label>
      <input
        className="input-reset"
        type="text"
        size="24"
        placeholder="Cuisine"
        onChange={cuisine}
      />
      <div>
        <label className="db  fw8 lh-copy f4" htmlFor="location">
          Location
        </label>
        <input
          className="input-reset"
          type="text"
          size="24"
          placeholder="Location"
          onChange={location}
        />
      </div>
      <div>
        <label className="db fw8 lh-copy f4" htmlFor="number">
          Num. of restaurants{' '}
        </label>
        <select
          value={val}
          onChange={select}
          className="tr"
          style={{ width: 200 }}
          id="number"
          name="number"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <input
        className=" pointer ma2"
        type="submit"
        value="Search"
        style={{ width: 200 }}
        onClick={() => input()}
      />

      {/* <div className="pb2">
        <label htmlfor="location">Location: </label>    
        <input type="text" name="location" id="location" />
      </div> */}
    </div>
  );
}

export default SrchBar;
