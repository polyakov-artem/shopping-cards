import React from 'react';
import { connect } from 'react-redux'
import { fetchProducts, updateSortBy, arrangeProducts } from './../../store/actions/cardsActions';
import { toggleMenu } from './../../store/actions/cartActions';

import Filter from './../Filter/Filter';
import ResultsPanel from './../ResultsPanel/ResultsPanel';
import Cards from './../Cards/Cards';
import Cart from './../Cart/Cart';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { arrangedProducts } = this.props;

    return (
      <React.Fragment>
        <div className='container'>
          <div className="row">
            <aside className='aside-panel'>
              <Filter/>
            </aside>
            <main className='content'>
              <ResultsPanel resultsNum = {arrangedProducts.length}/>
              <Cards classes={['row']} arrangedProducts = {arrangedProducts}/>
            </main>
          </div>
        </div>
        <Cart/>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrangedProducts: state.cardsReducer.arrangedProducts,
    productsAreLoading: state.cardsReducer.loading,
    productsError: state.cardsReducer.error,
    menuIsOpen: state.cartReducer.menuIsOpen,
  }
}

const mapDispatchToProps = {
  fetchProducts,
  toggleMenu,
  arrangeProducts,
  updateSortBy
}


export default connect(mapStateToProps, mapDispatchToProps)(App)