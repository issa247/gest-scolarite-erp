# GEST-SCOLARITÉ ERP — Déploiement et architecture production

## Objectif
Ce dépôt prépare une base de production pour un ERP scolaire professionnel multientreprises en Côte d’Ivoire, avec une séparation claire entre le backend API, le web, les modules métier et les outils d’intégration.

## Stack cible
- TypeScript strict
- Next.js + React + Tailwind
- NestJS + Prisma + PostgreSQL
- Docker + Docker Compose
- CI/CD GitHub Actions

## Ports de référence
- Web: 3000
- API: 4000
- PostgreSQL: 5432
- Docker local: 5432 (DB), 4000 (API), 3000 (web)

## Sécurité
- JWT sécurisé
- mots de passe hachés avec bcrypt
- validation côté serveur
- mécanismes RBAC
- journalisation d’audit

## Déploiement réel
Le déploiement réel nécessite :
- un serveur ou un provider cloud
- un domaine réel
- une base PostgreSQL hébergée
- variables d’environnement sécurisées
- HTTPS activé
- monitoring et sauvegardes

## Limites actuelles
- le code est mis en place dans le dépôt, mais sans environnement d’exécution réel, le build/test n’a pas été vérifié dans cette session.
- la mise en ligne définitive dépend d’un hébergement réel et d’un environnement de lancement.
