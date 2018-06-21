import Vue from 'vue';
import axios from 'axios';
import createStore from './store';
import configMixin from './util/config-mixin';
import Mapboard from './components/Mapboard.vue';
import mergeDeep from './util/merge-deep';
import controllerMixin from './controller';
import generateUniqueId from './util/unique-id';

// helper function to auto-assign ids to horizontal tables
function assignTableIds(comps) {
  // console.log('assignTableIds comps:', comps);
  for (let comp of comps) {
    const options = comp.options || {};
    // console.log('assignTableIds, comp:', comp);
    const innerComps = options.components || options.tables;

    // if this is a "group" component, recurse
    if (innerComps) {
      assignTableIds(innerComps);
      // return;
    }

    // skip comps that aren't horizontal tables
    if (comp.type !== 'horizontal-table') {
      continue;
    }

     const id = generateUniqueId();
     comp._id = id;
     // the id also needs to get passed to the horizontal table component, so
     // use the options object.
     comp.options.tableId = id;
  }
}

function assignHorizontalTableGroupIds(comps) {
  // console.log('assignHorizontalTableGroupIds is running, comps:', comps);
  for (let comp of comps) {
    const options = comp.options || {};
    // const innerComps = options.components;
    const innerComps = options.tables;

    // if this is a "group" component, recurse
    if (!innerComps) {
      continue;
    }

    // skip comps that aren't horizontal table groups
    if (comp.type !== 'horizontal-table-group') {
      continue;
    }

     const id = generateUniqueId();
     // console.log('assignHorizontalTableGroupIds id:', id);
     comp._id = id;
     // the id also needs to get passed to the horizontal table component, so
     // use the options object.
     comp.options.horizontalTableGroupId = id;
  }
}

function initMapboard(clientConfig) {
  // console.log('clientConfig:', clientConfig);
  const baseConfigUrl = clientConfig.baseConfig;

  // create a global event bus used to proxy events to the mapboard host
  // const eventBus = new Vue();
  // Vue.prototype.$eventBus = eventBus;

  // get base config
  return axios.get(baseConfigUrl).then(response => {
    const data = response.data;

    // parse raw js. yes, it's ok to use eval :)
    // http://stackoverflow.com/a/87260/676001
    const baseConfigFn = eval(data);
    const { gatekeeperKey } = clientConfig;
    const baseConfig = baseConfigFn({ gatekeeperKey });

    // deep merge base config and client config
    //const config = mergeDeep(clientConfig, baseConfig);
    const config = mergeDeep(baseConfig, clientConfig);
    // console.log('config:', config);

    // assign table ids
    for (let topic of config.topics) {
      // console.log('topic:', topic);
      assignTableIds(topic.components);
      assignHorizontalTableGroupIds(topic.components);
    }

    // make config accessible from each component via this.$config
    Vue.use(configMixin, config);

    // create store
    const store = createStore(config);

    // create and globally mix in data manager
    // const dataManager = new DataManager({ store, config, eventBus });

    // REVIEW there might be a cleaner way of doing this:
    // https://vuejs.org/v2/guide/plugins.html
    // Vue.use((Vue, dataManager) => {
    //   Vue.mixin({
    //     created() {
    //       this.$dataManager = dataManager;
    //     }
    //   });
    // }, dataManager);

    // create router
    // Vue.use(routerMixin, { config, store, eventBus, dataManager });

    // mix in controller
    Vue.use(controllerMixin, { config, store });
    // Vue.use(controllerMixin, { config, store, eventBus });

    // mount main vue
    const vm = new Vue({
      el: config.el || '#mapboard',
      render: h => h(Mapboard),
      store
    });

    // bind mapboard events to host app
    // const events = config.events || {};
    // for (let eventName of Object.keys(events)) {
    //   const callback = events[eventName];
    //   vm.$eventBus.$on(eventName, callback);
    // }

    // event api for host apps
    // this doesn't work now that we're getting the base config
    // asynchronously. see above for workaround.
    // REVIEW it would be nice to return the jquery ajax deferred and have the
    // client app call .then() on it.
    // return {
    //   on(eventName, callback) {
    //     vm.$eventBus.$on(eventName, callback);
    //     return this;
    //   },
    //   off(eventName, callback) {
    //     vm.$eventBus.$off(eventName, callback);
    //     return this;
    //   }
    // };

  }).catch(err => {
    console.error('Error loading base config:', err);
  });
}

export default initMapboard;

// also expose the vue component as a named export
export { Mapboard };
