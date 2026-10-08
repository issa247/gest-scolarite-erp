# GEST-SCOLARITÉ ERP

Monorepo ERP scolaire professionnel pour les établissements d'enseignement en Côte d'Ivoire.

## Architecture retenue
- Web: Next.js + React + Tailwind CSS
- API: NestJS + Prisma + PostgreSQL
- Desktop: Electron + React
- Mobile: Flutter (structure à venir)
- Packages partagés: contracts, validation, permissions, utils
- Sécurité: JWT, RBAC, validation des entrées, contrôle d’accès côté serveur

## Prérequis
- Node.js 20+
- pnpm 9+
- PostgreSQL 16+
- Docker (optionnel)

## Installation
```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Périmètre actuel
- Monorepo initialisé
- Structure de workspaces
- Paramétrage de base du projet
- Documentation de base

## Prochaines étapes
1. Initialisation du backend API NestJS
2. Mise en place du schéma Prisma et migrations
3. Authentification + rôles + permissions
4. Modèle des établissements, utilisateurs et étudiants
5. Gestion des paiements et reçu
6. Interface web fonctionnelle
7. Tests et documentation
