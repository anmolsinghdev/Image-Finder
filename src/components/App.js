import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

class App extends React.Component {
  state = { images: [], loading: false };

  onSearchSubmit = async (term) => {
    this.setState({ loading: true });

    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results, loading: false });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ImageList images={this.state.images} />
        )}
        'loading Clone'
      </div>
    );
  }
}

export default App;
