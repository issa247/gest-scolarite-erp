# État d’avancement du projet

## Terminé
- création du dépôt GitHub
- initialisation du monorepo TypeScript
- configuration du workspace pnpm
- base des fichiers de configuration
- backend NestJS initial
- schéma Prisma initial
- autorisations centralisées
- interface web de base

## Fichiers principaux créés
- package.json
- pnpm-workspace.yaml
- tsconfig.base.json
- .env.example
- apps/api/package.json
- apps/api/tsconfig.json
- apps/api/src/main.ts
- apps/api/src/app.module.ts
- apps/api/src/prisma/*.ts
- apps/api/src/auth/*.ts
- apps/api/src/users/*.ts
- apps/api/src/schools/*.ts
- apps/api/prisma/schema.prisma
- apps/web/package.json
- apps/web/app/page.tsx
- packages/permissions/src/index.ts
- packages/contracts/src/index.ts
- packages/utils/src/index.ts
- docs/ARCHITECTURE.md

## Limites connues
- aucun test n’a encore été exécuté dans cet environnement
- la base Prisma est initialisée mais non migrée dans un environnement local
- il manque les modules métier avancés (élèves, paiements, bulletin, SMS, etc.)

## Prochaine étape
Poursuivre avec les modules de base : établissements, utilisateurs, rôles, permissions, élèves, parents, admissions et paiements.
