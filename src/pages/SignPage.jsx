import { AuthForm } from '@kinfe123/farm-ui/auth/form'

const SignPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <AuthForm
        type="sign-in"
        onSubmit={(data) => console.log('Sign in:', data)}
        socialProviders={['google', 'github']}
        forgotPasswordLink="/forgot-password"
        signUpLink="/sign-up"
      />
    </div>
  )
}

export default SignPage