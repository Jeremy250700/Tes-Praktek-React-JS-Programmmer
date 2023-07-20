import { useEffect, useState } from 'react'
import ModalAdd from './ModalAdd'
import { useDispatch, useSelector } from 'react-redux'
import { addProduk, clear, deleteProduk } from '../store/produkSlice'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.all.min.js'

export default function Home() {
  const produks = useSelector((state) => state.produks)
  const dispatch = useDispatch()

  const [openModalAdd, setOpenModalAdd] = useState(false)
  const handleModalAdd = () => {
    setFormDataProduks({
      nama: '',
      hargaBeli: 0,
      hargaJual: 0,
      stok: 0,
      gambar: '',
    })
    setOpenModalAdd(true)
  }

  const [formDataProduks, setFormDataProduks] = useState({
    nama: '',
    hargaBeli: 0,
    hargaJual: 0,
    stok: 0,
    gambar: '',
  })

  const setValue = (event) => {
    setFormDataProduks({
      ...formDataProduks,
      [event.target.name]: event.target.value,
    })
  }
  const checkSubmit = (event) => {
    event.preventDefault()
    const lengthList = produks.items.length
    let num = 0
    for (let i = 0; i < lengthList; i++) {
      if (produks.items[i].nama == formDataProduks.nama) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nama produk tidak boleh sama',
        })
        num += 1
      }
    }
    if (num == 0) {
      handleAddSubmit()
    }
  }

  const handleAddSubmit = () => {
    const lengthList = produks.items.length
    let newId = 0
    if (lengthList == 0) {
      newId += 1
    } else {
      newId = produks.items[lengthList - 1].id + 1
    }
    dispatch(
      addProduk({
        id: newId,
        nama: formDataProduks.nama,
        hargaBeli: formDataProduks.hargaBeli,
        hargaJual: formDataProduks.hargaJual,
        stok: formDataProduks.stok,
        gambar: formDataProduks.gambar,
      })
    )
    setOpenModalAdd(false)
  }

  const handleDelete = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduk(data))
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  return (
    <>
      <div className='text-gray-900 bg-gray-200 min-h-screen'>
        <div className='p-4 flex justify-between'>
          <h1 className='text-3xl'>List Produk</h1>
          <button
            className='bg-green-600 hover:bg-green-800 px-5 py-2 rounded-md text-white'
            onClick={handleModalAdd}
          >
            Add Produk
          </button>
        </div>
        <div className='px-3 py-4 flex justify-center'>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <tbody>
              <tr className='border-b'>
                <th className='text-left p-3 px-5'>No</th>
                <th className='text-left p-3 px-5'>Name</th>
                <th className='text-left p-3 px-5'>Harga Beli</th>
                <th className='text-left p-3 px-5'>Harga Jual</th>
                <th className='text-left p-3 px-5'>Stok</th>
                <th className=''>Action</th>
              </tr>
              {produks.items.map((data, index) => (
                <tr
                  className='border-b hover:bg-gray-200 bg-gray-100'
                  key={data.id}
                >
                  <td className='p-3 px-5'>
                    <h1>{index + 1}</h1>
                  </td>
                  <td className='p-3 px-5'>
                    <h1>{data.nama}</h1>
                  </td>
                  <td className='p-3 px-5'>
                    <h1>
                      {'Rp. ' +
                        new Intl.NumberFormat('en-US').format(data.hargaBeli)}
                    </h1>
                  </td>
                  <td className='p-3 px-5'>
                    <h1>
                      {'Rp. ' +
                        new Intl.NumberFormat('en-US').format(data.hargaJual)}
                    </h1>
                  </td>
                  <td className='p-3 px-5'>
                    <h1>{data.stok}</h1>
                  </td>
                  <td className='p-3 px-5 flex justify-center'>
                    <Link to={`/image/${data.id}`}>
                      <button
                        type='button'
                        className='mr-3 text-sm bg-yellow-300 hover:bg-yellow-500 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                      >
                        Image
                      </button>
                    </Link>
                    <Link to={`/update/${data.id}`}>
                      <button
                        type='button'
                        className='mr-3 text-sm bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      type='button'
                      className='text-sm bg-red-500 hover:bg-red-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                      onClick={() => handleDelete(data)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdd
        {...{
          openModalAdd,
          setOpenModalAdd,
          setValue,
          formDataProduks,
          checkSubmit,
        }}
      />
    </>
  )
}
