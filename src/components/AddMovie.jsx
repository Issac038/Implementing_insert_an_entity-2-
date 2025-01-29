import { useNavigate } from 'react-router-dom';
import './AddMovie.css'

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add Movie</h1>
      <form>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Director" required />
        <select>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>
        <input type="number" placeholder="Release Year" required />
        <textarea placeholder="Synopsis"></textarea>
        <input type="url" placeholder="Poster Image URL" />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
