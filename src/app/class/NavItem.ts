import {iNavItem} from "../interfaces/iNavItem";

export class NavItem implements iNavItem {
  path: string;
  titulo: string;

  static links: iNavItem[] = [
    {
      path: 'dashboard/alumnos',
      titulo: 'Alumnos'
    }
  ]
}
