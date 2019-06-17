import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const roles = JSON.parse(userinfo.roles);

    for (const item of roles) {
      if (item === next.data.role) {
        console.log(item);
        console.log(next.data.role);
        return true;
      }
    }
    this._router.navigate(["pages/404"]);
    return false;
  }
}
