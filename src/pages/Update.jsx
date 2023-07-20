import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { updateProduk } from '../store/produkSlice'
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.all.min.js'

export default function Update() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const produks = useSelector((state) => state.produks)
  const existingProduk = produks.items.filter((f) => f.id == id)
  const { nama, hargaJual, hargaBeli, stok, gambar } = existingProduk[0]
  const [updateFormData, setUpdateFormData] = useState({
    nama: nama,
    hargaJual: hargaJual,
    hargaBeli: hargaBeli,
    stok: stok,
    gambar: gambar,
  })

  const checkSubmit = (event) => {
    event.preventDefault()
    const lengthList = produks.items.length
    let num = 0
    for (let i = 0; i < lengthList; i++) {
      if (produks.items[i].nama == updateFormData.nama) {
        if (produks.items[i].id != id) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nama produk sudah ada',
          })
          num += 1
        }
      }
    }
    if (num == 0) {
      handleUpdate()
    }
  }
  const handleUpdate = () => {
    dispatch(
      updateProduk({
        id: id,
        nama: updateFormData.nama,
        hargaJual: updateFormData.hargaJual,
        hargaBeli: updateFormData.hargaBeli,
        stok: updateFormData.stok,
        gambar: updateFormData.gambar,
      })
    )
    navigate('/')
  }
  return (
    <>
      <div className=' min-h-screen py-2 bg-gray-100'>
        <div className='w-1/3 mx-auto bg-gray-500 px-5 py-2 rounded-md'>
          <h1 className='font-bold text-3xl text-white text-center'>
            UPDATE FORM
          </h1>
          <form className='mt-4' onSubmit={checkSubmit}>
            <div>
              <label className='block text-white'>Nama</label>
              <input
                type='text'
                name='nama'
                value={updateFormData.nama}
                onChange={(e) =>
                  setUpdateFormData({ ...updateFormData, nama: e.target.value })
                }
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
                value={updateFormData.hargaJual}
                onChange={(e) =>
                  setUpdateFormData({
                    ...updateFormData,
                    hargaJual: e.target.value,
                  })
                }
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
                value={updateFormData.hargaBeli}
                onChange={(e) =>
                  setUpdateFormData({
                    ...updateFormData,
                    hargaBeli: e.target.value,
                  })
                }
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
                value={updateFormData.stok}
                onChange={(e) =>
                  setUpdateFormData({ ...updateFormData, stok: e.target.value })
                }
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
                value={updateFormData.gambar}
                onChange={(e) =>
                  setUpdateFormData({
                    ...updateFormData,
                    gambar: e.target.value,
                  })
                }
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
          <Link to={'/'}>
            <button
              type='submit'
              className='w-full block bg-[#ffc600] hover:bg-yellow-500 text-white font-semibold rounded-md
  px-4 py-2 mt-6'
            >
              BACK
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
