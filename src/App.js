import React, { Component } from 'react'

import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import SearchBar from './Components/SearchBar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Loader from 'react-loader-spinner';

import getPhoto from './apiServise';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    searchArray: [],
    isLoading: false,
    showModal: false,
    largePhoto: '',
  }

  componentDidUpdate( prevProps, prevState ) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.fetchPhotos();
    }
  }

  updateQuery = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      searchArray: [],
    })
  }

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));

    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  }

  fetchPhotos = () => {
    this.setState({ isLoading: true });

    const { searchQuery ,page } = this.state;

    getPhoto(searchQuery, page)
      .then((photos) => {
      this.setState((prevState) => ({
        searchArray: [...prevState.searchArray, ...photos],
      }))
      }).finally(this.setState({isLoading: false}))
  }

  showModal = (event) => {
    const { datalarge } = event.target.attributes;

    this.setState({
      showModal: true,
      largePhoto: datalarge.value,
    })
  }

  closeModal = (event) => {
    if (event.target === event.currentTarget || event.code === 'Escape') {
      this.setState({
        showModal: false,
        largePhoto: '',
      })
    }
  }

  render() {
    const { searchQuery, searchArray, isLoading, showModal, largePhoto } = this.state;
    const shouldRenderMoreBtn = searchArray.length > 0 && !isLoading;

    return <>
      <SearchBar onSubmit={this.updateQuery} />
      
      {isLoading && <Loader className="Loader" color="#3f51b5" type="TailSpin" height={60} width={60} />}
      
      <ImageGallery photos={this.state.searchArray} query={this.state.searchQuery} onClick={this.showModal} /> 
      
      {shouldRenderMoreBtn && <Button onClick={this.loadMore} />}

      { showModal && <Modal largePhoto={largePhoto} alt={searchQuery} onClose={ this.closeModal }/>}
      </>
  }
}

export default App;
