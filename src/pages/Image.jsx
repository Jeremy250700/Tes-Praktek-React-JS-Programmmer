import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function Image() {
  const { id } = useParams()
  const produks = useSelector((state) => state.produks)
  return (
    <>
      <div className=' min-h-screen py-5 bg-gray-100'>
        <h1 className='text-4xl font-bold text-center text-gray-700 mb-7'>
          {' '}
          Gambar Produk
        </h1>
        <div>
          <img
            src={produks.items[id - 1].gambar}
            alt={produks.items[id - 1].nama}
            className='mx-auto w-96'
          />
        </div>
        <Link to={'/'}>
          <button
            type='submit'
            className='mx-auto block w-1/3 bg-[#ffc600] hover:bg-yellow-500 text-white font-semibold rounded-md
  px-4 py-2 mt-6'
          >
            BACK
          </button>
        </Link>
      </div>
    </>
  )
}
