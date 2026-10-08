export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold">Gestion des élèves</h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="px-4 py-3">Matricule</th>
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Classe</th>
                <th className="px-4 py-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['E-2025-001', 'Koffi A.', '6e A', 'Actif'],
                ['E-2025-012', 'Soro M.', '5e B', 'Actif'],
                ['E-2025-045', 'Nguessan J.', '3e C', 'Actif'],
              ].map(([matricule, name, classe, statut]) => (
                <tr key={matricule} className="border-t border-slate-800">
                  <td className="px-4 py-3">{matricule}</td>
                  <td className="px-4 py-3">{name}</td>
                  <td className="px-4 py-3">{classe}</td>
                  <td className="px-4 py-3 text-cyan-400">{statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
