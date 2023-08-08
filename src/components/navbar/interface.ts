interface IRoute {
  label: string;
  route: string;
}

export interface INavbar {
  logo: {
    src: string;
    alt: string;
  };
  routes: IRoute[];
}
