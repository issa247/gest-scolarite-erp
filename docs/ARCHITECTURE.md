# Architecture technique

## Vue d'ensemble
Le monorepo suit une séparation claire entre :
- `apps/web` : application web Next.js
- `apps/api` : API backend NestJS
- `apps/desktop` : application locale Electron
- `packages/*` : composants partagés, permissions, contrats et utilitaires

## Modèle de données
La base de données modélise les établissements, utilisateurs, rôles, permissions, élèves, paiements, reçus, notes, présences et journaux d’audit. La structure est conçue pour l’isolation au niveau établissement et la traçabilité financière.

## Sécurité
- hachage de mots de passe avec bcrypt
- JWT pour la session web
- contrôles d’accès côté serveur
- règles par établissement
- validation des entrées côté API
- journalisation des opérations sensibles

## Prochaines étapes
- compléter le schéma Prisma complet
- ajouter les modules de scolarité et de paiements
- sécuriser les autorisations par ressource
- intégrer les tests d’intégration
- préparer la synchronisation locale/web
