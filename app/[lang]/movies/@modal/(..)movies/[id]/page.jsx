import Modal from '@/app/components/Modal';
import MovieComponent from '@/app/components/movieShow/MovieComponent';
import React from 'react';

function ModalMovie({ params }) {
 return (
<Modal>
  <MovieComponent id={params.id} type="modal"/>
 </Modal>
 );
}

export default ModalMovie;