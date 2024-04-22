import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux"
import { changeSearchStr } from "../../redux/filtersSlice"

function SearchBox({ searchStr }) {

  const dispatch = useDispatch()
  return (
    <div className={s.wrap}>
      <h2>Find contacts by name</h2>
      <input
        value={searchStr}
        onChange={(e) => dispatch(changeSearchStr(e.target.value))}
        className={s.input}
        type="text"
        placeholder="Enter contact name..."
      />
      {searchStr && (<button className={s.btn} onClick={() => dispatch(changeSearchStr(''))}>Reset</button>
      )}
    </div>
  );
}

export default SearchBox;