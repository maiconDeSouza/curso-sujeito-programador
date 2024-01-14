import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from '../../components/Container'
import { Input } from '../../components/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../services'
import { useEffect } from 'react'

const schema = z.object({
  email: z.string().email('Insira um e-mail válido!'),
  password: z.string().min(3, 'digite pelo menos três caracteres'),
})

type FormData = z.infer<typeof schema>

export function Login() {
  const navigate = useNavigate()
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
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      console.log(response)
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('erro ao logar')
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
            Acessar
          </button>
        </form>
        <Link to="/register">Não possui uma conta? Faça seu Registro</Link>
      </div>
    </Container>
  )
}
