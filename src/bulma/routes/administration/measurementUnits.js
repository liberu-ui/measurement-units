import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./measurementUnits', false, /.*\.js$/));
const RouterView = () => import('@core/bulma/pages/Router.vue');

export default {
    path: 'measurementUnits',
    component: RouterView,
    meta: {
        breadcrumb: 'measurement units',
        route: 'administration.measurementUnits.index',
    },
    children: routes,
};
