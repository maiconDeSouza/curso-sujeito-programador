import { FiTrash, FiUpload } from 'react-icons/fi'
import { Container } from '../../../components/Container'
import { PanelHeader } from '../../../components/PanelHeader'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../../components/Input'
import { ChangeEvent, useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { storage } from '../../../services'

const schema = z.object({
  name: z.string().min(1, 'O Campo nome é obrigatório'),
  model: z.string().min(1, 'O Campo modelo é obrigatório'),
  year: z.string().min(1, 'O Campo ano é obrigatório'),
  km: z.string().min(1, 'O Campo KM do carro é obrigatório'),
  price: z.string().min(1, 'O Campo preço do carro é obrigatório'),
  city: z.string().min(1, 'O Campo cidade é obrigatório'),
  whatsapp: z
    .string()
    .min(1, 'O Campo WhatsApp é obrigatório')
    .refine((value) => /^(\d{11,12})$/.test(value), {
      message: 'Numero de telefone invalido',
    }),
  description: z.string().min(1, 'O Campo Descrição é obrigatório'),
})

type FormData = z.infer<typeof schema>

interface ImageItemProps {
  uid: string
  name: string
  previewUrl: string
  url: string
}

export function NewCar() {
  const [carImages, setCarImages] = useState<ImageItemProps[]>([])
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  function onSubmit(data: FormData) {
    console.log(data)
    reset()
  }

  async function handleUpload(image: File) {
    if (!user?.uid) {
      return alert('sem user')
    }
    const currentUid = user.uid
    const uuidImage = uuidv4()

    const upLoadRef = ref(storage, `images/${currentUid}/${uuidImage}`)

    const response = await uploadBytes(upLoadRef, image)
    const downloadUrl = await getDownloadURL(response.ref)
    const imageItem = {
      name: currentUid,
      uid: uuidImage,
      previewUrl: URL.createObjectURL(image),
      url: downloadUrl,
    }
    setCarImages((state) => [...state, imageItem])
  }

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        await handleUpload(image)
      } else {
        alert('Imagem tem que png ou jpeg')
      }
    }
  }

  async function handleDeleteImage(item: ImageItemProps) {
    const imagePath = `images/${item.name}/${item.uid}`

    const imageRef = ref(storage, imagePath)

    try {
      await deleteObject(imageRef)
      setCarImages(carImages.filter((image) => image.url !== item.url))
    } catch (error) {
      console.log(`Não deletou`)
      console.log(error)
    }
  }

  return (
    <Container>
      <PanelHeader />
      <main className="flex flex-col gap-2">
        <div className="relative w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
          <button
            type="button"
            title="Upload"
            className="border-2 border-gray-600 w-48 h-32 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <div className="absolute cursor-pointer">
              <FiUpload size={30} color="#000" />
            </div>
          </button>
          <input
            type="file"
            accept="image/*"
            title="Upload"
            className="opacity-0 cursor-pointer absolute top-0 left-0 w-full h-full"
            onChange={handleFile}
          />
          <ul className="flex items-center gap-2">
            {carImages.map((image) => {
              return (
                <li key={image.uid}>
                  <button
                    type="button"
                    title="trash"
                    className="absolute text-white hover:text-red-500"
                    onClick={() => handleDeleteImage(image)}
                  >
                    <FiTrash size={28} />
                  </button>
                  <img
                    src={image.previewUrl}
                    alt=""
                    className="w-full h-32 rounded-lg object-cover"
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="mb-2 font-medium">
                Nome do Carro
              </label>
              <Input
                type="text"
                register={register}
                name="name"
                error={errors.name?.message}
                placeholder="Ex:. Onix 1.0..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="model" className="mb-2 font-medium">
                Modelo do Carro
              </label>
              <Input
                type="text"
                register={register}
                name="model"
                error={errors.model?.message}
                placeholder="Ex:. 1.0 Flex PLUS Manual"
              />
            </div>
            <div className="flex w-full mb-3 flex-row items-center gap-4">
              <div className="w-full">
                <label htmlFor="km" className="mb-2 font-medium">
                  KM rodado
                </label>
                <Input
                  type="text"
                  register={register}
                  name="km"
                  error={errors.km?.message}
                  placeholder="Ex:. 23.900..."
                />
              </div>
              <div className="w-full">
                <label htmlFor="year" className="mb-2 font-medium">
                  Ano do Carro
                </label>
                <Input
                  type="text"
                  register={register}
                  name="year"
                  error={errors.year?.message}
                  placeholder="Ex:. 2005/2005..."
                />
              </div>
            </div>
            <div className="flex w-full mb-3 flex-row items-center gap-4">
              <div className="w-full">
                <label htmlFor="whatsapp" className="mb-2 font-medium">
                  Telefone / WhatsApp
                </label>
                <Input
                  type="text"
                  register={register}
                  name="whatsapp"
                  error={errors.whatsapp?.message}
                  placeholder="Ex:. 11999999999"
                />
              </div>
              <div className="w-full">
                <label htmlFor="city" className="mb-2 font-medium">
                  Cidade / Estado
                </label>
                <Input
                  type="text"
                  register={register}
                  name="city"
                  error={errors.city?.message}
                  placeholder="Ex:. São Paulo/SP..."
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="mb-2 font-medium">
                Preço
              </label>
              <Input
                type="text"
                register={register}
                name="price"
                error={errors.price?.message}
                placeholder="Ex:. 39.890,00..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="mb-2 font-medium">
                Descrição
              </label>
              <textarea
                id="description"
                className="border-2 w-full rounded-lg h-24 px-2"
                {...register('description')}
                placeholder="Digite a descrição do seu carro..."
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-10 rounded-lg bg-zinc-900 text-white font-medium"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </Container>
  )
}
