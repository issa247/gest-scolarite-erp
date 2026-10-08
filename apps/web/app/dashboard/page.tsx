export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Tableau de bord</p>
            <h1 className="mt-2 text-2xl font-bold">Accueil du directeur</h1>
          </div>
          <button className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:border-cyan-500">
            Nouvel état
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {[
            { label: 'Effectif total', value: '2 468' },
            { label: 'Inscrits', value: '241' },
            { label: 'Recettes', value: '1 240 000 XOF' },
            { label: 'Impayés', value: '86 000 XOF' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">{item.label}</p>
              <h2 className="mt-3 text-2xl font-bold">{item.value}</h2>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Répartition par classe</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>6e A</span><span>42</span></div>
              <div className="flex items-center justify-between"><span>5e B</span><span>39</span></div>
              <div className="flex items-center justify-between"><span>3e C</span><span>35</span></div>
              <div className="flex items-center justify-between"><span>Terminale A</span><span>28</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">Paiements récents</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Yao Y.</span><span>65 000 XOF</span></div>
              <div className="flex items-center justify-between"><span>Diallo M.</span><span>42 000 XOF</span></div>
              <div className="flex items-center justify-between"><span>Goua J.</span><span>58 500 XOF</span></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
