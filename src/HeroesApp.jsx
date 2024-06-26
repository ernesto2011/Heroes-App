import { AuthProvider } from "./Auth";
import { AppRouter } from "./router/AppRouter";

export default function HeroesApp() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
