import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      'required_permissions',
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user || !user.roles) {
      throw new ForbiddenException('Accès refusé');
    }

    const hasAccess = requiredPermissions.every((permission) =>
      user.roles.includes(permission),
    );

    if (!hasAccess) {
      throw new ForbiddenException('Permissions insuffisantes');
    }

    return true;
  }
}
