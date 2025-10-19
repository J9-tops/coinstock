import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'dashboard',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'dashboard/:page',
    renderMode: RenderMode.Server,
  },
];
