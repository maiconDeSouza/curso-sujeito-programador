import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from '../../components/Container'
import { Input } from '../../components/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../services'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const schema = z.object({
  name: z.string().min(5, 'digite seu nome completo'),
  email: z.string().email('Insira um e-mail válido!'),
  password: z.string().min(3, 'digite pelo menos três caracteres'),
})

type FormData = z.infer<typeof schema>

export function Register() {
  const navigate = useNavigate()
  const { handleInfoUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth)
    }
    handleLogout()
  }, [])

  async function handleSubmitForm(data: FormData) {
    try {
      const rersponse = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      await updateProfile(rersponse.user, {
        displayName: data.name,
      })
      handleInfoUser({
        uid: rersponse.user.uid,
        name: data.name,
        email: data.email,
      })
      console.log('Cadastrado com sucesso!')
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('Deu algum erro')
      console.log(error)
    }
  }
  return (
    <Container>
      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
        <Link to="/" className="mb-6 w-full max-w-sm">
          <img src={logoImg} alt="" className="w-full" />
        </Link>
        <form
          className="bg-white max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Digite seu nome..."
              name="name"
              error={errors.name?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Digite seu e-mail..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>
          <button
            type="submit"
            className="bg-zinc-900 text-white font-bold text-xl w-full py-4 rounded-lg"
          >
            Cadastrar
          </button>
        </form>
        <Link to="/login">Já possui uma conta? Faça o Login</Link>
      </div>
    </Container>
  )
}
