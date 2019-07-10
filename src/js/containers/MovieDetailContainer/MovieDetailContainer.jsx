import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='content'>
        <div className='container'>
          <div className='jumbotron bg-danger text-white text-center'>
            <h1 className='display-2 text-center font-weight-bold'>SDCS Movie Finder</h1>
            <h4 className='text-center font-weight-bold'>Welcome to the new Blockbuster.</h4>
          </div>
        </div>

        {/* movie results */}
        <div className='container'>
          {/* return to search button */}
          <div className='text-center mb-4'>
            <button className='btn btn-success' type='button'>Return to Search</button>
          </div>
          {/* single movie card */}
          <div className='row'>
            {/* movie poster */}
            <div className='col-md-3 mb-2' id='imgPoster'>
              <img src='https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg' className='img-fluid' />
            </div>
            {/* movie information */}
            <div className='col-md-9 mb-2'>
              <div className='card border-0 mb-5'>
                {/* movie title and release date */}
                <h1 className='card-header text-white bg-danger font-weight-bold' style={{ fontSize: '34px' }}>Iron Man (2008)</h1>
                {/* movie facts */}
                <div className='card-body mb-0 pb-0'>
                  <table className='table-sm table-borderless table-responsive mb-3'>
                    <tbody>
                      {/* plot */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Plot</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px', paddingRight: '23px' }}>After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</td>
                      </tr>
                      {/* imdb rating */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>IMDB Rating</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>7.9</td>
                      </tr>
                      {/* rated */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Rated</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>PG-13</td>
                      </tr>
                      {/* release date */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Release Date</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>02 May 2008</td>
                      </tr>
                      {/* runtime */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Runtime</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>126 min.</td>
                      </tr>
                      {/* actors/cast */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Cast</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow</td>
                      </tr>
                      {/* director */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Directed By</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>Jon Favreau</td>
                      </tr>
                      {/* genre */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Genre</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>Action, Adventure, Sci-Fi</td>
                      </tr>
                      {/* language */}
                      <tr>
                        <th className='border-top-0 p-3 text-center align-middle' style={{ fontSize: '22px', width: '150px' }} scope='row'>Language</th>
                        <td className='border-top-0 align-middle' style={{ fontSize: '20px' }}>English, Persian, Urdu, Arabic, Hungarian</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailContainer;