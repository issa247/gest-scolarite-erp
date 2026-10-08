export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">GEST-SCOLARITÉ</p>
            <h1 className="mt-2 text-3xl font-bold">ERP scolaire professionnel</h1>
          </div>
          <button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400">
            Connexion
          </button>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { label: 'Élèves', value: '2 468' },
            { label: 'Encaissements', value: '1 240 000 XOF' },
            { label: 'Présences', value: '96.4%' },
            { label: 'Taux de recouvrement', value: '92.7%' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">{item.label}</p>
              <h2 className="mt-3 text-2xl font-bold">{item.value}</h2>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">Activités récentes</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Paiement validé pour Koffi A. – 65 000 XOF</li>
              <li>• Bulletin publié pour la classe 6e A</li>
              <li>• Rappel SMS envoyé aux parents en retard</li>
              <li>• Nouvelle inscription validée par le secrétariat</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">Accès rapide</h3>
            <div className="mt-4 space-y-3">
              {['Élèves', 'Paiements', 'Présences', 'Bulletins', 'Classes', 'Rapports'].map((item) => (
                <button key={item} className="block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-left text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-400">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
