export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-900/20">
        <div className="mb-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">GEST-SCOLARITÉ</p>
          <h1 className="mt-3 text-2xl font-bold">Connexion</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-300">Adresse e-mail</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500" placeholder="admin@gest-scolarite.ci" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">Mot de passe</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-500" placeholder="••••••••" />
          </div>

          <button className="w-full rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
