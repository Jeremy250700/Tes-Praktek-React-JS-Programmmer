import Modal from '../components/Modals/Modal'

export default function ModalAdd({
  openModalAdd,
  setOpenModalAdd,
  formDataProduks,
  setValue,
  checkSubmit,
}) {
  return (
    <>
      <Modal
        isOpen={openModalAdd}
        setIsOpen={setOpenModalAdd}
        title='ADD DATA PRODUCT'
      >
        <div className=''>
          <form className='mt-6' onSubmit={checkSubmit}>
            <div>
              <label className='block text-white'>Nama</label>
              <input
                type='text'
                name='nama'
                value={formDataProduks.nama}
                onChange={setValue}
                placeholder='Enter Product Name'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:bg-white focus:outline-none'
                required
              />
            </div>
            <div>
              <label className='block text-white mt-2'>Harga Jual</label>
              <input
                type='number'
                name='hargaJual'
                value={formDataProduks.hargaJual}
                onChange={setValue}
                placeholder='Enter Product Price'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:bg-white focus:outline-none'
                required
              />
            </div>
            <div>
              <label className='block text-white mt-2'>Harga Beli</label>
              <input
                type='number'
                name='hargaBeli'
                value={formDataProduks.hargaBeli}
                onChange={setValue}
                placeholder='Enter Product Price'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:bg-white focus:outline-none'
                required
              />
            </div>
            <div>
              <label className='block text-white mt-2'>Stok</label>
              <input
                type='number'
                name='stok'
                value={formDataProduks.stok}
                onChange={setValue}
                placeholder='Enter Product Stock'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:bg-white focus:outline-none'
                required
              />
            </div>
            <div>
              <label className='block text-white mt-2'>Gambar</label>
              <input
                type='text'
                name='gambar'
                value={formDataProduks.gambar}
                onChange={setValue}
                placeholder='Enter Link Product Image'
                className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:bg-white focus:outline-none'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full block bg-green-500 hover:bg-green-700 text-white font-semibold rounded-md
          px-4 py-2 mt-6'
            >
              SAVE
            </button>
          </form>
        </div>
      </Modal>
    </>
  )
}
